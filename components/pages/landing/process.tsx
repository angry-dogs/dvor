import { Container, Stack, Stepper, Text } from "@mantine/core";

interface IProps {
  isDesktop: boolean;
}

const LandingProcessBlock = ({ isDesktop }: IProps) => {
  return (
    <Container
      size="lg"
      sx={{ minHeight: '100vh' }}
      py={100}
    >
      <Stack align='center'>
        <Text size={isDesktop ? 42 : 30} weight={600} lh={1.1}>
          Из каких этапов состоит процесс стоительства?
        </Text>

        <Stepper
          my={60}
          active={4}
          color='orange'
          orientation='vertical'
          size={isDesktop ? 'xl' : 'md'}
        >
          <Stepper.Step
            label="Заявка"
            description="Вы оставляете заявку на расчет стоимости работ."
            completedIcon={<Text>1</Text>}
          />
          <Stepper.Step
            label="Проект"
            description="После предварительных согласований, заключаем договор и изготавливаем проект."
            completedIcon={<Text>2</Text>}
          />
          <Stepper.Step
            label="Строительство"
            description="Завоз и обработка материалов. Выполнение строительных работ."
            completedIcon={<Text>3</Text>}
          />
          <Stepper.Step
            label="Прием работы"
            description="Вы принимаете, утверждаете и оплачиваете каждый этап работ."
            completedIcon={<Text>4</Text>}
          />
        </Stepper>
      </Stack>
    </Container>
  )
};

export default LandingProcessBlock;
