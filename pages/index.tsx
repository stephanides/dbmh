import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Homepage } from '../app-data/components/web';
import { SiteLayout } from '../app-data/shared/components';
import { Services } from '../app-data/components/web/Homepage/Services';
import { VideoReferences } from '../app-data/components/web/Homepage/VideoReferences';
import { AboutUs } from '../app-data/components/web/Homepage/AboutUs';
import { OurNumbers } from '../app-data/components/web/Homepage/OurNumbers/OurNumbers';
import { Statements } from '../app-data/components/web/Homepage/Statements';
import { References } from '../app-data/components/web/Homepage/References/References';
import { Podcasts } from '../app-data/components/web/Homepage/Podcasts/Podcasts';
import { Navigation } from '../app-data/shared/components/SiteLayout/Navigation';

const Home = () => {
  return (
    <SiteLayout currentUrl="/">
      <Statements />
      <AboutUs />
      <VideoReferences />
      <Services />
      <Podcasts />
      <References />
      <OurNumbers />
    </SiteLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'layout',
        'services',
        'aboutUs',
        'ourNumbers',
        'common',
        'footer',
      ])),
    },
  };
}

export default Home;
