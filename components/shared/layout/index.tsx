import { cloneElement, ReactElement } from 'react';
import { AppShell, Navbar, Stack, Text } from '@mantine/core';
import AppNavbar from '../navbar';
import AppHeader from '../header';
import AppFooter from '../footer';
import { useDisclosure, useScrollIntoView } from '@mantine/hooks';

interface IProps {
  children: ReactElement;
  isDesktop: boolean;
};

const AppLayout = ({ children, isDesktop }: IProps) => {
  const [burgerOpened, { close: burgerClose, open: burgerOpen }] = useDisclosure(false);
  const { scrollIntoView: scrollToServices, targetRef: servicesRef } = useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollToPortfolio, targetRef: portfolioRef } = useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollToReview, targetRef: reviewRef } = useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollToContacts, targetRef: contactsRef } = useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollToForm, targetRef: formRef } = useScrollIntoView<HTMLDivElement>();

  return (
    <AppShell
      styles={{
        main: {
          padding: 0,
        }
      }}
      // hidden
      // navbar={
      //   //  width={{ sm: 200, lg: 300 }}
      //   <Navbar p="md" hiddenBreakpoint="sm" hidden={!burgerOpened}>
      //     <Stack>
      //       <Text weight='bolder'>I'm navbar</Text>
      //       <Text>Application navbar</Text>
      //       <Text>Application navbar</Text>
      //       <Text>Application navbar</Text>
      //       <Text>Application navbar</Text>
      //     </Stack>
      //   </Navbar>
      // }
      header={
        <AppNavbar
          burgerOpened={burgerOpened}
          burgerOpen={burgerOpen}
          burgerClose={burgerClose}
          scrollToServices={scrollToServices}
          scrollToPortfolio={scrollToPortfolio}
          scrollToReview={scrollToReview}
          scrollToContacts={scrollToContacts}
        />
      }
      footer={<AppFooter isDesktop={isDesktop} />}
    >
      {cloneElement(children, {
        isDesktop: isDesktop,
        servicesRef: servicesRef,
        portfolioRef: portfolioRef,
        reviewRef: reviewRef,
        contactsRef: contactsRef,
        formRef: formRef,
        scrollToServices: scrollToServices,
        scrollToPortfolio: scrollToPortfolio,
        scrollToReview: scrollToReview,
        scrollToContacts: scrollToContacts,
        scrollToForm: scrollToForm,
      })}
    </AppShell>
  );
}

export default AppLayout;
