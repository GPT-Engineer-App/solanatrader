const WebSocket = require('ws');

const subscribers = new Set();
let ws;

const connectWebSocket = () => {
  ws = new WebSocket('wss://api.mainnet-beta.solana.com/');

  ws.on('open', () => {
    console.log('WebSocket connection established');
    // Subscribe to specific assets if the API requires so
    // ws.send(JSON.stringify({ subscribe: 'solana' }));
  });

  ws.on('message', (data) => {
    console.log('Received message from WebSocket:', data);
    // Broadcast to all subscribed clients
    subscribers.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
    ws.close();
  });

  ws.on('close', () => {
    console.log('WebSocket closed. Attempting to reconnect...');
    setTimeout(connectWebSocket, 10000); // Reconnect after 10 seconds
  });
};

const subscribeClient = (client) => {
  subscribers.add(client);
  console.log('Client subscribed to WebSocket updates');
  client.on('close', () => {
    subscribers.delete(client);
    console.log('Client unsubscribed from WebSocket updates');
  });
};

const initWebSocketService = () => {
  connectWebSocket();
};

module.exports = { initWebSocketService, subscribeClient };