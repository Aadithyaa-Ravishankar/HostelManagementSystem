import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS for all requests
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from HostelMate Backend!');
});

app.listen(PORT, () => {
  console.log(`⁠ Server is running on http://localhost:${PORT}`);
});
