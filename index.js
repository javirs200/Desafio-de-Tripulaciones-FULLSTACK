require('dotenv').config();
const helmet = require('helmet');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

//rutas de api para login
// app.use('/users', usersRouter)
//* Serve static assets in production, must be at this location of this file
// if (process.env.NODE_ENV === 'production') {
//     //*Set static folder
//     app.use(express.static('client/build'));
  
//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
//   }

app.listen(port, () => {
    console.log(`listening on port:${port}`);
  });
  
module.exports = {app}



