// importing
import express from "express";
import mongoose from "mongoose";

// app cponfig
const app = express();
const port = process.env.PORT || 9000;

// middle ware

// DB config

const connection_url= 'mongodb+srv://admin:UoTMZ01bpZzDRTx1@cluster0.myidr.mongodb.net/WhatsAppDB?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
    
});
// ????

// api roputes
app.get('/',(req,res) => res.status(200).send("Hello World") )

// listener
app.listen(port,() => console.log(`listening on local host: ${port}`));