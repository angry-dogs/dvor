import { MutableRefObject, useState } from "react";
import { Button, Container, createStyles, Grid, SimpleGrid, Stack, Text, TextInput, useMantineTheme } from "@mantine/core";
import { Send } from "tabler-icons-react";
import { useForm } from '@mantine/form';
import { notifications } from "@mantine/notifications";

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
      backgroundImage: '-webkit-linear-gradient(top, rgba(4,69,87,0.80), rgba(4,30,56,0.80)), url(/img/bg-2.jpg)',
      paddingTop: `calc(${theme.spacing.xl} * 3)`,
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    }
  },

  inner: {
    position: 'relative',
  },
}));

interface IProps {
  isDesktop: boolean;
  anchor: MutableRefObject<HTMLDivElement>;
}

const LandingFormBlock = ({ isDesktop, anchor }: IProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [done, setDone] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: '',
    },
    validate: {
      name: (value) => (value.length < 2 || value.length > 30 ? 'Имя должно быть от 2 до 30 символов' : null),
      phone: (value) => (value.length < 5 || value.length > 15 ? 'Неверный формат телефона' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Неверный E-mail формат'),
    },
  });

  const sendEmail = async () => {
    const resp = await fetch('/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.values)
    });
    const { result } = await resp.json();

    if (result) {
      setDone(true);
      notifications.show({
        color: 'green',
        title: 'Заявка отправлена',
        message: 'Пожалуйста, ожидайте звонка от нашего сотрудника.',
        autoClose: 8000,
      })
    } else {
      notifications.show({
        color: 'red',
        title: 'Возникла ошибка',
        message: 'Пожалуйста, попробуйте отправить заявку позже.',
        autoClose: 8000,
      })
    }
  };

  return (
    <div className={classes.root}>
      <Container
        size="lg"
        py={100}
        ref={anchor}
        className={classes.inner}
        h='100%'
      >
        <Stack align='center' h='100%' justify='center' sx={{ position: 'relative' }}>
          <Text size={isDesktop ? 42 : 30} weight={600} lh={1.1} color='white' align='center'>
            Расчет стоимости строительства
          </Text>
          <Text size={isDesktop ? 24 : 18} color='white' align='center'>
            С вами свяжется наш сотрудник в ближайшее время
          </Text>

          <form onSubmit={form.onSubmit(sendEmail)}>
            <Grid my={60} gutter='lg'>
              <Grid.Col span={12} sm={9}>
                <SimpleGrid
                  cols={3}
                  spacing="lg"
                  breakpoints={[
                    { maxWidth: theme.breakpoints.sm, cols: 1, spacing: 'sm' },
                  ]}
                >
                  <TextInput
                    size='lg'
                    placeholder="Ваше имя"
                    {...form.getInputProps('name')}
                    disabled={done}
                    required
                  />
                  <TextInput
                    size='lg'
                    placeholder="Телефон"
                    {...form.getInputProps('phone')}
                    disabled={done}
                    required
                  />
                  <TextInput
                    size='lg'
                    placeholder="E-mail"
                    {...form.getInputProps('email')}
                    disabled={done}
                    required
                  />
                </SimpleGrid>
              </Grid.Col>
              <Grid.Col span={12} sm={3}>
                <Button
                  color='orange'
                  size='lg'
                  sx={{ width: '100%' }}
                  // onClick={onSubmit}
                  disabled={done}
                  type='submit'
                >
                  <Send />&nbsp;
                  Отправить заявку
                </Button>
              </Grid.Col>
            </Grid>
          </form>
        </Stack>
      </Container>
    </div>
  )
};

export default LandingFormBlock;
