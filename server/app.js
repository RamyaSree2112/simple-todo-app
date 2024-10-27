const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/tasks', taskRoutes);

sequelize.sync().then(() => {
  console.log('Database connected');
  app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
  });
}).catch(error => {
  console.error('Database connection failed:', error);
});
