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
  animation-duration: 10s;
  animation-iteration-count: infinite;
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
  position: relative;
  display: flex;
  flex-direction: row;
  padding: ${({ padding }) => padding || '8%'};
  height: ${({ height }) => height || '100vh'};
  overflow: hidden;
  &:before {
    content: "";
    background-image: url(${({ url }) => url || ''});
    background-size: cover;    
    filter: brightness(50%);
    height: ${({ height }) => height || '100vh'};
    width: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
  }
`;

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 40%;
  max-width: 700px;
  min-height: 350px;
  max-height: 50%;
  gap: 1rem;
  filter: brightness(100%); 
  border-radius: 5px;
  overflow: hidden;
`;

export const Title = styled.h1<TextProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${({ fontSize }) => fontSize || '8rem'};
  color: ${(props) => props.theme.colors.gentleWhite};
  text-shadow: #000 1px 0 3px;
  filter: brightness(100%); 
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
  color: ${(props) => props.theme.colors.gentleWhite};
  text-shadow: #000 1px 0 3px; 
  filter: brightness(100%);
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
  color: ${(props) => props.theme.colors.gentleWhite};
  text-shadow: #000 1px 0 3px; 
  filter: brightness(100%);
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
  color: ${(props) => props.theme.colors.gentleWhite};
  text-shadow: #000 1px 0 3px; 
  filter: brightness(100%);
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

export const Line = styled.span`
  width: 100%;
  max-width: 900px;
  height: 8px;
  margin: 0 0 10px 0;
  position: relative;
  display: inline-block;
  background-color: rgba(255,255,255,1);
`;