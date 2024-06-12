import { Box, Heading, Text, Spinner, VStack, Alert, AlertIcon } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Dashboard = () => {
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
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    }, 2000);
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>Dashboard</Heading>
      {loading ? (
        <VStack spacing={4}>
          <Spinner size="xl" />
          <Text>Loading your trades...</Text>
        </VStack>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      ) : (
        <Text>Monitor your trades here.</Text>
      )}
    </Box>
  );
};

export default Dashboard;