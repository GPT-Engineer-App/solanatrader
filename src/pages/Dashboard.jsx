import { Box, Heading, Text, Spinner, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
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
      ) : (
        <Text>Monitor your trades here.</Text>
      )}
    </Box>
  );
};

export default Dashboard;