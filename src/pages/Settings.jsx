import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, VStack, Alert, AlertIcon } from "@chakra-ui/react";
import { HfInference } from "@huggingface/inference";

const Settings = () => {
  const [apiKey, setApiKey] = useState("");
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [error, setError] = useState(null);

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  const handleFetchModels = async () => {
    try {
      const hf = new HfInference(apiKey);
      const response = await hf.listModels();
      setModels(response.models);
      setError(null);
    } catch (err) {
      setError("Failed to fetch models. Please check your API key.");
    }
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <FormControl id="api-key">
          <FormLabel>Hugging Face API Key</FormLabel>
          <Input type="text" value={apiKey} onChange={handleApiKeyChange} />
        </FormControl>
        <Button onClick={handleFetchModels} colorScheme="teal">
          Fetch Models
        </Button>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <FormControl id="model-selector">
          <FormLabel>Select Model</FormLabel>
          <Select placeholder="Select model" value={selectedModel} onChange={handleModelChange}>
            {models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.id}
              </option>
            ))}
          </Select>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default Settings;