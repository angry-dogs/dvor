import { Anchor, AppShell, Burger, Button, createStyles, Group, Header, MediaQuery, rem, Stack, Text, useMantineTheme } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
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

const useStyles = createStyles((theme) => ({
  // root: {
  // },
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

  return (
    <AppShell
      styles={{
        main: {
          padding: 0,
        }
      }}
      header={
        <Header height={{ base: 50, md: 70 }} px="lg" className={classes.header}>
          {/* <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}> */}
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
                <Anchor size={18} href="#services">
                  Услуги
                </Anchor>
                <Anchor size={18} href="#portfolio">
                  Работы
                </Anchor>
                <Anchor size={18} href="#reviews">
                  Отзывы
                </Anchor>
                <Anchor size={18} href="#contacts">
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
          {/* </div> */}
        </Header>
      }
    >
      <LandingHeroBlock isDesktop={isDesktop} />
      <LandingServicesBlock isDesktop={isDesktop} />
      <LandingPortfolioBlock isDesktop={isDesktop} />
      <LandingReviewsBlock isDesktop={isDesktop} />
      <LandingPlusesBlock isDesktop={isDesktop} />
      <LandingFormBlock isDesktop={isDesktop} />
      <LandingProcessBlock isDesktop={isDesktop} />
      <LandingFaqBlock isDesktop={isDesktop} />
      <LandingCtaBlock isDesktop={isDesktop} />
      <LandingContactsBlock isDesktop={isDesktop} />
    </AppShell>
  )
};

export default IndexPage;
