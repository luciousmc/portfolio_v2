import Head from 'next/head';
import Header from '@components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio v2</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <Header />
    </>
  ) 
}
