import 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      mainColor: string;
      additionColor: string;
      welcomeSectionColor: string;
      blackTheme: string;
      utilitiesColor: string;
      errorColor: string;
    };
    wrapperProperties: {
      maxWidth: string;
      padding: string;
      margin: string;
    };

    hoverEffect: {
      transition: string;
    };

    media: {
      smallPhone: string;
      bigPhone: string;
    };

    colorScheme: {
      // dark: string;
      light: string;
      dark: boolean;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    mainColor: '#2be080',
    additionColor: '#3456f3',
    welcomeSectionColor: '#073042',
    blackTheme: '#000',
    utilitiesColor: '#e8e8e8',
    errorColor: '#b91414',
  },

  wrapperProperties: {
    maxWidth: '1280px',
    padding: '100px 70px',
    margin: 'auto',
  },

  hoverEffect: {
    transition: '0.3s cubic-bezier(0.51, -0.01, 0.32, 1)',
  },

  media: {
    smallPhone: '(max-width:425px)',
    bigPhone: '(max-width:767px)',
  },

  colorScheme: {
    dark: window.matchMedia('(prefers-color-scheme:dark)').matches,
    light: '(prefers-color-scheme: light)',
  },
};
