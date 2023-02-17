import styled from 'styled-components';

export const ContactBody = styled.div`
  padding: 8%;
  /* border: 2px solid green; */
`;

export const ContactTitle = styled.h1`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  /* border: 2px solid red; */
`;

export const ContactDescription = styled.p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  gap: 1rem;
  /* border: 2px solid blue; */
`;
