import styled from 'styled-components';
import { fadeInAnimation } from '@/shared/styles/pages.theme';

export const GalleryContainer = styled.section<{
  height: string;
  url: string;
  padding: string;
}>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding || '8%'};
  height: ${({ height }) => height || '100vh'};
  animation: ${fadeInAnimation};
  &:before {
    content: "";
    background-image: url(${({ url }) => url || ''});
    background-size: cover;
    position: absolute;
    height: ${({ height }) => height || '100vh'};
    filter: brightness(50%);
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
`;
