const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const contactsRoutes = require('./contacts/routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/contacts', contactsRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});