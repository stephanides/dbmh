import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { Element } from 'react-scroll';
import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import {
  Box,
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
  EmailEn,
  EmailMobileEn,
  Error,
  ErrorMessage,
  FONT_FAMILY_FORMULA,
  MessageEn,
  MessageMobileEn,
  NameEn,
  NameMobileEn,
  SecondaryButton,
  StyledCheckbox,
  StyledInput,
  StyledTextArea,
  Thanks,
  media,
} from '../../design';
import styled from 'styled-components';
import { rem } from 'polished';

type CustomInputProps = {
  input: ReactNode;
  title: ReactNode;
  titleMobile: ReactNode;
  hasError?: boolean;
};

const CustomInput = ({ input, title, hasError = false }: CustomInputProps) => (
  <CustomInputWrapper
    position="relative"
    mb={hasError ? 0 : rem(24)}
    height={{ base: rem(80), sm: rem(100), lg: rem(140) }}
  >
    <CustomInputTextWrapper maxW={rem(826)}>{title}</CustomInputTextWrapper>
    <Flex
      position="absolute"
      left={0}
      top={0}
      height="100%"
      width="calc(100% - 80px)"
      alignItems="center"
    >
      {input}
    </Flex>
    {hasError && (
      <Box
        position="absolute"
        right={0}
        top={{ base: 'calc(50% - 15px)', md: 'calc(50% - 30px)' }}
        width={{ base: rem(30), md: rem(60) }}
      >
        <Error />
      </Box>
    )}
  </CustomInputWrapper>
);

