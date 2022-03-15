import mongodb from 'mongodb';

export default {
  "port": 3005,
  "mongoUrl": "mongodb://localhost:27017/chat-api",
  //"port": process.env.PORT,
  //"mongoUrl": "mongodb://davidchhetri:toronto@cluster0.3y6ar.mongodb.net/chattychatdb?retryWrites=true&w=majority",
  "bodyLimit": "100kb"
}
