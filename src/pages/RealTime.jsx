<<<<<<< HEAD
import { Box, Heading, Text, Spinner, VStack, Alert, AlertIcon } from "@chakra-ui/react";
=======
import { Box, Heading, Text, Spinner, VStack, Alert, AlertIcon, Button } from "@chakra-ui/react";
import { ErrorBoundary } from 'react-error-boundary';
>>>>>>> main
import { useState, useEffect } from "react";
<<<<<<< HEAD
import { useWebSocket } from "../hooks/useWebSocket";
=======
import { fetchRealTimeData } from "../services/realTimeDataService";
>>>>>>> 5ed110b345cdaf264c30a9fd76d32ef202985ecd

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
<<<<<<< HEAD

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
=======
  const [data, setData] = useState(null);

  const { ws, setupWebSocket, closeWebSocket } = useWebSocket({
    url: 'wss://api.mainnet-beta.solana.com/', // WebSocket URL
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
<<<<<<< HEAD
    setupWebSocket();
    return () => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        closeWebSocket(); // Clean up the WebSocket connection when the component unmounts
      }
    };
  }, [ws, setupWebSocket, closeWebSocket]);
=======
    const getData = async () => {
      try {
        const realTimeData = await fetchRealTimeData();
        setData(realTimeData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch real-time data. Please try again later.");
        setLoading(false);
      }
    };

    getData();
>>>>>>> main
  }, []);
>>>>>>> 5ed110b345cdaf264c30a9fd76d32ef202985ecd

  const handleRetry = () => {
    setLoading(true);
    setError(null);
<<<<<<< HEAD
    setData(null);
    closeWebSocket();
    setupWebSocket();
=======
    const getData = async () => {
      try {
        const realTimeData = await fetchRealTimeData();
        setData(realTimeData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch real-time data. Please try again later.");
        setLoading(false);
      }
    };

    getData();
>>>>>>> 5ed110b345cdaf264c30a9fd76d32ef202985ecd
  };

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> main
  );
};

export default RealTime;