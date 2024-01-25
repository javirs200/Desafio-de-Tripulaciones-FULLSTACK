require('dotenv').config();
const helmet = require('helmet');
const express = require('express');
const error404 = require('./middleware/error404')
// const morgan = require('morgan')
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

//routers
const userRoutes = require('./routes/users.routes')
const loginRoutes = require('./routes/login.routes')
const preciosRoutes = require('./routes/precios.routes')
const sipsRoutes = require('./routes/sips.routes')


//DB conection Startup
const database = require('./config/db_pgsql')
database.connectSQL();

// const corsOptions ={
//   origin:'https://cloudbuilds-client-folgybvrpq-ew.a.run.app', 
//   credentials:true,           
//   optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
// app.use(morgan('combined'))

app.use('/api/users',userRoutes)

app.use('/api/login',loginRoutes)

app.use('/api/precios',preciosRoutes)

app.use('/api/sips',sipsRoutes)

app.use('/api/*',error404);
  
app.listen(port, () => {
    console.log(`listening on port:${port}`);
  });
  
module.exports = {app}