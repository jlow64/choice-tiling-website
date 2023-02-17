import dynamic from 'next/dynamic';

const DynamicHomePage = dynamic(() => import('./Home'), {
  ssr: false,
});

export default DynamicHomePage;
