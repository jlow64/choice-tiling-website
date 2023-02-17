import Navbar from '@/shared/components/Navbar';
import GlobalStyle from '@/shared/styles/global';
import { PageContainer } from '@/shared/styles/pages.theme';
import Theme from '@/shared/theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <Component {...pageProps} />
      </PageContainer>
    </Theme>
  );
}

export default MyApp;
