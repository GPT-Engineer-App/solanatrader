<<<<<<< HEAD
import { Box, Heading, Text, Spinner, VStack, Alert, AlertIcon } from "@chakra-ui/react";
=======
import { Box, Heading, Text, Spinner, VStack, Alert, AlertIcon, Button } from "@chakra-ui/react";
import { ErrorBoundary } from 'react-error-boundary';
>>>>>>> main
import { useState, useEffect } from "react";
import { analyzeProjects, loadAdvancedStrategies } from "../services/aiBotService";

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <Box role="alert">
    <Text>Something went wrong:</Text>
    <Text>{error.message}</Text>
    <Button onClick={resetErrorBoundary}>Try again</Button>
  </Box>
);

const Dashboard = () => {
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
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    }, 2000);
=======
  const [data, setData] = useState(null);
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const projectData = await analyzeProjects();
        const strategyData = await loadAdvancedStrategies();
        setData(projectData);
        setStrategies(strategyData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };

    getData();
>>>>>>> main
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    const getData = async () => {
      try {
        const projectData = await analyzeProjects();
        const strategyData = await loadAdvancedStrategies();
        setData(projectData);
        setStrategies(strategyData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };

    getData();
  };

  return (
<<<<<<< HEAD
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
=======
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Box p={4}>
        <Heading mb={4}>Dashboard</Heading>
        <Text mb={4}>View and manage your trades on the Solana blockchain.</Text>
        {loading ? (
          <VStack spacing={4}>
            <Spinner size="xl" thickness="4px" speed="0.65s" color="teal.500" />
            <Text>Loading your trades...</Text>
          </VStack>
        ) : error ? (
          <VStack spacing={4}>
            <Alert status="error" variant="left-accent">
              <AlertIcon />
              {error}
            </Alert>
            <Button onClick={handleRetry} colorScheme="teal" variant="solid">
              Retry
            </Button>
          </VStack>
        ) : (
          <VStack spacing={4}>
            <Text>{data}</Text>
            <Heading size="md">Advanced Strategies</Heading>
            {strategies.map((strategy, index) => (
              <Text key={index}>{strategy}</Text>
            ))}
          </VStack>
        )}
      </Box>
    </ErrorBoundary>
>>>>>>> main
  );
};

export default Dashboard;