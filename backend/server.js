// importing
import express from "express";
// app cponfig
const app = express();
const port = process.env.PORT || 9000;

// middle ware

// DB config

// ????

// api roputes
app.get('/',(req,res) => res.status(200).send("Hello World") )

// listener
app.listen(port,() => console.log(`listening on local host: ${port}`));