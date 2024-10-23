const express = require('express')
const app = express()
const port = 3000

const route = require("./routes/routes.js");
app.use("/api",route)

app.use(express.json( ))

app.get("/",(req,res)=>{
    console.log("main router handler ");
    console.log(req.body);
    res.send("badiya authintication check");
})











// inbuitl middleware

// 5types of middlewares
// application middleware
// routerlevel middleware
// error-handling middleware
// built-in middleware => app.use(express.json())
// third-party middlewares


// const loggingMiddleware = function(req,res,next){
//     console.log("logging in");
//     next();
// }
// app.use(loggingMiddleware)
// const authMiddleware = function(req,res,next){
//     console.log("authentication is done");
//     res.send("chalo ghar chelthe");
//     next();
// }
// app.use(authMiddleware)
// const validationMiddleware =  function(req,res,next){
//     console.log("validating...");
//     next();
    
// }
// app.use(validationMiddleware)
// app.get('/', loggingMiddleware ,(req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})