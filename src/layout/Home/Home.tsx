import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdOutlineEmail, MdPhone } from 'react-icons/md';
import { imageUrls } from '@/shared/constants/constants';
import {
  BodyContainer,
  ContactContainer,
  ContactColumn,
  Description,
  Card,
  Title,
  SubTitle,
  ContentContainer,
  Heading,
  Line,
} from '@/shared/styles/pages.theme';
import { HomeButton } from './Home.theme';
import Gallery from '@/shared/components/Gallery';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const homeRef = useRef(null);
  const galleryRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        galleryRef.current,
        {
          x: -300,
          opacity: 0.5,
        },
        {
          x: 0,
          opacity: 1,
          delay: 0.5,
          duration: 2,
          ease: 'none',
          scrollTrigger: {
            trigger: '#home-section',
            scrub: true,
            start: 'top bottom',
            end: 'top top',
          },
        },
      );
      gsap.from('#line-start', {
        scrollTrigger: {
          trigger: '#home-section',
          scrub: true,
          start: 'top top',
          end: '+=10%',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'none',
      });
      gsap.from('#line-1', {
        scrollTrigger: {
          trigger: '#about-section',
          scrub: true,
          pin: true,
          start: 'top top',
          end: '+=100%',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'none',
      });
      gsap.from('#line-2', {
        scrollTrigger: {
          trigger: '#services-section',
          scrub: true,
          pin: true,
          start: 'top top',
          end: '+=100%',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'none',
      });
      gsap.from('#line-3', {
        scrollTrigger: {
          trigger: '#project-section',
          scrub: true,
          pin: true,
          start: 'top top',
          end: '+=100%',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'none',
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={homeRef}>
      <Gallery imageList={imageUrls} height="100vh">
        <div ref={galleryRef}>
          <Description fontSize="2rem">
            With over 35+ years of experience
          </Description>
          <Title>We know Tiling.</Title>
          <Line id="line-start" />
        </div>
      </Gallery>

      <BodyContainer
        id="about-section"
        height="100vh"
        url="/images/tiling-img-2.png"
      >
        <ContentContainer>
          <SubTitle fontSize="2rem" color="dark">
            About us
          </SubTitle>
          <Description fontSize="1rem" color="dark">
            Choice Tiling NZ Limited is an established Auckland based tiling
            company with experience in commercial and residential. Choice Tiling
            NZ Limited has established itself as a company that is constantly
            striving for innovative standards and success. Every opportunity
            that we provide our services, we do our best to meet our
            customer&apos;s needs and expectations. Choice Tiling is a company
            that will provide any requirement for a successful project as well
            as a high standard of service.
          </Description>
          <Line id="line-1" color="dark" />
        </ContentContainer>
      </BodyContainer>
      <BodyContainer
        id="services-section"
        height="100vh"
        url="/images/tiling-img-3.png"
      >
        <ContentContainer>
          <SubTitle fontSize="2rem" color="dark">
            Services
          </SubTitle>
          <Description color="dark">
            As Tiling professionals, our services include:
          </Description>
          <Description color="dark">
            <Card>Free Quotation</Card>
            <Card>Substrate Preparation</Card>
            <Card>Tiling</Card>
            <Card>Waterproofing</Card>
            <Card>Concrete Repair</Card>
            <Card>And much more...</Card>
          </Description>
          <Line id="line-2" color="dark" />
        </ContentContainer>
      </BodyContainer>
      <BodyContainer
        id="project-section"
        height="100vh"
        url="/images/tiling-img-3.png"
      >
        <ContentContainer>
          <SubTitle fontSize="2rem" color="dark">
            Projects
          </SubTitle>
          <Heading color="dark">Auckland Airport</Heading>
          <Description color="dark">
            This project was concepted in...
          </Description>
          <Line id="line-3" color="dark" />
        </ContentContainer>
      </BodyContainer>
      <ContactContainer id="contact-section">
        <ContactColumn>
          <Heading>Choice Tiling</Heading>
          <Description fontSize="15px" color="dark">
            We provide free quotations. Get in touch with our tiling specialists
            to give your project the finishing touches it deserves.
          </Description>
        </ContactColumn>
        <ContactColumn>
          <Heading>Contact us</Heading>
          <Description>
            <MdOutlineEmail cursor={12} size={'1.5rem'} />
            Main@choicetiling.co.nz
          </Description>
          <Description>
            <MdPhone size={'1.5rem'} />
            Call us on 0274988483
          </Description>
          <Description>
            <Link href="#home-section">
              <HomeButton>Go back to the Top</HomeButton>
            </Link>
          </Description>
        </ContactColumn>
      </ContactContainer>
    </div>
  );
};

export default Home;
