import GlobalStyles from "./Components/General/GlobalStyles";
import { styled } from 'styled-components';
import { ThemeProvider } from "styled-components";
// import { animated } from '@react-spring/web'
import { useState } from 'react';

import MainPage from './Pages/MainPage';
import ProjectsPage from './Pages/ProjectsPage';

const AppContainer = styled.div(({ theme }) => `
width: 100%;
overflow: hidden;
max-width: ${theme.screen.large_desktop};
margin: 0 auto;
height: 100vh;
box-shadow: 0px 0px 30px 20px rgba(0, 0, 0, 0.1);
background-color: ${theme.colors.background};
`)

function App() {
  const [mainV, setMainV] = useState(true);

  const swipe = () => setMainV(prev => !prev);

  const theme = {
    font: {
      size: {
        largest: "4rem",
        larger: "2.5rem",
        large: "1.5rem",
        regular: "1rem",
        small: "0.875rem"
      },
      weight: {
        bold: "700",
        regular: "400",
        thin: "300"
      },
      family: {
        plus: "Plus Jakarta Sans",
        roboto: "Roboto",
        robotoc: "Roboto Condensed",
        rubik: "Rubik"
      }
    },

    colors: {
      primary: "#F0D859",
      secondary: "#F0A159",
      text: "#FAF0E6",
      background: "#352F44",
      element_fade: "rgb(31,27,40, 0.3)",
      element: "#1F1B28"
    },

    screen: {
      large_desktop: "1064px",
      medium_desktop: "992px",
      small_desktop: "768px",

      large_mobile: "600px",
      medium_mobile: "480px",
      small_mobile: "350px",
    },

    borderRadius: "7px"
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        {mainV ? <MainPage click={swipe} /> : <ProjectsPage click={swipe} />}
      </AppContainer>
    </ThemeProvider>
  );
}


export default App;
