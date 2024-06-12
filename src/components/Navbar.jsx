import { Box, Flex, Link, Spacer, Text, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex align="center" wrap="wrap">
        <Image src="/path/to/logo.png" alt="Logo" boxSize="40px" mr={4} />
        <Text fontSize="xl" fontWeight="bold" color="white">
          Solana Meme Coin Trading Bot
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" color="white" mx={2} _hover={{ textDecoration: "underline" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/dashboard" color="white" mx={2} _hover={{ textDecoration: "underline" }}>
            Dashboard
          </Link>
          <Link as={RouterLink} to="/parameters" color="white" mx={2} _hover={{ textDecoration: "underline" }}>
            Parameters
          </Link>
          <Link as={RouterLink} to="/realtime" color="white" mx={2} _hover={{ textDecoration: "underline" }}>
            Real-Time Data
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;