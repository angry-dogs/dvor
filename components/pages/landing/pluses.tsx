import { Container, Stack, Text } from "@mantine/core";

interface IProps {
  isDesktop: boolean;
}

const LandingPlusesBlock = ({ isDesktop }: IProps) => {

  return (
    <Container
      size="lg"
      sx={{ minHeight: '100vh' }}
      py={100}
    >
      <Stack align='center'>
        <Text size={42} weight={600}>
          Pluses
        </Text>
      </Stack>
    </Container>
  )
};

export default LandingPlusesBlock;
