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
    >
      <Container centerContent maxW="container.md" bg="rgba(255, 255, 255, 0.8)" p={8} borderRadius="md">
      <VStack spacing={4}>
          <Heading as="h1" size="xl" textAlign="center">Welcome to the Solana Meme Coin Trading Bot</Heading>
          <Text fontSize="lg" textAlign="center">Navigate through the dashboard, set your trading parameters, and monitor real-time data.</Text>
          <Text textAlign="center" color="gray.600">This application helps you trade meme coins on the Solana blockchain with ease and efficiency.</Text>
          <Button as={RouterLink} to="/dashboard" colorScheme="teal" size="lg" mt={4}>
            Go to Dashboard
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;