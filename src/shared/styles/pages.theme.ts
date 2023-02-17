import styled, { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
 20% { opacity: 1 }
 40% { opacity: 0.9; }
 60% { opacity: 0.8; }
 80% { opacity: 0.9; }
 100% { opacity: 1; }
`;

export const PageContainer = styled.div`
  display: absolute;
  background-color: ${(props) => props.theme.colors.gentleWhite};
  height: 100vh;
  width: 100%;
  padding: 10px;

  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;
