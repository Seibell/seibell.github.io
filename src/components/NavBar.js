import { Box, Button, Flex, useColorMode, useBreakpointValue } from "@chakra-ui/react";
import { lightTheme, darkTheme } from '../constants/themes';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const { colorMode } = useColorMode();
  const theme = colorMode === 'dark' ? darkTheme : lightTheme;
  // base = phone, md = larger screen
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const location = useLocation();

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
          to={location.pathname === "/resume" ? "/" : "/resume"}
          variant="link"
          color={theme.text}
          mr={4}
          ml={4}
          size="xl"
        >
          {location.pathname === "/resume" ? "Home" : "Resume"}
        </Button>
        <Button
          as={Link}
          to={location.pathname === "/projects" ? "/" : "/projects"}
          variant="link"
          color={theme.text}
          mr={4}
          ml={4}
          size="xl"
        >
          {location.pathname === "/projects" ? "Home" : "Projects"}
        </Button>
        <Button
          as={Link}
          to={location.pathname === "/contact" ? "/" : "/contact"}
          variant="link"
          color={theme.text}
          mr={4}
          ml={4}
          size="xl"
        >
          {location.pathname === "/contact" ? "Home" : "Contact"}
        </Button>
      </Box>
    </Flex>
  );
}

export default NavBar;
