import Head from 'next/head';
import { ReactElement } from 'react';

interface IProps {
  children: ReactElement;
}

const PublicLayout = ({ children }: IProps) => {

  return (
    <>
      <Head>
        <title>BitGain</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      {children}
    </>
  )
};

export default PublicLayout;
