import Head from 'next/head';
import { NextSeo } from 'next-seo';
import React, { FC, ReactNode, useRef, useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { NavMenuContent } from './NavMenuContent';
import { useOutsideClick } from '@chakra-ui/react';
import { Heading } from '../../../components/web/Homepage/Heading/Heading';

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
    title = 'Daybyme Media House - Digital-first marketing agency',
    currentUrl,
    description = `We handle everything from looking over a brand’s social media, coming up with fresh ideas, creating content, managing campaigns and end-to-end influencer campaigns that drive real results. We don't just deliver. We are always ready to go the extra mile. Based in Bratislava, operating worldwide.`,
    previewImage,
    withContact = true,
  } = props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuContentRef = useRef(null);

  const toggleMobile = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useOutsideClick({
    ref: menuContentRef,
    handler: () => setIsMobileMenuOpen(false),
  });

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
          site_name: 'Daybyme Media House - Digital-first marketing agency',
        }}
      />
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
      </Head>
      <div style={{ minHeight: '50vh' }}>
        <Navigation toggleMobile={toggleMobile} />
        <Heading />
        <Navigation isSticky toggleMobile={toggleMobile} />
        {props.children}
        <Footer />
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
