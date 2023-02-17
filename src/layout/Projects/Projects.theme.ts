import styled from 'styled-components';

export const ProjectBody = styled.div`
  padding: 8%;
  /* border: 2px solid green; */
`;

export const ProjectTitle = styled.h1`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  /* border: 2px solid red; */
`;

export const ProjectSubtitle = styled.h2`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  /* font-size: ${(props) => props.theme.fontSizes.large}; */
  /* border: 2px solid red; */
`;

export const ProjectDescription = styled.p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fonts[0]};
  /* border: 2px solid blue; */
`;
