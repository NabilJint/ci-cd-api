const express = require("express");
const app = express();

// Health check endpoint - confirms the server is running
app.get("/health", (req, res) => {
  res
    .status(200)
    .json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Status endpoint - returns service information
app.get("/api/status", (req, res) => {
  res.status(200).json({
    service: "ci-cd-api",
    version: "1.0.0",
    uptime: process.uptime(),
  });
});

app.get("/api/info", (req, res) => {
  res.status(200).json({
    nodeVersion: process.version,
    platform: process.platform,
    memoryUsage: process.memoryUsage().heapUsed,
  });
});

module.exports = app;
