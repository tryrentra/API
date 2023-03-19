const express = require('express');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const MDB = require("./config/mongoDBConnection")
const rentra = require("./routes/rentra")
// set up rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body Parser Stuff
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// set up logging middleware with Morgan
app.use(morgan('combined'));

// set up security middleware with Helmet
app.use(helmet());

// set up CORS middleware
app.use(cors());

//Routes Configured
app.use("/api",rentra)

//Cookie Parser
app.use(cookieParser())
//Connection OF MDB(MongoDB)
MDB()
// set up routes
app.get('/', (req, res) => {
  res.send('Rentra, Rent Anything!');
});

// start the server
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
