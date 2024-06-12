import { Box, Heading, Text, Spinner, VStack, Alert, AlertIcon, Button } from "@chakra-ui/react";
import { ErrorBoundary } from 'react-error-boundary';
import { useState, useEffect } from "react";
import { useWebSocket } from "../hooks/useWebSocket";

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

  const { ws, setupWebSocket, closeWebSocket } = useWebSocket({
    onOpen: () => {
      console.log('WebSocket connection established');
      ws.send('subscribe'); // Send a subscribe message to the server
    },
    onMessage: (event) => {
      console.log('Received message from WebSocket:', event.data);
      setData(event.data);
      setLoading(false);
    },
    onError: (event) => {
      console.error('WebSocket error:', event.message);
      setError(`WebSocket connection error: ${event.message}. Please try again later.`);
      setLoading(false);
    },
    onClose: () => {
      console.log('WebSocket connection closed');
      setError("WebSocket connection closed. Please try again later.");
      setLoading(false);
    }
  });

  useEffect(() => {
    setupWebSocket();
    return () => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        closeWebSocket(); // Clean up the WebSocket connection when the component unmounts
      }
    };
  }, [ws, setupWebSocket, closeWebSocket]);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    setData(null);
    closeWebSocket();
    setupWebSocket();
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