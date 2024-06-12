import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>About Solana Meme Coin Trading Bot</Heading>
        <Text>
          This application helps you trade meme coins on the Solana blockchain with ease and efficiency. Navigate through the dashboard, set your trading parameters, and monitor real-time data.
        </Text>
        <Image src="/images/about-image.jpg" alt="About Image" borderRadius="md" />
      </VStack>
    </Box>
  );
};

export default About;