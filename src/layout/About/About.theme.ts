import styled from 'styled-components';

export const AboutBody = styled.div`
  padding: 8%;
  /* border: 2px solid green; */
`;

export const AboutTitle = styled.h1`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  /* border: 2px solid red; */
`;

export const AboutDescription = styled.p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  /* border: 2px solid blue; */
`;
