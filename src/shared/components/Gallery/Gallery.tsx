import { PropsWithChildren, useEffect, useState } from 'react';
import { GalleryContainer } from './Gallery.theme';
import { UrlObject } from '@/shared/typings/data.typing';

interface GalleryPageProps {
  height: string;
  imageList: Array<UrlObject>;
}

const Gallery = ({
  children,
  imageList,
  height,
}: PropsWithChildren<GalleryPageProps>) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  useEffect(() => {
    if (imageIndex > imageList.length - 1) {
      setImageIndex(0);
    }
  }, [imageIndex, imageList.length]);
  useEffect(() => {
    const imageTimer = setInterval(
      () => setImageIndex((imageIndex) => imageIndex + 1),
      6000,
      imageIndex,
    );
    return () => clearInterval(imageTimer);
  }, [imageIndex]);
  return (
    <GalleryContainer
      id="home-section"
      height={height}
      url={imageList?.[imageIndex]?.url}
      padding="16%"
    >
      {children}
    </GalleryContainer>
  );
};

export default Gallery;
