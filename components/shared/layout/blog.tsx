import { Container, Text } from "@mantine/core"
import Link from "next/link";
import { ReactElement } from "react";
import AppHeader from "../header"

interface IProps {
  children: ReactElement;
  title: string;
  hideBackLink?: boolean;
};

const BlogLayout = ({ children, title, hideBackLink }: IProps) => {
  return (
    <>
      <AppHeader title={
        <>
        {!hideBackLink && (
          <Link href='/blog' className="link link-gray">
            Блог /
          </Link>
        )}
          <Text size={40} lh={1.1}>{title}</Text>
        </>
      } />
      <Container
        size="lg"
        mih='100vh'
        py={100}
      >
        {children}
      </Container>
    </>
  )
}

export default BlogLayout;
