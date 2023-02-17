import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    gentleWhite: '#F5F6FB',
    lightGrey: '#8e8e8e',
    mediumGrey: '#2f2f2f',
    darkGrey: '#101010',
  },
  fonts: ['Inter Tight', 'sans-serif'],
  fontSizes: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
};

const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
