var express = require('express');
var router = express.Router();

let books=
[{bookName:"Em",writer:" Kim Thúy",NumberOfPages:156,status:"utlånad",image:"book1.jpg"},
{bookName:"De oskiljaktiga",writer:"Simone De Beauvoir",NumberOfPages:156,status:"Inte utlånad",image:"book2.jpg"},
{bookName:"Brigitte Bardot & Lolitasyndromet : essäer",writer:"Simone De Beauvoir",NumberOfPages:265,status:"utlånad",image:"book3.jpg"},
{bookName:"Woman Destroyed",writer:"Simone De Beauvoir",NumberOfPages:256,status:" Inte utlånad",image:"book4.jpg"}]

/* GET home page. */
router.get('/', function(req, res, next) {
  let printBooks="<h1>List of books in our library</h1><ul>"
  for(book in books){
    printBooks+= `<li>Book name: ${books[book].bookName} <br> Writer: ${books[book].writer}   <br>  status: ${books[book].status}  <br>  Number of pages: ${books[book].NumberOfPages} <br> <img src="images/${books[book].image}" > <br></li>`
  }
  printBooks+=`<ul>`
  printBooks+=`<a href=/add>Add new book </a>`
  res.send(printBooks)

  //res.render('index', { title: 'Express' });
});
router.get("/add" ,(req,res)=>{
  let addBook=`<h1>You can add new book in this page</h1>`
  addBook+=`<form action="/add" method="post">
  <div><input name="bookName" Type:"text">Book Name </div>
  <div><input name="writer" Type:"text">Writer</div>
  <div><input name="NumberOfPages" Type:"text">Number of pages</div>
  <div><input name="image" type="file" /></div>
  <button type:"submit">Click to add new book</botton>
  </form>`
  res.send(addBook)
})

router.post("/add",function(req,res){
  
 

  let newBook={bookName:req.body.bookName, writer:req.body.writer,NumberOfPages:req.body.NumberOfPages,image:req.body.image}
  books.push(newBook);
  console.log("hej",req.body);
  res.redirect("/")
});


module.exports = router;

