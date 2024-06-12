import { Container, Text, VStack, Button, Box, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box
      backgroundImage="url('/images/background.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="rgba(0, 0, 0, 0.5)" />
      <Container centerContent maxW="container.md" bg="rgba(255, 255, 255, 0.8)" p={8} borderRadius="md" zIndex="1">
        <VStack spacing={4}>
          <Heading as="h1" size="xl" textAlign="center" color="white">Welcome to the Solana Meme Coin Trading Bot</Heading>
          <Text fontSize="lg" textAlign="center" color="white">Navigate through the dashboard, set your trading parameters, and monitor real-time data.</Text>
          <Text textAlign="center" color="gray.300">This application helps you trade meme coins on the Solana blockchain with ease and efficiency.</Text>
          <Button as={RouterLink} to="/dashboard" colorScheme="teal" size="lg" mt={4}>
            Go to Dashboard
          </Button>
          <Button as={RouterLink} to="/about" colorScheme="teal" size="lg" mt={4}>
            Learn More About Us
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;