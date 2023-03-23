import { Container, Stack, Text } from "@mantine/core";

interface IProps {
  isDesktop: boolean;
}

const LandingFormBlock = ({ isDesktop }: IProps) => {

  return (
    <Container
      size="lg"
      sx={{ minHeight: '100vh' }}
      py={100}
      id='form'
    >
      <Stack align='center'>
        <Text size={42} weight={600}>
          Form
        </Text>
      </Stack>
    </Container>
  )
};

export default LandingFormBlock;
