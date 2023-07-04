import styled from 'styled-components';
import { fadeInAnimation } from '@/shared/styles/pages.theme';

export const NavbarContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: 80px;
  width: 100vw;
  font-family: ${(props) => props.theme.fonts[0]};
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.darkGrey};
  background-color: ${(props) => props.theme.colors.gentleWhite};
  opacity: 0.9;
  z-index: 50;
  overflow: hidden;
`;

export const NavbarTitle = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
  min-width: 400px;
  font-size: 2rem;
  font-weight: 800;
  text-decoration: none;
  height: 100%;
  gap: 1rem;
  overflow: hidden;
`;

export const NavbarList = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
  width: 80vw;
  height: 100%;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavbarListItem = styled.li`
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.medium};
  justify-content: center;
  align-items: center;
  height: 3rem;
  color: ${(props) => props.theme.colors.darkGrey};
  min-width: 10rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.gentleWhite};
    background-color: ${(props) => props.theme.colors.mediumGrey};
    animation-name: ${fadeInAnimation};
    animation-duration: 0.4s;
  }
`;
