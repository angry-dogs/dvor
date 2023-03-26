import React from 'react';
import { Anchor, Box, Container, Group, Stack, Text } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { ArrowBarToUp } from 'tabler-icons-react';

interface IProps {
  isDesktop: boolean;
}

const AppFooter = ({ isDesktop }: IProps) => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Box bg='black' h={80}>
      <Container size='lg' h='100%'>
        <Stack h='100%' justify='center'>
          <Group position='apart'>
            <Text color='white'>
              «Кедровый двор»
              ©{' '}
              {new Date().getFullYear()}
            </Text>

            <Anchor color='white' onClick={() => scrollTo({ y: 0 })}>
              <Group spacing='sm'>
                <ArrowBarToUp />
                <span>{isDesktop ? 'Вернуться в начало' : 'В начало'}</span>
              </Group>
            </Anchor>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}

export default AppFooter;
