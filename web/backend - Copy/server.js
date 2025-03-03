const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // JSON
const mongoose = require('mongoose');  // to connect mongodb schema
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = 5000;
const DB_URI = 'mongodb://localhost:27017/authentication'; //mongodb compass
const StudentData = require('./models/StudentData'); // Add this line

app.use(cors());
app.use(bodyParser.json()); //JSON

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

app.use('/', authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));