import { Container, Stack, Text } from "@mantine/core";

interface IProps {
  isDesktop: boolean;
}

const LandingServicesBlock = ({ isDesktop }: IProps) => {

  return (
    <Container
      size="lg"
      sx={{ minHeight: '100vh' }}
      py={100}
      id='services'
    >
      <Stack align='center'>
        <Text size={isDesktop ? 42 : 30} weight={600} lh={1.1}>
          Что мы предлагаем
        </Text>
        <Text>
          Мы выполняем проектирование и строительно-монтажные работы из бруса, оцилиндрованного бревна и бревна ручной рубки любой сложности
        </Text>
      </Stack>
    </Container>
  )
};

export default LandingServicesBlock;
