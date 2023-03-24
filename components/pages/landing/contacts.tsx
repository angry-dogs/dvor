import { Box, Container, Stack, Text } from "@mantine/core";

interface IProps {
  isDesktop: boolean;
}

const LandingContactsBlock = ({ isDesktop }: IProps) => {

  return (
    <Box bg='#eeeeee'>
      <Container
        size="lg"
        sx={{ minHeight: '100vh' }}
        py={100}
        id='contacts'
      >
        <Stack align='center'>
          <Text size={isDesktop ? 42 : 30} weight={600} lh={1.1} align='center'>
            Contacts
          </Text>
        </Stack>
      </Container>
    </Box>
  )
};

export default LandingContactsBlock;
