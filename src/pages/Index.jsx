import { Container, Text, VStack, Button, Box } from "@chakra-ui/react";
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
        <Text fontSize="2xl" fontWeight="bold">Welcome to the Solana Meme Coin Trading Bot</Text>
        <Text textAlign="center">Navigate through the dashboard, set your trading parameters, and monitor real-time data.</Text>
        <Button as={RouterLink} to="/dashboard" colorScheme="teal" size="lg" mt={4}>
          Go to Dashboard
        </Button>
      </VStack>
    </Container>
    </Box>
  );
};

export default Index;