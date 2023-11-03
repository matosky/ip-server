const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const userIpAddress = req.ip;
  res.send(`User IP address: ${userIpAddress}`);
});

app.listen(3000);
