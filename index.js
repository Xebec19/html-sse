const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// SSE route
app.get("/sse", (req, res) => {
  // Set headers for SSE
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Send SSE events
  const sendSSE = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  // Example SSE event (replace with your own logic)
  setInterval(() => {
    const event = new Date().toISOString();
    sendSSE(event);
  }, 1000);
});

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
