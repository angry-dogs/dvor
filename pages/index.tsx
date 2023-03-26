import { Anchor, AppShell, Burger, createStyles, Group, Header, MediaQuery, Stack, Text, useMantineTheme } from '@mantine/core';
import { useDisclosure, useMediaQuery, useScrollIntoView } from '@mantine/hooks';
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

const useStyles = createStyles(() => ({
  header: {
    maxWidth: '71.25rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '0',
    position: 'absolute',
    backgroundColor: 'inherit',
    padding: '20px 0',
    color: 'white',

    a: {
      color: 'white',
    }
  },
}));

const IndexPage = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, { close, open }] = useDisclosure(false);
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
        <Header height={{ base: 50, md: 70 }} px="lg" className={classes.header}>
          <Group position='apart'>
            <Text size={24}>«Кедровый двор»</Text>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => opened ? close() : open()}
                color='white'
              />
            </MediaQuery>

            <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
              <Group spacing='xl'>
                <Anchor size={18} onClick={() => scrollToServices()}>
                  Услуги
                </Anchor>
                <Anchor size={18} onClick={() => scrollToPortfolio()}>
                  Работы
                </Anchor>
                <Anchor size={18} onClick={() => scrollToReview()}>
                  Отзывы
                </Anchor>
                <Anchor size={18}  onClick={() => scrollToContacts()}>
                  Контакты
                </Anchor>
              </Group>
            </MediaQuery>

            <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
              <Stack spacing={0}>
                <Anchor href='tel:+79029913632'>+7 (902) 991 36-32</Anchor>
                <Text>Пн-сб: 9:00 – 21:00</Text>
              </Stack>
            </MediaQuery>
          </Group>
        </Header>
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
