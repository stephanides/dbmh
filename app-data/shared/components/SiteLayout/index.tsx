import Head from 'next/head';
import { NextSeo } from 'next-seo';
import React, { FC, ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

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
    title = 'FERMO | Správny partner pre Vašu cestu',
    currentUrl,
    description,
    previewImage,
    withContact = true,
  } = props;

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
          site_name: 'Fermo',
        }}
      />
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Od roku 1995 zabezpečujeme vnútroštátnu a medzinárodnú prepravu osôb. Poskytujeme nadštandardné služby, ktoré považujeme za hlavný pilier komfortnej a bezpečnej jazdy. Roky skúseností, státisíce spokojných pasažierov a milióny odjazdených kilometrov hovoria za všetko."
        />
      </Head>
      <div style={{ minHeight: '50vh' }}>
        <Navigation />
        {props.children}
        <Footer />
      </div>
    </>
  );
};
