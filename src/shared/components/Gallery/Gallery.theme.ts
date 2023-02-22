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
  height: ${({ height }) => height || '100vh'};
  background-image: url(${({ url }) => url || ''});
  animation: ${fadeInAnimation};
`;
