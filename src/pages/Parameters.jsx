import { Box, Heading, Text, FormControl, FormLabel, Input, Button, VStack, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";

const Parameters = () => {
  const [parameters, setParameters] = useState({
    param1: "",
    param2: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParameters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    if (parameters.param1 === "" || parameters.param2 === "") {
      setError("All parameters are required.");
    } else {
      setError(null);
      console.log("Parameters submitted:", parameters);
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Trading Parameters</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          <FormControl id="param1">
            <FormLabel>Parameter 1</FormLabel>
            <Input name="param1" value={parameters.param1} onChange={handleChange} />
          </FormControl>
          <FormControl id="param2">
            <FormLabel>Parameter 2</FormLabel>
            <Input name="param2" value={parameters.param2} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg">
            Save Parameters
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Parameters;