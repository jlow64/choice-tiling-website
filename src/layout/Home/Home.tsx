import { MdOutlineEmail, MdPhone } from 'react-icons/md';
import {
  BodyContainer,
  Description,
  Title,
  SubTitle,
  ContentContainer,
  Heading,
} from '@/shared/styles/pages.theme';
import Link from 'next/link';
import { HomeButton } from './Home.theme';
import Gallery from '@/shared/components/Gallery';

const Home = () => {
  const imageUrls = [
    '/images/tiling-img-1.png',
    '/images/tiling-img-2.png',
    '/images/tiling-img-3.png',
    '/images/tiling-img-4.png',
  ];
  return (
    <>
      <Gallery imageList={imageUrls} height="90vh">
        <Description fontSize="2rem">
          Experienced for over 10+ years in Tiling.
        </Description>
        <Title>We know Tiling.</Title>
      </Gallery>
      <BodyContainer
        id="about-section"
        height="100vh"
        url="/images/tiling-img-2.png"
      >
        <ContentContainer>
          <SubTitle fontSize="3rem">About us</SubTitle>
          <Description>
            We are a locally run tiling business thats been around for 10+
            years.
            <br />
            With plenty of experience, we&apos;ll make sure whatever area you
            need
            <br />
            tiling, you&apos;ll be satisified with the quality of our
            craftsmanship.
          </Description>
        </ContentContainer>
      </BodyContainer>
      <BodyContainer
        id="project-section"
        height="100vh"
        url="/images/tiling-img-3.png"
      >
        <ContentContainer>
          <SubTitle fontSize="3rem">Projects</SubTitle>
          <Heading>Auckland University</Heading>
          <Description>Description... Type your Description here</Description>
        </ContentContainer>
      </BodyContainer>
      <BodyContainer
        id="contact-section"
        height="100vh"
        url="/images/tiling-img-4.png"
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
          <Description>
            <Link href="#home-section">
              <HomeButton>Go back to the Top</HomeButton>
            </Link>
          </Description>
        </ContentContainer>
      </BodyContainer>
    </>
  );
};

export default Home;
