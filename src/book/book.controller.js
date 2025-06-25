const {getDB} = require('../../config/mdatabase')



const createBook = async(req,res) => {
    const {name,author,publisedBy,releaseDate}  = req.body;
    const db =  getDB();
    // const books =   await  db.collection('book').insertOne({
    //         name,
    //         author,
    //         publisedBy,
    //         releaseDate
    //     })


    const books =  await db.collection("book").insertMany([{
        name,author,publisedBy,releaseDate
    },
    {name : `${name}1`,auther :`${author}1`,publisedBy : `${publisedBy}1`,releaseDate : `${releaseDate}1`},
     {name : `${name}2`,auther :`${author}2`,publisedBy : `${publisedBy}2`,releaseDate : `${releaseDate}2`}
])
        
        res.status(201).json(books);
}

const getBooks =  async(req,res)=>{
     const db =  getDB();
    const response = await db.collection("book").find().toArray();

    res.status(200).json(response)
}

const getBooksById =  async(req,res)=>{
    const db = getDB();
    const id = req.params.id

    const response = await db.collection("book").findOne({_id : id})

    res.status(200).json(response);
}



module.exports  = {createBook,getBooks,getBooksById}