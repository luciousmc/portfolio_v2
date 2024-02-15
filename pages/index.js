import Head from "next/head";
import Header from "@components/Header";
import HeroSection from "@components/HeroSection";
import Section from "@components/Section";
import SocialBox from "@components/SocialBox";
import AboutSection from "@components/AboutSection";
import SideMenu from "@components/SideMenu";
import FeaturedProject from "@components/FeaturedProject";
import ContactSection from "@components/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marlon Clay Portfolio</title>
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <Header />

      <SideMenu />

      <main className=' relative max-w-screen-2xl pb-14 md:px-8 mx-auto'>
        <SocialBox />

        <div className='flex flex-col w-[95%] md:w-[85%] mx-auto'>
          <HeroSection />

          <Section id='About' title='About'>
            <AboutSection />
          </Section>

          <Section id='Projects' title='Projects'>
            <FeaturedProject />
          </Section>

          <Section id='Contact' title='Contact'>
            <ContactSection />
          </Section>
        </div>
      </main>
    </>
  );
}
