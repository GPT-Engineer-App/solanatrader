import { Box, Heading, Text, Spinner, VStack, Alert, AlertIcon, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      // Simulate an error
      const fetchData = Math.random() > 0.5;
      if (fetchData) {
        setData("Your trade data goes here.");
        setLoading(false);
      } else {
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    }, 2000);
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    // Retry fetching data
    setTimeout(() => {
      const fetchData = Math.random() > 0.5;
      if (fetchData) {
        setData("Your trade data goes here.");
        setLoading(false);
      } else {
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Dashboard</Heading>
      {loading ? (
        <VStack spacing={4}>
          <Spinner size="xl" />
          <Text>Loading your trades...</Text>
        </VStack>
      ) : error ? (
        <VStack spacing={4}>
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
          <Button onClick={handleRetry} colorScheme="teal">
            Retry
          </Button>
        </VStack>
      ) : (
        <Text>{data}</Text>
      )}
    </Box>
  );
};

export default Dashboard;