import styled from 'styled-components';

export const HomeButton = styled.button`
  font-family: ${(props) => props.theme.fonts[0]};
  height: 3rem;
  background: ${(props) => props.theme.colors.gentleWhite};
  color: ${(props) => props.theme.colors.darkGrey};
  min-width: 10rem;
  border: 1px solid ${(props) => props.theme.colors.mediumGrey};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.gentleWhite};
    background-color: ${(props) => props.theme.colors.mediumGrey};
  }
`;
