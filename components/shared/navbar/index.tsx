import { Anchor, Burger, createStyles, Group, Header, MediaQuery, Stack, Text } from '@mantine/core';
import Link from 'next/link';

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
      fontSize: '18px',
    }
  },

  brand: {
    textDecoration: 'none',
  }
}));

interface IProps {
  isDesktop: boolean;
  burgerOpened: boolean;
  burgerOpen: () => void;
  burgerClose: () => void;
  scrollToServices: () => void;
  scrollToPortfolio: () => void;
  scrollToReview: () => void;
  scrollToContacts: () => void;
};

const AppNavbar = ({
  isDesktop,
  burgerOpened,
  burgerOpen,
  burgerClose,
  scrollToServices,
  scrollToPortfolio,
  scrollToReview,
  scrollToContacts,
}: IProps) => {
  const { classes } = useStyles();

  return (
    <Header
      px="lg"
      height={{ base: 50, md: 70 }}
      className={classes.header}
      bg={!isDesktop && burgerOpened ? 'dark' : ''}
    >
      <Group position='apart'>
        <Link href='/' className={classes.brand}>
          <Text size={24} onClick={burgerClose}>«Кедровый двор»</Text>
        </Link>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={burgerOpened}
            onClick={burgerOpened ? burgerClose : burgerOpen}
            color='white'
          />
        </MediaQuery>

        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
          <Group spacing='xl'>
            <Anchor onClick={() => scrollToServices()} rel='nofollow'>
              Услуги
            </Anchor>
            <Anchor onClick={() => scrollToPortfolio()} rel='nofollow'>
              Работы
            </Anchor>
            <Anchor onClick={() => scrollToReview()} rel='nofollow'>
              Отзывы
            </Anchor>
            <Anchor onClick={() => scrollToContacts()} rel='nofollow'>
              Контакты
            </Anchor>
            <Link href='/blog' legacyBehavior>
              <a className='link'>Блог</a>
            </Link>
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
  )
};

export default AppNavbar;
