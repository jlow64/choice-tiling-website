import type { AppProps } from 'next/app';
import Navbar from '@/shared/components/Navbar';
import GlobalStyle from '@/shared/styles/global';
import { PageContainer } from '@/shared/styles/pages.theme';
import Theme from '@/shared/theme';
import MetaTags from '@/shared/components/MetaTags';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <MetaTags />
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <Component {...pageProps} />
      </PageContainer>
    </Theme>
  );
}

export default MyApp;
