import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SiteLayout } from '../../app-data/shared/components';
import { Soc } from '../../app-data/components/web';

const SocPage = () => {
  return (
    <SiteLayout currentUrl="/">
      <Soc />
    </SiteLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['layout', 'common', 'footer'])),
    },
  };
}

export default SocPage;
