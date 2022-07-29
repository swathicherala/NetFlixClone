const express=require('express');
const app=express();
const port=process.env.PORT || 3000
require('./db/conn');
const router=require('./router/movies');
// const router1=require('./router/searchmovies')
// const router2=require('./router/signup')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cors=require("cors");
const morgan=require('morgan');
const bodyParser=require('body-parser');

app.use(cors())
app.use(morgan('tiny'));
app.use(bodyParser.json())

dotenv.config();



app.use(express.json());

app.use(router)
// app.use(router1)
// app.use(router2)

// Jwt post

// app.post("/user/generateToken", (req, res) => {
//     // Validate User Here
//     // Then generate JWT Token
  
//     let jwtSecretKey = process.env.JWT_SECRET_KEY;
//     let data = {
//         time: Date(),
//         userId: 12,
//     }
  
//     const token = jwt.sign(data, jwtSecretKey);

// 	const email = req.body.email
//     const password = req.body.password
//     if (!email || !password) return res.status(400).json({type: 'error', message: 'email and password fields are essential for authentication.'})
  
//     res.send(token);
// });

// app.get("/user/validateToken", (req, res) => {
// 	// Tokens are generally passed in the header of the request
// 	// Due to security reasons.

// 	let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
// 	let jwtSecretKey = process.env.JWT_SECRET_KEY;

// 	try {
// 		const token = req.header(tokenHeaderKey);

// 		const verified = jwt.verify(token, jwtSecretKey);
// 		if(verified){
// 			return res.send("Successfully Verified");
// 		}else{
// 			// Access Denied
// 			return res.status(401).send(error);
// 		}
// 	} catch (error) {
// 		// Access Denied
// 		return res.status(401).send(error);
// 	}
// });

// app.post('/login', (req, res) => {
//     const email = req.body.email
//     const password = req.body.password
//     if (!email || !password) return res.status(400).json({type: 'error', message: 'email and password fields are essential for authentication.'})
//   })

// app.get('/auth/user', (req, res, next) => {
//     /*
//     const { login, password } = req.body;
//     console.log(`User load attempt: login: ${login} password: ${password}`);
//     return db.User.findByLogin(login, password)
//         .then(user => {
//             if (user) {
//                 console.log(`User ${login} loaded successfully.`);
//                 return res.send(user);
//             }
//         })
//         .catch(err => {
//             console.log(`[ERROR; SQL]: User: ${err}`)
//             return res.send(err)
//         });
//     */
// 		// const token = req.headers['token']
// 		// if (!token) return res.status(400).json({type: 'error', message: 'x-access-token header not found.'})
//     res.json({ user: req.user })
// })

// Jwt post end

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
	  "Access-Control-Allow-Methods",
	  "OPTIONS, GET, POST, PUT, PATCH, DELETE"
	);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
  });

  app.use((error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({ message: message, data: data });
  });
  
app.listen(port,()=>{
    console.log(`App is running on port:${port}`)
})