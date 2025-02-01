const express = require("express");
const helmet = require("helmet");

const app = express();

// Basic configuration with recommended defaults
app.use(helmet());

// Custom CSP configuration
const cspConfig = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-eval'",
      "https://cdn.jsdelivr.net",
      "https://cdnjs.cloudflare.com",
    ],
    styleSrc: ["'self'", "https://cdnjs.cloudflare.com"],
    imgSrc: [
      "'self'",
      "data:",
      "https://fastly.picsum.photos",
      "https://picsum.photos",
    ],
    fontSrc: ["'self'", "data:", "https://cdnjs.cloudflare.com"],
    connectSrc: ["'self'"],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: null, // Disable auto-upgrade
  },
};

// Apply custom CSP configuration
app.use(helmet.contentSecurityPolicy(cspConfig));

app.use("/", express.static("public"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
