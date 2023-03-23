import { Box, Container, Stack, Text } from "@mantine/core";

interface IProps {
  isDesktop: boolean;
}

const LandingReviewsBlock = ({ isDesktop }: IProps) => {

  return (
    <Box bg='#eeeeee'>
      <Container
        size="lg"
        sx={{ minHeight: '100vh' }}
        py={100}
        id='reviews'
      >
        <Stack align='center'>
          <Text size={isDesktop ? 42 : 30} weight={600} lh={1.1}>
            Отзывы наших клиентов
          </Text>
        </Stack>
      </Container>
    </Box>
  )
};

export default LandingReviewsBlock;
