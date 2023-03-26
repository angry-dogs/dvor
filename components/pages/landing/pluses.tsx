import { ActionIcon, Container, Group, SimpleGrid, Stack, Text, useMantineTheme } from "@mantine/core";

interface IProps {
  isDesktop: boolean;
}

const LandingPlusesBlock = ({ isDesktop }: IProps) => {
  const theme = useMantineTheme();
  const data = [
    {
      title: 'Фиксированная стоимость',
      desc: 'Она неизменна после согласования сметы и подписания договора.',
    },
    {
      title: 'Проект',
      desc: 'Может быть полностью ваш или изготовлен нашими проектировщиками.',
    },
    {
      title: 'Гарантия',
      desc: 'На все строительные работы мы даем официальную гарантию от 1 года.',
    },
    {
      title: 'Гибкий подход',
      desc: 'Закупка и доставка материалов могут быть ваши, или мы возьмем это на себя.',
    },
    {
      title: 'Специалисты своего дела',
      desc: 'У наших специальстов опыт строительства более 20 лет.',
    },
    {
      title: 'Поэтапная оплата',
      desc: 'Прием работ заказчиком и оплата поделены на 4 части.',
    },
  ];

  return (
    <Container
      size="lg"
      // mih='100vh'
      py={100}
    >
      <Stack align='center'>
        <Text size={isDesktop ? 42 : 30} weight={600} lh={1.1} align='center'>
          Почему мы вам понравимся?
        </Text>

        <SimpleGrid
          my={60}
          cols={3}
          spacing={40}
          verticalSpacing={60}
          breakpoints={[
            { maxWidth: theme.breakpoints.md, cols: 2, spacing: 'md', verticalSpacing: 50 },
            { maxWidth: theme.breakpoints.sm, cols: 1, spacing: 'sm', verticalSpacing: 40 },
          ]}
        >
          {data.map(item => (
            <Group key={Math.random()} noWrap align='flex-start'>
              <ActionIcon color="orange" size={60} radius="xl" variant="filled">
                <Text weight='bold' size='lg'>{data.indexOf(item) + 1}</Text>
              </ActionIcon>
              <Stack spacing='sm'>
                <Text weight='bold'>{item.title}</Text>
                <Text color='gray.7' size='sm'>{item.desc}</Text>
              </Stack>
            </Group>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  )
};

export default LandingPlusesBlock;
