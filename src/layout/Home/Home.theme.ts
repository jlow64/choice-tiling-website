import styled from 'styled-components';

export const HomeBody = styled.div`
  padding: 8%;
  /* border: 2px solid green; */
`;

export const HomeTitle = styled.h1`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  /* border: 2px solid red; */
`;

export const HomeDescription = styled.p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  /* border: 2px solid blue; */
`;
