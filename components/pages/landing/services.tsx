import { MutableRefObject } from "react";
import { Container, Stack, Text, useMantineTheme } from "@mantine/core";

interface IProps {
  isDesktop: boolean;
  anchor: MutableRefObject<HTMLDivElement>;
}

const LandingServicesBlock = ({ isDesktop, anchor }: IProps) => {
  const theme = useMantineTheme();
  return (
    <Container
      size="lg"
      sx={{ minHeight: '100vh' }}
      py={100}
      ref={anchor}
    >
      <Stack align='center'>
        <Text size={isDesktop ? 42 : 30} weight={600} lh={1.1} align='center'>
          Что мы предлагаем
        </Text>
        <Text size={isDesktop ? 20 : 14} align='center' px={isDesktop ? 80 : theme.spacing.md} mt='lg'>
          Мы выполняем проектирование и строительно-монтажные работы из бруса, оцилиндрованного бревна и бревна ручной рубки любой сложности
        </Text>
        <Text>
        </Text>
      </Stack>
    </Container>
  )
};

export default LandingServicesBlock;
