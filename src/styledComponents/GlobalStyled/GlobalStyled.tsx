import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  :root {
   
  font-family: 'Inter', sans-serif;
  line-height: 1;

  color-scheme: light dark;
  color: rgb(255, 255, 255);
  background-color: #202020;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root{
    height:100vh;
    
    display:flex;
    flex-direction:column;
    justify-content:space-between;

}

* {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  scroll-behavior:smooth;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #000;
    background-color: #fff;
  }
}

`;
