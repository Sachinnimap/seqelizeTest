const { ObjectId } = require("mongodb");
const { getDB } = require("../../config/mdatabase");

const createBook = async (req, res) => {
  const { name, author, publisedBy, releaseDate } = req.body;
  const db = getDB();
  const books = await db.collection("book").insertOne({
    name,
    author,
    publisedBy,
    releaseDate,
  });

  //     const books =  await db.collection("book").insertMany([{
  //         name,author,publisedBy,releaseDate
  //     },
  //     {name : `${name}1`,auther :`${author}1`,publisedBy : `${publisedBy}1`,releaseDate : `${releaseDate}1`},
  //      {name : `${name}2`,auther :`${author}2`,publisedBy : `${publisedBy}2`,releaseDate : `${releaseDate}2`}
  // ])

  res.status(201).json(books);
};

const getBooks = async (req, res) => {
  const db = getDB();
  // const response = await db.collection("book").find({},{projection : {author:0}}).toArray();

  // name = 1 - ASSENDING  and name = -1  - DESSENDING
  // const response =   await db.collection("book").find().sort({_id:-1}).toArray()

  // const response = await db.collection("book").find().skip(0).limit(10).toArray() //we get page 2

  //skip(10).limit(10) will skip 10 docs and give only 10 documents as per limit!
  const pageNo = 1;
  const perPage = 50;
  // const response = await db.collection("book").find({age: {$gt : 18}}).toArray()
  const response = await db
    .collection("book")
    // .find({ age: { $lt: 18 } }) //$gt : 18
    // .find({age : {$lte : 18}}) //$lte  // it will also include 18
    // .find({age :{$ne : 18}})// neq
    // .find({age: { $nin : [18,9,2]}})
    // .find({$and : [{age : {$gt  : 18}},{name : {$eq  : "sachin"}}]})
    // .find({$or : [{age : {$lt :18}}, {name : {$eq : "sachin"}}]})
    // .find({age : {$exists : true}})
        // .find({age: {$not : {$lt : 25}}})
    // .find({name : {$regex : 'n$',$options: "i"}}) //startWith : ^sa // EndWith : in$
    .toArray();
  // .skip((pageNo - 1) * perPage).limit(perPage).toArray()
  res.status(200).json(response);
};

const getBooksById = async (req, res) => {
  const db = getDB();
  const id = req.params.id;

  const response = await db
    .collection("book")
    .findOne({ _id: new ObjectId(id) });

  res.status(200).json(response);
};

const updateBook = async (req, res) => {
  const db = getDB();
  const { name, email, password,age } = req.body;
  console.log("req.params.id", req.params.id);
  console.log("email", email);
  console.log("name ", name);
  console.log("password", password);

  const response =  await db.collection("book").findOneAndUpdate({_id : new ObjectId(req.params.id)}, {$set: {age}})
  // const response  = await db.collection({_id :[ new ObjectId("685bcd8f0dc5ca11629c0f39"),new ObjectId("685bcd8f0dc5ca11629c0f3a"),new ObjectId("685bcd8f0dc5ca11629c0f3b")]}, {$set : {name : "firstName_"}})
  //         const response = await db.collection('book').updateMany(
  //             { age: { $exists: false } },
  //   { $set: { age: 25 } }
  //         )

//   const response = await db
//     .collection("book")
//     .updateMany({ age: { $exists: false } }, { $set: { age: 24 } });
  res.status(200).json(response);
};

const deleteBook = async (req, res) => {
  const db = getDB();

  const response = await db
    .collection("book")
    .findOneAndDelete({ _id: new ObjectId(req.params.id) });

  res.status(200).json(response);
};

module.exports = { createBook, getBooks, getBooksById, updateBook, deleteBook };
