const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const postRoutes = require('./routes/index');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false })); // Change to urlencoded
app.use(express.static('public'));
app.use('/', postRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Database synchronization error:', error);
  });
