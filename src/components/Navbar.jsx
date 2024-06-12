import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Solana Meme Coin Trading Bot
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" color="white" mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/dashboard" color="white" mx={2}>
            Dashboard
          </Link>
          <Link as={RouterLink} to="/parameters" color="white" mx={2}>
            Parameters
          </Link>
          <Link as={RouterLink} to="/realtime" color="white" mx={2}>
            Real-Time Data
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;