import styled from 'styled-components';
import { fadeInAnimation } from '@/shared/styles/pages.theme';

export const HomeButton = styled.button`
  font-family: ${(props) => props.theme.fonts[0]};
  height: 3rem;
  background: transparent;
  color: ${(props) => props.theme.colors.darkGrey};
  min-width: 10rem;
  border: 1px solid ${(props) => props.theme.colors.mediumGrey};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.gentleWhite};
    background-color: ${(props) => props.theme.colors.mediumGrey};
    animation-name: ${fadeInAnimation};
    animation-duration: 0.2s;
  }
`;
