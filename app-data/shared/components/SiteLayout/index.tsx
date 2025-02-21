import Head from 'next/head';
import { NextSeo } from 'next-seo';
import React, { FC, ReactNode, useRef, useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { NavMenuContent } from './NavMenuContent';
import { Box, useOutsideClick } from '@chakra-ui/react';
import { Heading } from '../../../components/web/Homepage/Heading/Heading';
import { rem } from 'polished';
import { useRouter } from 'next/router';

type SiteLayoutProps = {
  children: ReactNode;
  title?: string;
  currentUrl?: string;
  previewImage?: string;
  description?: string;
  withContact?: boolean;
};

export const SiteLayout: FC<SiteLayoutProps> = (props) => {
  const {
    title = 'DBMH - Digital first marketing agency',
    currentUrl,
    description = `We handle everything from brand’s social media, coming up with fresh ideas, creating content and managing influencer campaigns that drive real results.`,
    previewImage,
    withContact = true,
  } = props;
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuContentRef = useRef(null);

  const toggleMobile = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useOutsideClick({
    ref: menuContentRef,
    handler: () => setIsMobileMenuOpen(false),
  });

  const isHomePage = router.pathname === '/';

  return (
    <>
      <NextSeo
        openGraph={{
          title: `${title}`,
          url: currentUrl,
          description: description,
          images: [
            {
              url: previewImage,
              width: 800,
              height: 600,
            },
          ],
          site_name: 'DBMH - Digital first marketing agency',
        }}
      />
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
      </Head>
      <div style={{ minHeight: '50vh' }}>
        <Navigation toggleMobile={toggleMobile} />
        <Box
          mt={
            isHomePage
              ? {
                  base: rem(102),
                  md: rem(122),
                  lg: rem(168),
                }
              : 0
          }
        >
          {isHomePage && <Heading />}
          {props.children}
          <Footer />
        </Box>
        <NavMenuContent
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          toggleMobile={toggleMobile}
          menuContentRef={menuContentRef}
        />
      </div>
    </>
  );
};
