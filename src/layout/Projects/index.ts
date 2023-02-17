import dynamic from 'next/dynamic';

const DynamicProjectsPage = dynamic(() => import('./Projects'), {
  ssr: false,
});

export default DynamicProjectsPage;
