const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({ okay: true });
});

app.listen(8080, '0.0.0.0', () => console.log('Server okay'));
