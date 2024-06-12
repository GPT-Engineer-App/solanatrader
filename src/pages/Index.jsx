import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Welcome to the Solana Meme Coin Trading Bot</Text>
        <Text textAlign="center">Navigate through the dashboard, set your trading parameters, and monitor real-time data.</Text>
        <Button as={RouterLink} to="/dashboard" colorScheme="teal" size="lg" mt={4}>
          Go to Dashboard
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;