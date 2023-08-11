import { Box, Button, Flex, useColorMode, useBreakpointValue } from "@chakra-ui/react";
import { lightTheme, darkTheme } from '../constants/themes';
import { Link } from 'react-router-dom';

function NavBar() {
  const { colorMode } = useColorMode();
  const theme = colorMode === 'dark' ? darkTheme : lightTheme;
  // base = phone, md = larger screen
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Flex
      bg={theme.navBarBackground}
      p={4}
      alignItems="center"
      fontSize="xl"
      flexDirection={flexDirection}
      justifyContent="center"
    >
      <Box display="flex" justifyContent="center">
      <Button
          as={Link}
          to="/"
          variant="link"
          color={theme.text}
          mr={4}
          ml={4}
          size="xl"
        >
          Resume
        </Button>
        <Button
          as={Link}
          to="/projects"
          variant="link"
          color={theme.text}
          mr={4}
          ml={4}
          size="xl"
        >
          Projects
        </Button>
        <Button
          as={Link}
          to="/contact"
          variant="link"
          color={theme.text}
          mr={4}
          ml={4}
          size="xl"
        >
          Contact
        </Button>
      </Box>
    </Flex>
  );
}

export default NavBar;
