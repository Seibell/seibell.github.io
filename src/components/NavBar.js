import { Box, Button, Flex, useColorMode, Spacer } from "@chakra-ui/react";
import { lightTheme, darkTheme } from '../constants/themes';

function NavBar() {
  const { colorMode } = useColorMode();
  const theme = colorMode === 'dark' ? darkTheme : lightTheme;

  return (
    <Flex bg={theme.navBarBackground} p={4} alignItems="center" fontSize="xl">
      <Box>
        <Button
          as="a"
          href="https://seibell.github.io/resume"
          variant="link"
          color={theme.text}
          mr={4}
          ml={16}
          size="xl"
        >
          Resume
        </Button>
        <Button
          as="a"
          href="https://seibell.github.io/"
          variant="link"
          color={theme.text}
          mr={4}
          ml={4}
          size="xl"
        >
          Projects
        </Button>
        <Button
          as="a"
          href="https://seibell.github.io/"
          variant="link"
          color={theme.text}
          mr={16}
          ml={4}
          size="xl"
        >
          Contact
        </Button>
      </Box>

      <Spacer />
    </Flex>
  );
}

export default NavBar;
