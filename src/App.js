import React, { useContext } from 'react';
import { Button } from "@chakra-ui/react";
import { ThemeContext } from './ThemeContext';
import { darkTheme, lightTheme } from './constants/themes';
import { ThemeProvider } from 'styled-components';

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === 'LIGHT' ? lightTheme : darkTheme}>
      <div className="App">
        <h1>Welcome to My Homepage</h1>
        <Button
          colorScheme="teal"
          onClick={() => window.location.href = 'https://seibell.github.io/resume'}
        >
          Resume
        </Button>
        <Button
          colorScheme="teal"
          onClick={toggleTheme}
        >
          Toggle Theme
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
