import Head from 'next/head';
import Header from '@components/Header';
import HeroSection from '@components/HeroSection';
import Section from '@components/Section';

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
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <Section title='About'>
          <h3>This is the about Section</h3>
        </Section>

        {/* Projects Section */}
        <Section title ='Projects'>
          <h3>This is the Project Section</h3>
        </Section>

        {/* Contact Section */}
        <Section title='Contact'>
          This is the contact section
        </Section>
      </main>
    </>
  ) 
}
