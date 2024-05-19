const express = require('express');
const app = express();

// Endpoint to fetch metadata for the gallery page
app.get('/api/gallery-metadata', (req, res) => {
  // Simulated data for demonstration purposes
  const metadata = {
    title: "Gallery Page | ScaleUP Event and Exhibition",
    description: "This is Gallery Page for ScaleUP Event and Exhibition",
    // other metadata
  };

  res.json(metadata);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});