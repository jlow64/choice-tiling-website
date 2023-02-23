import styled, { keyframes } from 'styled-components';

export const breatheAnimation = keyframes`
 20% { opacity: 1 }
 40% { opacity: 0.95; }
 60% { opacity: 0.9; }
 80% { opacity: 0.95; }
 100% { opacity: 1; }
`;

export const fadeInAnimation = keyframes`
  0% { opacity: 0 }
  20% { opacity: 0.2 }
  40% { opacity: 0.4; }
  60% { opacity: 0.6; }
  80% { opacity: 0.8; }
  100% { opacity: 1; }
`;

export const PageContainer = styled.div`
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.colors.gentleWhite};
  height: 400vh;
  width: 100vw;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  overflow-x: hidden;
  border-left: 3px solid ${(props) => props.theme.colors.darkGrey};
`;

interface BodyContainerProps {
  url: string;
  height: string | number;
  padding?: string;
}

interface TextProps {
  fontSize?: string | number;
}

export const BodyContainer = styled.section<BodyContainerProps>`
  display: flex;
  flex-direction: row;
  padding: ${({ padding }) => padding || '8%'};
  height: ${({ height }) => height || '100vh'};
  background-image: url(${({ url }) => url});
`;

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3%;
  min-width: 40%;
  max-width: 700px;
  max-height: 50%;
  background-color: ${(props) => props.theme.colors.transparentWhite};
  gap: 1rem;
  border-radius: 5px;
`;

export const Title = styled.h1<TextProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${({ fontSize }) => fontSize || '8rem'};
  @media screen and (max-width: 600px) {
    font-size: 4rem;
  }
`;

export const SubTitle = styled.h2<TextProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '2rem')};
  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;

export const Heading = styled.h3<TextProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.5rem')};
  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const Description = styled.p<TextProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.2rem')};
  gap: 1rem;
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
