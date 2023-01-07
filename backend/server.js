import express from "express";
import https from "https"
// import fs from "fs"


const app = express()
// const useRouter = require('./routes/user.routes')
import router from './routes/user.routes.js'

const PORT = process.env.PORT || 3000
// console.log(https)

import os from "os"
console.log("Home directory:" + os.homedir())

app.use(express.static('dist'));

app.get("/help", (req, res) => {
	res.send("Here is some HELP")
})

app.use(express.json())

// Middelware, voor alle /api/* request
app.all('/api/*', function(req, res, next) 
{
  // Set respons header (geen idee of dit compleet is)
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers","X-Requested-With,Content-type,Accept,X-Access-Token,X-Key");

  // Set response contenttype
  res.contentType('application/json');

  next();
});
app.use('/api', router)

app.get('/*', (req, res) => {
	res.send('НИЧЕГО НЕ НАЙДЕНО!!!')
})

app.listen(PORT, () => {
	console.log("Started api service on port: " + PORT)
  console.log("Current directory:", process.cwd())
})

// https.createServer({
//   key: fs.readFileSync(process.cwd() + "\\key.pem"),
//   cert: fs.readFileSync(process.cwd() + "\\cert.pem"),
//   passphrase: 'Hello Brat'
// }, app).listen(PORT, () => {
//   console.log("Started api service on port: " + PORT)
//   console.log("Current directory:", process.cwd())
// })
