import { AppShell, useMantineTheme } from '@mantine/core';
import { useMediaQuery, useScrollIntoView } from '@mantine/hooks';
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
import AppFooter from 'components/shared/footer';
import AppNavbar from 'components/shared/navbar';

const IndexPage = () => {
  const theme = useMantineTheme();
  const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

  const { scrollIntoView: scrollToServices, targetRef: servicesRef } = useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollToPortfolio, targetRef: portfolioRef } = useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollToReview, targetRef: reviewRef } = useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollToContacts, targetRef: contactsRef } = useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollToForm, targetRef: formRef } = useScrollIntoView<HTMLDivElement>();

  return (
    <AppShell
      styles={{
        main: {
          padding: 0,
        }
      }}
      header={
        <AppNavbar
          scrollToServices={scrollToServices}
          scrollToPortfolio={scrollToPortfolio}
          scrollToReview={scrollToReview}
          scrollToContacts={scrollToContacts}
        />
      }
    >
      <LandingHeroBlock isDesktop={isDesktop} scrollToForm={scrollToForm} scrollToServices={scrollToServices} />
      <LandingServicesBlock isDesktop={isDesktop} anchor={servicesRef} />
      <LandingPortfolioBlock isDesktop={isDesktop} anchor={portfolioRef} />
      <LandingReviewsBlock isDesktop={isDesktop} anchor={reviewRef} />
      <LandingPlusesBlock isDesktop={isDesktop} />
      <LandingFormBlock isDesktop={isDesktop} anchor={formRef} />
      <LandingProcessBlock isDesktop={isDesktop} />
      <LandingFaqBlock isDesktop={isDesktop} />
      <LandingCtaBlock isDesktop={isDesktop} />
      <LandingContactsBlock isDesktop={isDesktop} anchor={contactsRef} />
      <AppFooter isDesktop={isDesktop} />
    </AppShell>
  )
};

export default IndexPage;
