import { Box, Heading, Text, Spinner, VStack, Alert, AlertIcon } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const RealTime = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      // Simulate an error
      const fetchData = Math.random() > 0.5;
      if (fetchData) {
        setLoading(false);
      } else {
        setError("Failed to fetch real-time data. Please try again later.");
        setLoading(false);
      }
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
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      ) : (
        <Text>Display real-time data here.</Text>
      )}
    </Box>
  );
};

export default RealTime;