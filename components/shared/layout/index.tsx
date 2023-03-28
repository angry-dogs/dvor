import { ReactElement } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import AppNavbar from '../navbar';
import AppHeader from '../header';
import AppFooter from '../footer';

interface IProps {
  children: ReactElement;
}

const AppLayout = ({ children }: IProps) => {
  const theme = useMantineTheme();
  const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

  return (
    <AppShell
      styles={{
        main: {
          padding: 0,
        }
      }}
      header={
        <AppNavbar
          scrollToServices={() => {}}
          scrollToPortfolio={() => {}}
          scrollToReview={() => {}}
          scrollToContacts={() => {}}
        />
      }
    >
      <AppHeader title={<>Блог</>} />
      {children}
      <AppFooter isDesktop={isDesktop} />
    </AppShell>
  );
}

export default AppLayout;
