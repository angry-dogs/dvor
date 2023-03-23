import Head from 'next/head';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Box, Burger, Group, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';
import Sidebar from 'components/shared/Sidebar';
import { ReactElement } from 'react';

interface IProps {
  children: ReactElement;
}

const PrivateLayout = ({ children }: IProps) => {
  const [sidebarOpened, { close: closeSidebar, open: openSidebar }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Head>
        <title>BitGain</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <AppShell
        navbarOffsetBreakpoint="sm"
        fixed
        sx={{ backgroundColor: 'rgb(248, 249, 250)' }}
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!sidebarOpened}
            width={{ sm: 250 }}
          >
            <Sidebar onSelect={closeSidebar} />
          </Navbar>
        }
        header={
          <Header height={70} p='md'>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={sidebarOpened}
                  onClick={sidebarOpened ? closeSidebar : openSidebar}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Group position="apart" style={{ width: '100%' }}>
                <Group ml='sm'>
                  <Link href='/' legacyBehavior>
                    <Text size='lg' weight='bold' color='gray.8' td='none !important' className='cursor-pointer'>
                      BitGain
                    </Text>
                  </Link>
                </Group>
              </Group>
            </div>
          </Header>
        }
      >
        <Box pr='md'>
          {children}
        </Box>
      </AppShell>
    </>
  )
};

export default PrivateLayout;
