import Head from 'next/head';
import Header from '@components/Header';
import HeroSection from '@components/HeroSection';
import Section from '@components/Section';
import SocialBox from '@components/SocialBox';
import AboutSection from '@components/AboutSection';
import SideMenu from '@components/SideMenu';
import FeaturedProject from '@components/FeaturedProject';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio v2</title>
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <Header />

      <SideMenu />

      <main className='max-w-7xl px-8 mx-auto'>
        <div className='flex flex-col w-[85%] mx-auto'>
          <HeroSection />

          <SocialBox />

          <Section id='About' title='About'>
            <AboutSection />
          </Section>

          <Section id='Projects' title='Projects'>
            <FeaturedProject />
          </Section>

          <Section id='Contact' title='Contact'>
            This is the contact section
          </Section>
        </div>
      </main>
    </>
  );
}
