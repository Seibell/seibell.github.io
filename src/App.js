  import { Box, useColorMode, Flex, Heading, Select, useBreakpointValue } from "@chakra-ui/react";
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
  
    const fontSize = useBreakpointValue({ base: "xl", md: "4xl" });
  
    return (
      <Box h="100vh" overflow="hidden" display="flex" flexDirection="column">
        <NavBar />
        <Flex
          className="App"
          direction="column"
          align="center"
          justify="center"
          flex="1" 
        >
          <Heading fontSize={fontSize}>{greeting}</Heading>
          <Heading mb={4} fontSize={fontSize}>{name}</Heading>
          <DarkModeButton />
        </Flex>
        <footer className="footer" style={{ textAlign: 'center', fontWeight: 'semibold', fontSize: '10px' }}>
          © {currentYear} Ryan Lim
        </footer>
      </Box>
    );
  }
  
  export default App;
  
