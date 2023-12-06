import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { Trans, useTranslation } from 'react-i18next';
import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { CREATE_CONTACT_MUTATION } from '../../../graphql/mutation';
import { ReactNode, useState } from 'react';
import { omit } from 'lodash';
import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  FONT_FAMILY_FORMULA,
  FONT_FAMILY_MONO,
  SecondaryButton,
  StyledInput,
  StyledTextArea,
  colors,
} from '../../design';
import styled from 'styled-components';
import { rem } from 'polished';
import Link from 'next/link';
// import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

type CustomInputProps = {
  children: ReactNode;
  title: string;
};

const CustomInput = ({ children, title }: CustomInputProps) => (
  <Flex position="relative">
    <Text
      fontFamily={FONT_FAMILY_MONO.REGULAR}
      fontWeight={700}
      fontSize={rem(200)}
      lineHeight={rem(200)}
      color={colors.primaryLight}
      userSelect="none"
    >
      <Trans i18nKey={title} />
    </Text>
    <Flex position="absolute" left={0} top={0} height="100%">
      {children}
    </Flex>
  </Flex>
);

export const ContactForm = () => {
  const { t, i18n } = useTranslation(['footer']);
  const lang = i18n.language ?? 'en';
  // const { executeRecaptcha } = useGoogleReCaptcha();
  const toast = useToast();
  const [createContactMutate] = useMutation(CREATE_CONTACT_MUTATION);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    const ommitedValues = omit(values, ['agreements']);
    // if (!executeRecaptcha) {
    //   console.log('Execute recaptcha not yet available');
    //   return;
    // }
    // const recaptchaToken = await executeRecaptcha('contact');
    setIsLoading(true);
    const dataToSend = {
      ...ommitedValues,
      // recaptchaToken,
    };
    try {
      setIsLoading(true);
      await createContactMutate({
        variables: {
          createContactInput: dataToSend,
        },
      });
      toast({
        position: 'bottom-right',
        render: () => (
          <Flex
            color="white"
            p={3}
            pl={5}
            bg={colors.primary}
            alignItems="center"
            borderRadius={20}
          >
            <StyledCheckIcon />
            <Text
              fontSize={rem(14)}
              fontFamily={FONT_FAMILY_FORMULA.MEDIUM}
              color="white"
              ml={3}
            >
              {lang === 'en'
                ? 'Message has been sent.'
                : 'Správa bola odoslaná.'}
            </Text>
          </Flex>
        ),
        isClosable: true,
      });
      setIsLoading(false);
    } catch (err) {
      toast({
        position: 'bottom-right',
        title: 'Nie je možné vytvoriť objednávku',
        status: 'error',
        isClosable: true,
      });
      setIsLoading(false);
    }
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
        agreements: false,
      }}
      validationSchema={yup.object().shape({
        name: yup.string().required('Povinné pole'),
        email: yup.string().email().required('Povinné pole'),
        message: yup.string().required('Povinné pole'),
      })}
      onSubmit={async (values) => {
        await handleSubmit(values);
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ handleSubmit, errors, values, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.name}>
            <CustomInput title={'footer:name'}>
              <Field
                as={StyledInput}
                id="name"
                name="name"
                type="text"
                placeholder={t('footer:name_placeholder')}
                variant="filled"
              />
            </CustomInput>
            <StyledFormErrorMessage>{errors.name}</StyledFormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <CustomInput title={'footer:email'}>
              <Field
                as={StyledInput}
                id="email"
                name="email"
                type="email"
                variant="filled"
                placeholder={t('footer:email_placeholder')}
              />
            </CustomInput>
            <StyledFormErrorMessage>{errors.email}</StyledFormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.message}>
            <CustomInput title={'footer:message'}>
              <Field
                as={StyledTextArea}
                id="message"
                name="message"
                rows={1}
                placeholder={t('footer:message_placeholder')}
              />
            </CustomInput>
            <StyledFormErrorMessage>{errors.message}</StyledFormErrorMessage>
          </FormControl>
          <Flex mt={rem(92)} alignItems="center">
            <SecondaryButton
              disabled={!values.agreements || isLoading}
              type="submit"
            >
              {t('footer:send')}
            </SecondaryButton>

            <Box ml={rem(72)}>
              <Field
                as={Checkbox}
                size="sm"
                labelColor="white"
                name="agreements"
                checked={values.agreements}
              >
                {t('footer:agreements')}
              </Field>
            </Box>
          </Flex>
        </form>
      )}
    </Formik>
  );
};

const StyledFormErrorMessage = styled(FormErrorMessage)`
  margin-top: 0 !important;
  position: absolute;
  font-size: 11px !important;
`;

const StyledCheckIcon = styled(CheckCircleIcon)`
  path {
    color: white;
  }
`;
