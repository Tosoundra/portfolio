import { createGlobalStyle, css } from 'styled-components';

const GlobalStyled = createGlobalStyle`
 ${css`
   :root {
     font-family: 'Inter', sans-serif;
     font-weight: 400;
     line-height: 1.15;

     color: rgb(255, 255, 255);
     background-color: ${({ theme }) => theme.colors.blackTheme};

     font-synthesis: none;
     text-rendering: optimizeLegibility;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
   }

   #root {
     flex-direction: column;
     justify-content: space-between;
   }
   body {
     overscroll-behavior-x: none;
   }
   * {
     margin: 0;
     padding: 0;
     border: none;
     box-sizing: border-box;
     scroll-behavior: smooth;
   }

   a {
     text-decoration: none;
     color: inherit;
   }

   ul {
     list-style: none;
   }
 `}
`;
export default GlobalStyled;
