import { Accordion, Box, Container, createStyles, Stack, Text } from "@mantine/core";
import { Plus } from "tabler-icons-react";

const useStyles = createStyles(() => ({
  section: {
    backgroundColor: 'white',
  },
  label: {
    fontSize: '24px',
    fontWeight: 600,
    ':hover': {
      backgroundColor: 'white',
    }
  }
}));

interface IProps {
  isDesktop: boolean;
}

const LandingFaqBlock = ({ isDesktop }: IProps) => {
  const { classes } = useStyles();

  return (
    <Box bg='#eeeeee'>
      <Container
        sx={{ minHeight: '100vh' }}
        py={100}
      >
        <Stack align='center'>
          <Text size={isDesktop ? 42 : 30} weight={600} lh={1.1}>
            Популярные вопросы и ответы
          </Text>

          <Accordion
            sx={{ width: '100%' }}
            my={60}
            variant='separated'
            chevron={<Plus />}
            styles={{
              chevron: {
                '&[data-rotate]': {
                  transform: 'rotate(45deg)',
                },
              },
            }}
          >
            <Accordion.Item value="q1" p='md' className={classes.section}>
              <Accordion.Control className={classes.label}>
                Сколько стоит проект?
              </Accordion.Control>
              <Accordion.Panel pl={4}>
                От 350 рублей за кв.метр.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="q2" p='md' className={classes.section}>
              <Accordion.Control className={classes.label}>
                Может ли заказчик сам предоставить материалы?
              </Accordion.Control>
              <Accordion.Panel pl={4}>
                Конечно. Об этом нужно будет сказать нашему менеджеру по телефону до начала составления договора.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="q3" p='md' className={classes.section}>
              <Accordion.Control className={classes.label}>
                Сколько времени длится строительство?
              </Accordion.Control>
              <Accordion.Panel pl={4}>
                Это зависит от сложности и объема работ, в среднем от 1 до 6 месяцев.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="q4" p='md' className={classes.section}>
              <Accordion.Control className={classes.label}>
                Выезжает ли ваша бригада в другие регионы?
              </Accordion.Control>
              <Accordion.Panel pl={4}>
                Да, выезжаем в любой регион России и страны СНГ.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Stack>
      </Container>
    </Box>
  )
};

export default LandingFaqBlock;
