import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import LandingContactsBlock from 'components/pages/landing/contacts';
import LandingCtaBlock from 'components/pages/landing/cta';
import LandingFaqBlock from 'components/pages/landing/faq';
import LandingFormBlock from 'components/pages/landing/form';
import LandingHeroBlock from 'components/pages/landing/hero';
import LandingPlusesBlock from 'components/pages/landing/pluses';
import LandingPortfolioBlock from 'components/pages/landing/portfolio';
import LandingProcessBlock from 'components/pages/landing/process';
import LandingReviewsBlock from 'components/pages/landing/reviews';
import LandingServicesBlock from 'components/pages/landing/services';
import { useRouter } from 'next/router';
import { MutableRefObject, useEffect } from 'react';

interface IProps {
  scrollToServices: () => void;
  scrollToPortfolio: () => void;
  scrollToReview: () => void;
  scrollToContacts: () => void;
  scrollToForm: () => void;
  servicesRef: MutableRefObject<HTMLDivElement>;
  portfolioRef: MutableRefObject<HTMLDivElement>;
  reviewRef: MutableRefObject<HTMLDivElement>;
  formRef: MutableRefObject<HTMLDivElement>;
  contactsRef: MutableRefObject<HTMLDivElement>;
}

const IndexPage = ({
  scrollToServices,
  scrollToForm,
  servicesRef,
  portfolioRef,
  reviewRef,
  formRef,
  contactsRef,
}: IProps) => {
  const theme = useMantineTheme();
  const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady)  {
      console.log(router);
    }
  }, [router, router.isReady]);

  return (
    <>
      <LandingHeroBlock isDesktop={isDesktop} scrollToForm={scrollToForm} scrollToServices={scrollToServices} />
      <LandingServicesBlock isDesktop={isDesktop} servicesRef={servicesRef} />
      <LandingPortfolioBlock isDesktop={isDesktop} portfolioRef={portfolioRef} />
      <LandingPlusesBlock isDesktop={isDesktop} />
      <LandingReviewsBlock isDesktop={isDesktop} reviewRef={reviewRef} />
      <LandingFormBlock isDesktop={isDesktop} formRef={formRef} />
      <LandingProcessBlock isDesktop={isDesktop} />
      <LandingFaqBlock isDesktop={isDesktop} />
      <LandingCtaBlock isDesktop={isDesktop} scrollToForm={scrollToForm} />
      <LandingContactsBlock isDesktop={isDesktop} contactsRef={contactsRef} />
    </>
  )
};

export default IndexPage;
