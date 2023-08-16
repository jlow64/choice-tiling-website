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

export const breathing = keyframes`
  50% { transform: scaleY(1.05); }
  100% { transform: scaleY(1); }
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

interface BoxProps {
  url: string;
  height: string | number;
  padding: string;
}

type ContainerProps = Partial<BoxProps>;

interface TextProps {
  fontSize?: string | number;
  shadow?: boolean;
  color?: 'light' | 'dark';
}

interface LineProps {
  color?: 'light' | 'dark';
}

export const BodyContainer = styled.section<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height || '100vh'};
  overflow: hidden;
  &:before {
    content: '';
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

export const ContentContainer = styled.section<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 50vh;
  padding: 40px 300px;
  background: ${(props) => props.theme.colors.transparentWhite};
  box-shadow: 0 8px 6px -6px black;
  gap: 1rem;
  filter: brightness(100%);
  overflow: hidden;
`;

export const ContactContainer = styled.section`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 30px 300px;
  width: 100vw;
  height: 35vh;
  gap: 1em;
  background: ${(props) => props.theme.colors.darkGrey};
`;

export const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  gap: 10px;
`;

export const Title = styled.h1<TextProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${({ fontSize }) => fontSize || '8rem'};
  color: ${({ theme, color }) =>
    color || color === 'dark'
      ? theme.colors.mediumGrey
      : theme.colors.gentleWhite};
  text-shadow: ${({ theme, color }) =>
      color || color === 'dark'
        ? theme.colors.gentleWhite
        : theme.colors.mediumGrey}
    1px 0 3px;
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
  color: ${({ theme, color }) =>
    color || color === 'dark'
      ? theme.colors.mediumGrey
      : theme.colors.gentleWhite};
  text-shadow: ${({ theme, color, shadow }) => {
    if (shadow) {
      return color || color === 'dark'
        ? theme.colors.gentleWhite + ' 1px 0 3px'
        : theme.colors.mediumGrey + ' 1px 0 3px';
    }
    return 'none';
  }};
  filter: brightness(100%);
  animation: ${breathing} 3500ms;
  animation-iteration-count: infinite;
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
  letter-spacing: 0.5px;
  color: ${({ theme, color }) =>
    color || color === 'dark'
      ? theme.colors.mediumGrey
      : theme.colors.gentleWhite};
  filter: brightness(100%);
  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const Description = styled.div<TextProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.2rem')};
  gap: 1rem;
  letter-spacing: 0.5px;
  line-height: 20px;
  color: ${({ theme, color }) =>
    color || color === 'dark'
      ? theme.colors.mediumGrey
      : theme.colors.gentleWhite};
  filter: brightness(100%);
  max-width: 50%;
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 30px;
  width: 10vw;
  height: 10vh;
  border: 1px solid ${(props) => props.theme.colors.darkGrey};
`;

export const Line = styled.span<LineProps>`
  width: 100%;
  height: 8px;
  margin: 0 0 10px 0;
  position: relative;
  display: inline-block;
  background-color: ${({ color, theme }) =>
    color || color === 'dark'
      ? theme.colors.mediumGrey
      : theme.colors.gentleWhite};
`;
