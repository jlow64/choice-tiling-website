import styled from 'styled-components';
import { fadeInAnimation } from '@/shared/styles/pages.theme';

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 80px;
  font-family: ${(props) => props.theme.fonts[0]};
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.darkGrey};
  background-color: ${(props) => props.theme.colors.gentleWhite};
  border-bottom: 2px solid ${(props) => props.theme.colors.darkGrey};
  z-index: 50;
`;

export const NavbarTitle = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 2%;
  min-width: 300px;
  font-size: 2rem;
  font-weight: 800;
  text-decoration: none;
  height: 100%;
  gap: 1rem;
  overflow: hidden;
`;

export const NavbarList = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
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
    animation-duration: 0.2s;
  }
`;
