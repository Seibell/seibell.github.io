import { Box, useColorMode, Flex, Heading } from "@chakra-ui/react";
import DarkModeButton from './components/DarkModeButton';
import NavBar from './components/NavBar';

function App() {
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
          <Heading mb={4} fontSize="3xl">Welcome to My Homepage</Heading>

          <DarkModeButton />
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
