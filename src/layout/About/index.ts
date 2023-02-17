import dynamic from 'next/dynamic';

const DynamicAboutPage = dynamic(() => import('./About'), {
  ssr: false,
});

export default DynamicAboutPage;
