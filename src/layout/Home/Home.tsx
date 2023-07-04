import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineEmail, MdPhone } from 'react-icons/md';
import {
  BodyContainer,
  Description,
  Title,
  SubTitle,
  ContentContainer,
  Heading,
  Line,
} from '@/shared/styles/pages.theme';
import { HomeButton } from './Home.theme';
import Gallery from '@/shared/components/Gallery';
import { imageUrls } from '@/shared/constants/constants';

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
            With over 35+ years of experience,
          </Description>
          <Title>We know Tiling.</Title>
          <Line id="line-start" />
        </div>
      </Gallery>

      <BodyContainer
        id="about-section"
        height="100vh"
        url="/images/tiling-img-2.png"
        padding="16%"
      >
        <ContentContainer>
          <SubTitle fontSize="3rem">About us</SubTitle>
          <Description fontSize="1rem">
            Choice Tiling NZ Limited is a well-known Auckland based tiling
            company in most of the business in commercial. Choice Tiling NZ
            Limited established itself as a company that is constantly striving
            for new innovative standards and success. Every opportunity we must
            provide our services, we will do our best to meet our
            customer&apos;s needs and expectations. Choice Tiling is a company
            that will provide any requirement for a successful project as well
            as a high standard of service.
          </Description>
          <Line id="line-1" />
        </ContentContainer>
      </BodyContainer>
      <BodyContainer
        id="services-section"
        height="100vh"
        url="/images/tiling-img-3.png"
        padding="16%"
      >
        <ContentContainer>
          <SubTitle fontSize="3rem">Services</SubTitle>
          <Description>
            As Tiling professionals, our services include:
          </Description>
          <Description>
            <ul>
              <li>Free quoting</li>
              <li>Tiling</li>
              <li>Waterproofing</li>
              <li>And much more...</li>
            </ul>
          </Description>
          <Line id="line-2" />
        </ContentContainer>
      </BodyContainer>
      <BodyContainer
        id="project-section"
        height="100vh"
        url="/images/tiling-img-3.png"
        padding="16%"
      >
        <ContentContainer>
          <SubTitle fontSize="3rem">Projects</SubTitle>
          <Heading>Auckland Airport</Heading>
          <Description>This project was concepted in...</Description>
          <Line id="line-3" />
        </ContentContainer>
      </BodyContainer>
      <BodyContainer
        id="contact-section"
        height="100vh"
        url="/images/tiling-img-4.png"
        padding="16%"
      >
        <ContentContainer>
          <SubTitle fontSize="3rem">Contact us</SubTitle>
          <Description>
            <MdOutlineEmail cursor={12} size={'1.5rem'} />
            Main@choicetiling.co.nz
          </Description>
          <Description>
            <MdPhone size={'1.5rem'} />
            Call us on 0274988483
          </Description>
          <Description>Or fill in our form here:</Description>
          <Description>
            <Link href="#home-section">
              <HomeButton>Go back to the Top</HomeButton>
            </Link>
          </Description>
        </ContentContainer>
      </BodyContainer>
    </div>
  );
};

export default Home;
