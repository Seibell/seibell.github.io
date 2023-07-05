import { Box, useColorMode, Flex, Heading, Select } from "@chakra-ui/react";
import { useState } from "react";
import DarkModeButton from './components/DarkModeButton';
import NavBar from './components/NavBar';
import { languageData } from './constants/languageData';

function App() {
  const currentYear = new Date().getFullYear();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const { greeting, name } = languageData[selectedLanguage];

  return (
    <Box overflow="hidden" h="100vh">
      <Flex
        direction="column"
        align="center"
        justify="flex-start"
        h="100%"
      >
        <NavBar />
        <Flex
          className="App"
          direction="column"
          align="center"
          justify="center"
          style={{ minHeight: 'calc(100vh - 40px)', marginTop: '-40px' }}
        >
          <Heading fontSize="4xl">{greeting}</Heading>
          <Heading mb={4} fontSize="4xl">{name}</Heading>
          <DarkModeButton />
        </Flex>
        <footer className="footer" style={{ marginTop: '-10px', fontWeight: 'semibold' }}>
          © {currentYear} Ryan Lim
        </footer>
      </Flex>
    </Box>
  );
}

export default App;
