//http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/

/*
nodejs操作mongodb数据库
 1.安装mongodb、
    cnpm install mongodb --save

 2.引入mongodb下面的MongoClient
    var MongoClient = require('mongodb').MongoClient;

 3.定义数据库连接的地址 以及配置数据库
    qianfeng数据库的名称
    var url = 'mongodb://localhost:27017/';
    var dbName = 'shop'

 4.nodejs连接数据库
 MongoClient.connect(url,function(err,client){
        const db = client.db(dbName);  数据库db对象
 })

5.操作数据库
	 MongoClient.connect(url,function(err,client){
			const db = client.db(dbName);  数据库db对象
			MongoClient.connect(url,function(err,db){
				db.collection('user').insertOne({"name":"张三"},function(err,result){
					db.close() //关闭连接
				})
		     })
	 })
*/

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://fengOwner:feng@114.67.89.253:40017/';

// Database Name
const dbName = 'feng';

// Use connect method to connect to the server
MongoClient.connect(url,{useNewUrlParser: true , useUnifiedTopology: true } , function (err, client) {
  // assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  console.log(db)
  console.log(db)

  insertDocuments(db, function (result) {
    console.log(result)
    findDocuments(db, function (result2) {
      console.log(result2)
      updateDocument(db, function (result3) {
        console.log(result3)
        removeDocument(db, function (result4) {
          console.log(result4)
          client.close();
        });
      });
    });
  });
});

const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  //insertOne insertMany
  collection.insertMany([
    { a: 1 }, { a: 2 }, { a: 3 }
  ], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({ "a": 1 }).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    //console.log(docs)
    callback(docs);
  });
}


const updateDocument = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  //updateMany updateOne
  collection.updateMany({ a: 2 }
    , { $set: { b: 1 } }, function (err, result) {
      assert.equal(err, null);
      //assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });
}

const removeDocument = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Delete document where a is 3
  // deleteOne deleteMany
  collection.deleteMany({ a: 3 }, function (err, result) {
    assert.equal(err, null);
    // assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
}