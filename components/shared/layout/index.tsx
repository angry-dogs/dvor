import { cloneElement, ReactElement } from 'react';
import Link from 'next/link';
import { Anchor, AppShell, Button, MediaQuery, Navbar, Stack, Text } from '@mantine/core';
import { useDisclosure, useScrollIntoView } from '@mantine/hooks';
import AppNavbar from '../navbar';
import AppFooter from '../footer';
import { CircleCheck } from 'tabler-icons-react';

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
      header={
        <AppNavbar
          isDesktop={isDesktop}
          burgerOpened={burgerOpened}
          burgerOpen={burgerOpen}
          burgerClose={burgerClose}
          scrollToServices={scrollToServices}
          scrollToPortfolio={scrollToPortfolio}
          scrollToReview={scrollToReview}
          scrollToContacts={scrollToContacts}
        />
      }
      // hidden
      navbar={
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          {/* <Navbar hidden={!burgerOpened} bg='dark' sx={{ top: 0, height: '100vh' }}> */}
          <Navbar hidden={!burgerOpened} bg='dark'>
            <Stack align='center' px='lg' py={40}>
              <Anchor onClick={() => { burgerClose(); scrollToServices() }} rel='nofollow' className='link'>
                Услуги
              </Anchor>
              <Anchor onClick={() => { burgerClose(); scrollToPortfolio() }} rel='nofollow' className='link'>
                Работы
              </Anchor>
              <Anchor onClick={() => { burgerClose(); scrollToReview() }} rel='nofollow' className='link'>
                Отзывы
              </Anchor>
              <Anchor onClick={() => { burgerClose(); scrollToContacts() }} rel='nofollow' className='link'>
                Контакты
              </Anchor>
              <Link href='/blog' legacyBehavior>
                <a className='link' onClick={burgerClose}>
                  Блог
                </a>
              </Link>
              <Button
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                size='lg'
                w='100%'
                onClick={() => { burgerClose(); scrollToForm() }}
                my='md'
              >
                <CircleCheck />&nbsp;
                Оставить заявку
              </Button>
              <Stack spacing={0} align='center'>
                <Anchor href='tel:+79029913632' className='link'>+7 (902) 991 36-32</Anchor>
                <Text color='white'>Пн-сб: 9:00 – 21:00</Text>
              </Stack>
            </Stack>
          </Navbar>
        </MediaQuery>
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
