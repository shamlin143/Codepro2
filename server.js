const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || 8080;
// Route requires
const user = require('./routes/user');
const project = require('./routes/project');
const path = require('path');

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)



// Configuration
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false}));
// app.use('/', routes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
  }

//   app.get('*');
// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
// app.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "client/public/index.html"));
// 	});



app.use('/user', user)
app.use('/project', project)

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://DBuser5:Bonus1@ds243717.mlab.com:43717/heroku_j7j6tlfq", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  }
//   );


// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
