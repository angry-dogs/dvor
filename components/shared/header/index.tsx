import { createStyles, Container, Title, rem, Stack } from '@mantine/core';
import { ReactElement } from 'react';

const useStyles = createStyles((theme) => ({
  root: {
    height: '300px',
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
      backgroundImage: '-webkit-linear-gradient(top, rgba(4,69,87,0.80), rgba(4,30,56,0.80)), url(/img/bg-1.webp)',
      paddingTop: `calc(${theme.spacing.xl} * 3)`,
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    }
  },

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
  title: ReactElement;
}

const AppHeader = ({ title }: IProps) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg" sx={{ height: '100%' }}>
        <Stack justify='center' sx={{ height: '100%' }}>
          <Title className={classes.title}>
            {title}
          </Title>
        </Stack>
      </Container>
    </div>
  );
}

export default AppHeader;
