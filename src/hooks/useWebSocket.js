import { useState, useCallback } from 'react';

export const useWebSocket = (config) => {
  const [ws, setWs] = useState(null);

  const setupWebSocket = useCallback(() => {
    const websocket = new WebSocket(config.url);
    websocket.onopen = () => {
      console.log('WebSocket connection established');
      config.onOpen();
    };
    websocket.onmessage = (event) => {
      console.log('Received message from WebSocket:', event.data);
      config.onMessage(event);
    };
    websocket.onerror = (event) => {
      console.error('WebSocket error:', event.message);
      config.onError(event);
    };
    websocket.onclose = () => {
      console.log('WebSocket connection closed');
      config.onClose();
    };
    setWs(websocket);
  }, [config]);

  const closeWebSocket = useCallback(() => {
    if (ws) {
      console.log('Closing WebSocket connection');
      ws.close();
    }
  }, [ws]);

  return { ws, setupWebSocket, closeWebSocket };
};