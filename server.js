const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { initWebSocketService, subscribeClient } = require('./services/websocketService');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected to WebSocket server');
  subscribeClient(ws);
  ws.on('close', () => console.log('Client disconnected from WebSocket server'));
});

wss.on('error', (error) => {
  console.error('WebSocket server error:', error);
});

// Initialize WebSocket service
initWebSocketService();

const PORT = process.env.PORT || 8081; // Use any port other than 5000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});