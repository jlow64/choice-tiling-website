import dynamic from 'next/dynamic';

const DynamicContactPage = dynamic(() => import('./Contact'), {
  ssr: false,
});

export default DynamicContactPage;