export const ContactForm = () => {
  const { t, i18n } = useTranslation(['footer']);
  const lang = i18n.language ?? 'en';
  // const { executeRecaptcha } = useGoogleReCaptcha();
  const toast = useToast();
  const [createContactMutate] = useMutation(CREATE_CONTACT_MUTATION);
  const [isLoading, setIsLoading] = useState(false);
  const [contactResult, setContactResult] = useState({
    isVisible: false,
    isSuccess: false,
  });

  const handleScrollToContent = (content: string) => {
    scroller.scrollTo(content, {
      duration: 700,
      delay: 50,
      smooth: true,
      offset: -120,
    });
  };

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
      // await createContactMutate({
      //   variables: {
      //     createContactInput: dataToSend,
      //   },
      // });
      setContactResult({
        isVisible: true,
        isSuccess: true,
      });
      handleScrollToContent('contactForm');
      setIsLoading(false);
    } catch (err) {
      setContactResult({
        isVisible: true,
        isSuccess: false,
      });
      setIsLoading(false);
    }
  };
  return (
    <Element name="contactForm">
      {contactResult.isVisible ? (
        <Box>
          {contactResult.isSuccess ? (
            <Box pb={{ base: 0, xl: rem(160) }}>
              <Flex position="relative">
                <Flex width="100%" justifyContent="flex-start">
                  <Thanks />
                </Flex>
                <Box
                  position="absolute"
                  top="calc(50% - 14px)"
                  left={0}
                  width="100%"
                >
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={{ base: rem(20), md: rem(28), '2xl': rem(48) }}
                    color="white"
                    lineHeight={rem(32)}
                    textAlign="left"
                    zIndex={2}
                  >
                    Thank you!
                  </Text>
                </Box>
              </Flex>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                fontSize={{ base: rem(28), '2xl': rem(28) }}
                mt={{ base: rem(32), md: rem(74) }}
                mb={{ base: rem(60), md: rem(140) }}
              >
                We have your message. We will respond in next few days and look
                forward to meeting you.
              </Text>
              <StyledSecondaryButton
                onClick={() => {
                  setContactResult({
                    isVisible: false,
                    isSuccess: false,
                  });
                  handleScrollToContent('contactForm');
                }}
              >
                Contact form
              </StyledSecondaryButton>
            </Box>
          ) : (
            <Box pb={{ base: 0, xl: rem(160) }}>
              <Flex position="relative">
                <Flex width="100%" justifyContent="flex-start">
                  <ErrorMessage />
                </Flex>
                <Box
                  position="absolute"
                  top="calc(50% - 14px)"
                  left={0}
                  width="100%"
                >
                  <Text
                    fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                    fontSize={{ base: rem(20), md: rem(28), '2xl': rem(48) }}
                    color="white"
                    lineHeight={rem(32)}
                    textAlign="left"
                    zIndex={2}
                  >
                    Something went wrong
                  </Text>
                </Box>
              </Flex>
              <Text
                fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
                fontSize={{ base: rem(28), '2xl': rem(28) }}
                mt={{ base: rem(32), md: rem(74) }}
                mb={{ base: rem(60), md: rem(140) }}
              >
                There was a trouble with process your request. Please try again
                now or later.
              </Text>
              <StyledSecondaryButton
                onClick={() => {
                  setContactResult({
                    isVisible: false,
                    isSuccess: false,
                  });
                  handleScrollToContent('contactForm');
                }}
              >
                Try again
              </StyledSecondaryButton>
            </Box>
          )}
        </Box>
      ) : (
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
            agreements: false,
          }}
          validationSchema={yup.object().shape({
            name: yup.string().required('Required field'),
            email: yup
              .string()
              .email()
              .required('Please use correct format - example@this.com'),
            message: yup.string().required('Required field'),
          })}
          onSubmit={async (values) => {
            await handleSubmit(values);
          }}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ handleSubmit, errors, values, setFieldValue }) => (
            <form onSubmit={handleSubmit} autoComplete="off">
              <FormControl isInvalid={!!errors.name}>
                <CustomInput
                  title={<NameEn />}
                  titleMobile={<NameMobileEn />}
                  hasError={!!errors.name}
                  input={
                    <Field
                      as={StyledInput}
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t('footer:name_placeholder')}
                      variant="filled"
                    />
                  }
                ></CustomInput>
                <StyledFormErrorMessage>{errors.name}</StyledFormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
                <CustomInput
                  hasError={!!errors.email}
                  title={<EmailEn />}
                  titleMobile={<EmailMobileEn />}
                  input={
                    <Field
                      as={StyledInput}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                      placeholder={t('footer:email_placeholder')}
                    />
                  }
                ></CustomInput>
                <StyledFormErrorMessage>{errors.email}</StyledFormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.message}>
                <CustomInput
                  hasError={!!errors.message}
                  title={<MessageEn />}
                  titleMobile={<MessageMobileEn />}
                  input={
                    <Field
                      as={StyledTextArea}
                      id="message"
                      name="message"
                      rows={1}
                      placeholder={t('footer:message_placeholder')}
                    />
                  }
                ></CustomInput>
                <StyledFormErrorMessage>
                  {errors.message}
                </StyledFormErrorMessage>
              </FormControl>
              <Flex
                mt={{ base: rem(40), xl: rem(92) }}
                alignItems={{ base: 'flex-start', md: 'center' }}
                flexDir={{ base: 'column-reverse', md: 'row' }}
                width="100%"
              >
                <StyledSecondaryButton
                  disabled={!values.agreements || isLoading}
                  type="submit"
                >
                  {t('footer:send')}
                </StyledSecondaryButton>

                <Box
                  ml={{ base: 0, md: rem(72) }}
                  mb={{ base: rem(32), md: 0 }}
                >
                  <Field
                    as={StyledCheckbox}
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
      )}
    </Element>
  );
};

const StyledFormErrorMessage = styled(FormErrorMessage)`
  margin-top: 0 !important;
  position: relative;
  font-size: 22px !important;
  font-family: ${FONT_FAMILY_FORMULA.EXTRA_BOLD};
  color: white !important;
  ${media.down.md} {
    font-size: 14px !important;
  }
`;

const StyledCheckIcon = styled(CheckCircleIcon)`
  path {
    color: white;
  }
`;

const StyledSecondaryButton = styled(SecondaryButton)`
  ${media.down.md} {
    width: 100%;
  }
`;

const CustomInputTextWrapper = styled(Box)`
  opacity: 1;
  transition: opacity 0.5s ease-out;
`;

const CustomInputWrapper = styled(Flex)`
  &:hover {
    ${CustomInputTextWrapper} {
      opacity: 0.3;
    }
  }
`;
