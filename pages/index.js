import Head from 'next/head';
import Header from '@components/Header';
import HeroSection from '@components/HeroSection';
import Section from '@components/Section';
import SocialBox from '@components/SocialBox';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio v2</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <Header />

      <main className='w-full px-8'>

        <div className="flex flex-col w-3/4 lg:w-2/3 mx-auto">
          <HeroSection />

          <SocialBox />

          <Section id='About' title='About'>
            <h3>This is the about Section</h3>
          </Section>

          <Section id='Projects' title ='Projects'>
            <h3>This is the Project Section</h3>
          </Section>
          
          <Section id='Contact' title='Contact'>
            This is the contact section
          </Section>
        </div>
      </main>
    </>
  ) 
}
