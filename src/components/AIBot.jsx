import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import { HuggingFace } from "huggingface";

const AIBot = () => {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const strategies = [
    "Strategy 1: Analyze historical price patterns for potential swing trades.",
    "Strategy 2: Monitor social media sentiment for emerging trends."
  ];

  const analyzeProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const hf = new HuggingFace();
      const result = await hf.analyze({
        model: "distilbert-base-uncased",
        strategies: strategies
      });
      setAnalysis(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>AI Bot Analysis</Heading>
      <Text mb={4}>Use the AI bot to analyze projects for swing trading potential.</Text>
      <Button onClick={analyzeProjects} colorScheme="teal" mb={4}>
        Analyze Projects
      </Button>
      {loading && <Text>Loading analysis...</Text>}
      {error && <Text color="red.500">{error}</Text>}
      {analysis && (
        <VStack spacing={4}>
          <Text>Analysis Results:</Text>
          <Text>{JSON.stringify(analysis)}</Text>
        </VStack>
      )}
    </Box>
  );
};

export default AIBot;