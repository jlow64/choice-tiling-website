import { PropsWithChildren, useEffect, useState } from 'react';
import { GalleryContainer } from './Gallery.theme';

interface GalleryPageProps {
  height: string;
  imageList: Array<string>;
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
  }, [imageIndex]);
  useEffect(() => {
    const imageTimer = setInterval(
      () => setImageIndex((imageIndex) => imageIndex + 1),
      3000,
      imageIndex,
    );
    return () => clearInterval(imageTimer);
  }, []);
  return (
    <GalleryContainer height={height} url={imageList[imageIndex]} padding="8%">
      {children}
    </GalleryContainer>
  );
};

export default Gallery;
