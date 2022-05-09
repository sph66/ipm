const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 4044;

const { inventoryResource } = require('./inventory');

app.use(cors());
app.use(bodyParser.json());

inventoryResource(app);

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
