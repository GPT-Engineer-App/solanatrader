import { Box, Heading, Text, Spinner, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const RealTime = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>Real-Time Data</Heading>
      {loading ? (
        <VStack spacing={4}>
          <Spinner size="xl" />
          <Text>Loading real-time data...</Text>
        </VStack>
      ) : (
        <Text>Display real-time data here.</Text>
      )}
    </Box>
  );
};

export default RealTime;