import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Box, Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import { useRef, useState } from 'react';
import { PlayButton } from '../../../shared/design';

SwiperCore.use([Navigation, Pagination]);

const videos = [
  '/images/soc/videos/le-mans-1.mp4',
  '/images/soc/videos/le-mans-2.mp4',
  '/images/soc/videos/croatia-1.mp4',
  '/images/soc/videos/croatia-2.mp4',
  '/images/soc/videos/croatia-3.mp4',
];

export const ReelsSwiper = ({ reelsInView }: { reelsInView: boolean }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoClick = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          if (video.paused) {
            video.play();
            setActiveVideoIndex(index);
          } else {
            video.pause();
            setActiveVideoIndex(null);
          }
        } else {
          video.pause();
        }
      }
    });
  };

  return (
    <Box
      width="100%"
      sx={{
        '.swiper': { overflow: 'visible' },
        '.swiper-slide': { height: 'auto' },
      }}
      mt={{ base: rem(25), md: rem(45) }}
      opacity={reelsInView ? 1 : 0}
      transform={reelsInView ? 'translateX(0)' : 'translateX(100%)'}
      transition="all 1s ease-out"
    >
      <Swiper
        className="similar-swiper"
        spaceBetween={60}
        slidesPerView={1.3}
        slidesOffsetBefore={28}
        slidesOffsetAfter={28}
        navigation={{
          prevEl: `.swiper-button-prev-timeline`,
          nextEl: `.swiper-button-next-timeline`,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2.8,
            slidesOffsetBefore: 72,
            slidesOffsetAfter: 72,
          },
          1200: {
            slidesPerView: 3.7,
            slidesOffsetBefore: 72,
            slidesOffsetAfter: 72,
          },
          1440: {
            slidesPerView: 3.7,
            slidesOffsetBefore: 72,
            slidesOffsetAfter: 72,
          },
          1920: {
            slidesPerView: 5.3,
            slidesOffsetBefore: 72,
            slidesOffsetAfter: 72,
          },
        }}
      >
        {videos.map((videoSrc, index) => (
          <SwiperSlide key={index}>
            <Box
              position="relative"
              overflow="hidden"
              borderRadius={rem(20)}
              role="group"
            >
              <Flex
                position="absolute"
                width="100%"
                height="100%"
                pointerEvents="none"
                background="rgba(0,0,0,.4)"
                zIndex={1}
                transition="all .5s ease-out"
                justifyContent="center"
                alignItems="center"
                _groupHover={{ background: 'rgba(0,0,0,0)' }}
              >
                <Box
                  transition="all .5s ease-out"
                  _groupHover={{ transform: 'scale(1.25)' }}
                  display={activeVideoIndex !== index ? 'block' : 'none'}
                  width={rem(104)}
                >
                  <PlayButton />
                </Box>
              </Flex>
              <Box
                as="div"
                width="100%"
                borderRadius="lg"
                overflow="hidden"
                cursor="pointer"
                position="relative"
                onClick={() => handleVideoClick(index)}
                style={{ aspectRatio: '374/812' }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  width="100%"
                  height="100%"
                  style={{ objectFit: 'cover' }}
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
