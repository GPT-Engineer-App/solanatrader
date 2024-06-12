import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Solana Meme Coin Trading Bot</Text>
        <Text>Navigate through the dashboard, set your trading parameters, and monitor real-time data.</Text>
      </VStack>
    </Container>
  );
};

export default Index;