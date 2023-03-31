import { createStyles, Container, Text, Button, Group, rem, Box, Title, Stack } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  inner: {
    position: 'relative',
    paddingTop: rem(200),
    paddingBottom: rem(120),

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan('sm')]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

interface IProps {
  isDesktop: boolean;
  scrollToForm: () => void;
}

const LandingCtaBlock = ({ isDesktop, scrollToForm }: IProps) => {
  const { classes } = useStyles();

  const getNextMonday = (date = new Date()) => {
    const dateCopy = new Date(date.getTime());
    const nextMonday = new Date(
      dateCopy.setDate(
        dateCopy.getDate() + ((7 - dateCopy.getDay() + 1) % 7 || 7),
      ),
    );
    return nextMonday;
  };

  const deadline = getNextMonday();
  const day = deadline.getDate().toString();
  const month = (deadline.getMonth() + 1).toString();
  const dateString = `${day.length === 1 ? `0${day}` : day}.${month.length === 1 ? `0${month}` : month}.${deadline.getFullYear()}`;

  return (
    <Box bg='orange'>
      <Container
        size="sm"
        py={160}
        className={classes.inner}
        h='100%'
      >
        <Stack align='center'>
          <Title order={2} align='center' color="white" size={isDesktop ? 42 : 30}>
            <>
              Оставь заявку до {dateString} и получи{' '}
              <Text component="span" variant="gradient" gradient={{ from: 'pink', to: 'violet' }} inherit>
                проект в подарок
              </Text>!
            </>
          </Title>

          <Text className={classes.description} color="white">
            Мы свяжемся с вами в ближайшее время
          </Text>

          <Group className={classes.controls}>
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'cyan', to: 'teal' }}
              onClick={scrollToForm}
            >
              Оставить заявку сейчас
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  )
};

export default LandingCtaBlock;
