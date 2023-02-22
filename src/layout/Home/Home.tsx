import { MdOutlineEmail, MdPhone } from 'react-icons/md';
import {
  BodyContainer,
  Description,
  Title,
  SubTitle,
  ContentContainer,
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
          <Title fontSize="3rem">About us</Title>
          <Description>
            We are a locally run tiling business thats been around for 10+
            years.
            <br />
            With plenty of experience, we'll make sure whatever area you need
            <br />
            tiling, you'll be satisified with the quality of our craftsmanship.
          </Description>
        </ContentContainer>
      </BodyContainer>
      <BodyContainer
        id="project-section"
        height="100vh"
        url="/images/tiling-img-3.png"
      >
        <ContentContainer>
          <Title fontSize="3rem">Projects</Title>
          <SubTitle>Auckland University</SubTitle>
          <Description>Description... Type your Description here</Description>
        </ContentContainer>
      </BodyContainer>
      <BodyContainer
        id="contact-section"
        height="100vh"
        url="/images/tiling-img-4.png"
      >
        <ContentContainer>
          <Title fontSize="3rem">Contact us</Title>
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
