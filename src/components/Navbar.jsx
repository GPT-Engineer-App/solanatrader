import { Box, Flex, Link, Spacer, Text, Image, Button } from "@chakra-ui/react";
import About from "../pages/About.jsx";
import { Link as RouterLink } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const linkStyles = {
    color: "white",
    mx: 3,
    _hover: { textDecoration: "none", color: "teal.300" }
  };

  return (
    <Box bg="teal.500" px={4} py={2} w="100%" maxW="1200px" mx="auto">
      <Flex align="center" wrap="wrap">
        <Image src="/images/logo.png" alt="Logo" boxSize="40px" mr={4} />
        <Text fontSize="md" color="white" ml={4}>
          Your go-to platform for trading Solana meme coins efficiently.
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="white">
          Solana Meme Coin Trading Bot
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" {...linkStyles}>
            Home
          </Link>
          <Link as={RouterLink} to="/dashboard" {...linkStyles}>
            Dashboard
          </Link>
          <Link as={RouterLink} to="/parameters" {...linkStyles}>
            Parameters
          </Link>
          <Link as={RouterLink} to="/realtime" {...linkStyles}>
            Real-Time Data
          </Link>
          <Link as={RouterLink} to="/about" {...linkStyles}>
            About
          </Link>
          <Link as={RouterLink} to="/ai-bot" {...linkStyles}>
            AI Bot
          </Link>
          <Button onClick={toggleColorMode} ml={4} colorScheme="teal">
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;