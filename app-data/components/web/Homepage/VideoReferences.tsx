import { Box, Flex, Text } from '@chakra-ui/react';
import { Element } from 'react-scroll';
import { FONT_FAMILY_FORMULA, colors } from '../../../shared/design';
import { rem } from 'polished';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

type VideoReferenceProps = {
  logo: string;
  title: string;
  text: string;
  videoUrl: string;
};

const VideoReference = ({
  logo,
  title,
  text,
  videoUrl,
}: VideoReferenceProps) => {
  const videoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <StyledBox
      width="100%"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      borderRadius={rem(12)}
      overflow="hidden"
      cursor="pointer"
      position="relative"
    >
      <Box position="absolute" top="0" height="100%" width="100%">
        <Flex
          mt={{ base: rem(40), '3xl': rem(60) }}
          width="100%"
          justifyContent="center"
          transform={isActive ? 'translateY(-160px)' : 'translateY(0)'}
          transition="transform 1s ease-out"
        >
          <img src={logo} alt={title} />
        </Flex>
        <Box
          position="absolute"
          bottom={0}
          zIndex={1}
          px={rem(30)}
          transform={isActive ? 'translatex(-100%)' : 'translateX(0)'}
          transition="transform 1s ease-out"
        >
          <Text
            fontSize={{ base: rem(32), '3xl': rem(44) }}
            lineHeight={{ base: rem(43), '3xl': rem(46) }}
            fontFamily={FONT_FAMILY_FORMULA.EXTRA_BOLD}
            color="white"
            textTransform="uppercase"
          >
            {title}
          </Text>
          <Text
            fontSize={{ base: rem(14), '2xl': rem(16) }}
            lineHeight={rem(22)}
            fontFamily={FONT_FAMILY_FORMULA.REGULAR}
            color="white"
            my={{ base: rem(32), '3xl': rem(72) }}
          >
            {text}
          </Text>
        </Box>
      </Box>
      <Shadow />
      <video
        ref={videoRef}
        autoPlay={false}
        muted
        loop
        preload="metadata"
        src={`${videoUrl}#t=0.001`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </StyledBox>
  );
};

export const VideoReferences = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language ?? 'en';
  return (
    <Element name="ourProducts">
      <Box
        backgroundColor={colors.pageBackground}
        py={{ lg: rem(40), xl: rem(180) }}
        px={{ base: rem(28), lg: rem(72) }}
      >
        <Flex
          columnGap={rem(32)}
          flexWrap={{ md: 'wrap', xl: 'nowrap' }}
          rowGap={{ base: rem(32), xl: 0 }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box
            width={{ base: '100%', md: 'calc(50% - 16px)', xl: '25%' }}
            position="relative"
          >
            <VideoReference
              videoUrl="/video/mementum.mp4"
              title="Faces by Daybyme"
              text={
                lang === 'en'
                  ? `Microinfluencers were engaged in our campaigns long before they became a trend. That's also why we are the ones setting the direction for influencer marketing in Slovakia. For over 10 years already.`
                  : 'Microinfluencerov sme zapájali do kampaní ešte predtým, ako sa z nich stal trend. Aj preto sme na Slovensku tí, ktorí udávajú smer influencer marketingu. Už 10 rokov.'
              }
              logo="/images/video_ref/faces.png"
            />
          </Box>
          <Box
            top={{ base: 0, xl: rem(-50) }}
            width={{ base: '100%', md: 'calc(50% - 16px)', xl: '25%' }}
            position="relative"
          >
            <VideoReference
              videoUrl="/video/rally.mp4"
              title="OV MEDIA"
              text={
                lang === 'en'
                  ? `OV MEDIA is a part of DBMH family with focus on creating engaging audiovisual content for clients from all over the world. From concept to full service production.`
                  : 'OV MEDIA je produkčná agentúra so zameraním na vytváranie pútavého audiovizuálneho obsahu pre klientov z celého sveta. Od konceptu po full service produkciu.'
              }
              logo="/images/video_ref/ovmedia.png"
            />
          </Box>
          <Box
            width={{ base: '100%', md: 'calc(50% - 16px)', xl: '25%' }}
            position="relative"
            top={{ base: 0, xl: rem(128) }}
          >
            <VideoReference
              videoUrl="/video/mementum.mp4"
              title="mementum"
              text={
                lang === 'en'
                  ? `Young people communicate through memes. That's why we ensure that all leading brands from banking to FMCG are able to speak fluent meme as well.`
                  : 'Mladí ľudia komunikujú memečkami. Preto zabezpečujeme, aby nimi mohli hovoriť aj všetky popredné značky od bankingu až po FMCG.'
              }
              logo="/images/video_ref/mementum.png"
            />
          </Box>
          <Box
            width={{ base: '100%', md: 'calc(50% - 16px)', xl: '25%' }}
            position="relative"
          >
            <VideoReference
              videoUrl="/video/rally.mp4"
              title="Rally Radosti"
              text={
                lang === 'en'
                  ? `A charitable organization that donates tens of thousands of EUR to Slovak hospitals every year. We are proud to be a part of it.`
                  : 'Charitatívna organizácia, ktorá každoročne odovzdá desiatky tisíc EUR slovenským nemocniciam. Hrdo sa nam tom spolupodieľame.'
              }
              logo="/images/video_ref/rallyradosti.png"
            />
          </Box>
        </Flex>
      </Box>
    </Element>
  );
};

const Shadow = styled(Box)`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85));
  transition: transform 0.5s ease-in-out;
  pointer-events: none;
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

const StyledBox = styled(Box)`
  position: relative;
  &:hover {
    ${Shadow} {
      transform: translateY(100%);
    }
  }
`;
