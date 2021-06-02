exports.insertData=(dbName,mycollection,myinsertData)=>{
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');
    // Connection URL
    const url = 'mongodb://localhost:27017';
    // Database Name
    //const dbName = 'mydb';
    // Create a new MongoClient
    const client = new MongoClient(url,{ useUnifiedTopology: true });
    // Use connect method to connect to the Server
    client.connect(function(err) {
      //assert.equal(null, err);
      if(err) console.log('Connect fail!')
      else console.log("Connected successfully to server");
      const db = client.db(dbName);
      //const collection = db.collection(insertCollectionName);
      const collection = db.collection(mycollection);
      // Insert some documents
      collection.insertMany(myinsertData, function(err, result) {
        if(err) console.log("Inserte fail!")
        else console.log("Inserted successfully into the collection");
        //callback(result);
        console.log(result);
        client.close();
      });
      //client.close();
    });
  }

  exports.myinsert=(dbName,mycollection,insertData)=>{
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');
    // Connection URL
    const url = 'mongodb://localhost:27017';
    // Database Name
    //const dbName = 'mydb';
    // Create a new MongoClient
    const client = new MongoClient(url,{ useUnifiedTopology: true });
    // Use connect method to connect to the Server
    client.connect(function(err) {
      //assert.equal(null, err);
      if(err) console.log('Connect fail!')
      else console.log("Connected successfully to server");
      const db = client.db(dbName);
      const collection = db.collection(mycollection);
      // Insert some documents
      collection.insertMany(insertData, function(err, result) {
        if(err) console.log("Inserte fail!")
        else console.log("Inserted 3 documents into the collection");
        console.log(result);
        client.close();
      });
      //client.close();
    });
   }
    
  