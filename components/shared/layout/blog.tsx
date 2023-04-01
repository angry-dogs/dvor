import { ReactElement } from 'react';
import { Container, Text } from '@mantine/core'
import Link from 'next/link';
import AppHeader from '../header'

interface IProps {
  children: ReactElement;
  title: string;
  hideBackLink?: boolean;
  isDesktop: boolean;
};

const BlogLayout = ({ children, title, hideBackLink, isDesktop }: IProps) => {
  return (
    <>
      <AppHeader title={
        <>
        {!hideBackLink && (
          <Link href='/blog' className="link link-gray" style={{ display: 'block', marginTop: '10px' }}>
            Блог /
          </Link>
        )}
          <Text size={isDesktop ? 42 : 30} lh={1.1} mt={hideBackLink ? 0 : 10}>{title}</Text>
        </>
      } />
      <Container
        size="lg"
        mih='100vh'
        pt={60}
        pb={100}
      >
        {children}
      </Container>
    </>
  )
}

export default BlogLayout;
