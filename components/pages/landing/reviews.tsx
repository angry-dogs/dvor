import { MutableRefObject } from "react";
import { Box, Container, Stack, Text } from "@mantine/core";

interface IProps {
  isDesktop: boolean;
  reviewRef: MutableRefObject<HTMLDivElement>;
}

const LandingReviewsBlock = ({ isDesktop, reviewRef }: IProps) => {

  return (
    <Box bg='#eeeeee'>
      <Container
        size="lg"
        sx={{ minHeight: '100vh' }}
        py={100}
        ref={reviewRef}
      >
        <Stack align='center'>
          <Text size={isDesktop ? 42 : 30} weight={600} lh={1.1} align='center'>
            Отзывы наших клиентов
          </Text>
        </Stack>
      </Container>
    </Box>
  )
};

export default LandingReviewsBlock;
