
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let price = 100;

app.get('/', (req, res) => {
  res.send('Paper Trading API is running');
});

app.get('/api/price', (req, res) => {
  const movement = (Math.random() - 0.5) * 2; // Simulate price fluctuation
  price = parseFloat((price + movement).toFixed(2));
  res.json({ price });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
