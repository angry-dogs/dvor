import { createStyles, Container, Title, Text, Button, rem, Group, Stack } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    '::before': {
      content: '""',
      position: 'absolute',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      backgroundColor: '#000000',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#33044557', endColorstr='#33041e38')",
      // backgroundImage:
      //   "linear-gradient(250deg, rgba(130, 201, 30, 0) 50%, #062343 20%), url('/img/bg-1.jpg')",
      backgroundImage: '-webkit-linear-gradient(top, rgba(4,69,87,0.80), rgba(4,30,56,0.80)), url(/img/bg-1.jpg)',
      paddingTop: `calc(${theme.spacing.xl} * 3)`,
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    }
  },

  // image: {
  //   [theme.fn.smallerThan('md')]: {
  //     display: 'none',
  //   },
  // },

  // content: {
  //   paddingTop: `calc(${theme.spacing.xl} * 2)`,
  //   paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  //   marginRight: `calc(${theme.spacing.xl} * 3)`,

  //   [theme.fn.smallerThan('md')]: {
  //     marginRight: 0,
  //   },
  // },

  title: {
    position: 'relative',
    color: theme.white,
    fontWeight: 700,
    lineHeight: 1.23,
    maxWidth: rem(760),
    fontSize: rem(52),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(760),
    fontSize: rem(20),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

interface IProps {
  isDesktop: boolean;
}

const LandingHeroBlock = ({ isDesktop }: IProps) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg" sx={{ height: '100%' }}>
        <Stack justify='center' sx={{ height: '100%' }}>
          <Title className={classes.title}>
            {/* A{' '}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
            >
              fully featured
            </Text>{' '}
            React components library */}
            Проектирование и строительство
            загородных домов под ключ
          </Title>

          <Text className={classes.description} my={30}>
            В Красноярском крае, России и странах СНГ
          </Text>

          <Group mt={40} spacing='xl'>
            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
            >
              Оставить заявку
            </Button>

            <Button
              variant='outline'
              size="xl"
              color='gray.0'
              className={classes.control}
            >
              Услуги
            </Button>
          </Group>
        </Stack>
      </Container>
    </div>
  );
}

export default LandingHeroBlock;
