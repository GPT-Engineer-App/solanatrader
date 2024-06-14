import { HfInference } from '@huggingface/inference';

let hf;

export const setApiKey = (key) => {
  hf = new HfInference(key);
};

export const analyzeProjects = async () => {
  if (!hf) {
    throw new Error('API key not set');
  }

  const response = await hf.textGeneration({
    model: 'gpt-3.5-turbo',
    inputs: 'Analyze Solana projects for swing trading potential.',
  });

  if (!response.ok) {
    throw new Error('Failed to analyze projects');
  }

  const data = await response.json();
  return data;
};

export const loadAdvancedStrategies = async () => {
  if (!hf) {
    throw new Error('API key not set');
  }
  const strategies = [
    'Strategy 1: Buy low, sell high',
    'Strategy 2: Monitor market trends',
    'Strategy 3: Diversify investments',
  ];

  return strategies;
};