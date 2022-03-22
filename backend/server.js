// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

// app cponfig
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1363357",
    key: "e5de5f02e5648914f987",
    secret: "e74568f2cde296f988f4",
    cluster: "us2",
    useTLS: true
  });


// middle ware
// middleware
app.use(express.json());
app.use(cors());
// DB config

const connection_url= 'mongodb+srv://admin:UoTMZ01bpZzDRTx1@cluster0.myidr.mongodb.net/WhatsAppDB?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
    
});
// pusher
db.once("open", () => {
  console.log("DB connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("A change occured", change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("message", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});


// api roputes
app.get('/',(req,res) => res.status(200).send("Hello World") );

app.get("/messages/sync", (req, res) => {
    Messages.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });
  
  app.post("/messages/new", (req, res) => {
    const dbMessage = req.body;
    Messages.create(dbMessage, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  });

// listener
app.listen(port,() => console.log(`listening on local host: ${port}`));