import { Anchor, Burger, createStyles, Group, Header, MediaQuery, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
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
      textDecoration: 'none',
      '::hover': {
        textDecoration: 'underline',
      }
    }
  },

  brand: {
    textDecoration: 'none',
  }
}));

interface IProps {
  scrollToServices: () => void;
  scrollToPortfolio: () => void;
  scrollToReview: () => void;
  scrollToContacts: () => void;
};

const AppNavbar = ({ scrollToServices, scrollToPortfolio, scrollToReview, scrollToContacts }: IProps) => {
  const { classes } = useStyles();
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <Header height={{ base: 50, md: 70 }} px="lg" className={classes.header}>
      <Group position='apart'>
        <Link href='/' className={classes.brand}>
          <Text size={24}>«Кедровый двор»</Text>
        </Link>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => opened ? close() : open()}
            color='white'
          />
        </MediaQuery>

        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
          <Group spacing='xl'>
            <Anchor size={18} onClick={() => scrollToServices()} rel='nofollow'>
              Услуги
            </Anchor>
            <Anchor size={18} onClick={() => scrollToPortfolio()} rel='nofollow'>
              Работы
            </Anchor>
            <Anchor size={18} onClick={() => scrollToReview()} rel='nofollow'>
              Отзывы
            </Anchor>
            <Anchor size={18} onClick={() => scrollToContacts()} rel='nofollow'>
              Контакты
            </Anchor>
            <Link href='/blog' legacyBehavior>
              <Anchor size={18}>
                Блог
              </Anchor>
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
