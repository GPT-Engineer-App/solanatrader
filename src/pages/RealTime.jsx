import { Box, Heading, Text, Spinner, VStack, Alert, AlertIcon, Button } from "@chakra-ui/react";
import { ErrorBoundary } from 'react-error-boundary';
import { useState, useEffect } from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <Box role="alert">
    <Text>Something went wrong:</Text>
    <Text>{error.message}</Text>
    <Button onClick={resetErrorBoundary}>Try again</Button>
  </Box>
);

const RealTime = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      // Simulate an error
      const fetchData = Math.random() > 0.5;
      if (fetchData) {
        setData("Real-time data goes here.");
        setLoading(false);
      } else {
        setError("Failed to fetch real-time data. Please try again later.");
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
        setData("Real-time data goes here.");
        setLoading(false);
      } else {
        setError("Failed to fetch real-time data. Please try again later.");
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Box p={4}>
        <Heading mb={4}>Real-Time Data</Heading>
        <Text mb={4}>Monitor real-time data for your trades on the Solana blockchain.</Text>
        {loading ? (
          <VStack spacing={4}>
            <Spinner size="xl" thickness="4px" speed="0.65s" color="teal.500" />
            <Text>Loading real-time data...</Text>
          </VStack>
        ) : error ? (
          <VStack spacing={4}>
            <Alert status="error" borderRadius="md" boxShadow="md">
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
    </ErrorBoundary>
  );
};

export default RealTime;