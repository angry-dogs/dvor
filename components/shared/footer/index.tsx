import React from 'react';
import { Box, Container, Stack, Text } from '@mantine/core';

const AppFooter = () => {
  return (
    <Box bg='black' h={80}>
      <Container size='lg' h='100%'>
        <Stack h='100%' justify='center'>
          <Text color='white'>
            «Кедровый двор»
            ©{' '}
            {new Date().getFullYear()}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

export default AppFooter;
