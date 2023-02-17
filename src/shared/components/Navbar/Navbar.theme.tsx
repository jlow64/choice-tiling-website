import styled, { keyframes } from 'styled-components';

interface NavbarItemIndex {
  isActive: boolean;
}

const fadeInAnimation = keyframes`
  0% { opacity: 0 }
  20% { opacity: 0.2 }
  40% { opacity: 0.4; }
  60% { opacity: 0.6; }
  80% { opacity: 0.8; }
  100% { opacity: 1; }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 80px;
  font-family: ${(props) => props.theme.fonts[0]};
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.darkGrey};
  background-color: ${(props) => props.theme.colors.gentleWhite};
  margin-top: 10px;
  /* border: 1px solid yellow; */
`;

export const NavbarTitle = styled.a`
  flex: 20%;
  display: flex;
  align-items: center;
  justify-content: right;
  font-size: 2rem;
  text-decoration: none;
  height: 100%;
  gap: 1rem;
  /* border: 1px solid red; */
`;

export const NavbarList = styled.div`
  flex: 80%;
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
  /* gap: rem; */
  height: 100%;
`;

export const NavbarListItem = styled.li<NavbarItemIndex>`
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.medium};
  justify-content: center;
  align-items: center;
  height: 3rem;
  color: ${(props) => props.theme.colors.darkGrey};
  min-width: 10rem;
  border: ${(props) =>
    props.isActive ? `2px solid ${props.theme.colors.mediumGrey}` : 'none'};
  border-radius: 20px;

  &:hover {
    color: ${(props) => props.theme.colors.gentleWhite};
    background-color: ${(props) => props.theme.colors.mediumGrey};
    animation-name: ${fadeInAnimation};
    animation-duration: 0.2s;
  }
`;
