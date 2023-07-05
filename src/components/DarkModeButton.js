import { Box, Button, Image, useColorMode } from "@chakra-ui/react";
import React from 'react';
import SUN_FILL from './Images/Sun_fill.png'; 
import MOON_FILL from './Images/Moon_fill.png'; 
import { lightTheme, darkTheme } from '../constants/themes';

function DarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <Box
      as={Button}
      border="unset"
      width="fit-content"
      height="fit-content"
      fontWeight="bold"
      cursor="pointer"
      color={theme.text}
      borderRadius="20px"
      backgroundColor={theme.backgroundSecond}
      transition="all 0.2s ease"
      _hover={{ filter: theme.hoverFilter }}
      _active={{ filter: theme.activeFilter }}
      onClick={toggleColorMode}
    >
      <Image
        boxSize="26px"
        src={isDark ? SUN_FILL : MOON_FILL}
        alt="Dark mode toggle"
        filter={isDark ? "none" : "invert(0.5)"} 
      />
    </Box>
  );
}

export default DarkModeButton;
