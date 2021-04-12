var express = require('express');
var router = express.Router();

let books=
[{bookName:"Brocky Gregon",writer:"Jody Lantry",datePublished:2005,status:"utlånad",image:"book1.jpg"},
{bookName:"Deina Crolla",writer:"Romy Stirgess",datePublished:1998,status:"Inte utlånad",image:"book2.jpg"},
{bookName:"Coop Scouler",writer:"Tandie Bott",datePublished:1999,status:"utlånad",image:"book3.jpg"},
{bookName:"Filberte Wolpert",writer:"Phebe Gerrets",datePublished:1991,status:" Inte utlånad",image:"book4.jpg"},
{bookName:"Damien Mather",writer:"Cyndi Vye",datePublished:1992,status:"utlånad",image:"book5.jpg"}]


/* GET home page. */
router.get('/', function(req, res, next) {
  let printBooks="<h1>List of books in our library</h1><ul>"
  for(book in books){
    printBooks+= `<li>Book name: ${books[book].bookName} <br> Writer: ${books[book].writer}   <br>  status: ${books[book].status}  <br>  date published: ${books[book].datePublished} <br> <img src="images/${books[book].image}" > <br></li>`
  }
  printBooks+=`<ul>`
  printBooks+=`<a href=/add>Add new book </a>`
  res.send(printBooks)

  //res.render('index', { title: 'Express' });
});
router.get("/add" ,(req,res)=>{
  let addBook=`<h1>You can add new book in this page</h1>`
  addBook+=`<form action="/add" method="post">
            <div><input name:"bookName" Type:"text">Book Name </div>
            <div><input name:"writer" Type:"text">Writer</div>
            <div><input name:"datePublished" Type:"text">DatePublisheD</div>
            <button type:"submit">Click to add new book</botton>
            </form>`
  res.send(addBook)
})

router.post("/add",function(req,res){
  
 

  let newBook={bookName:req.body.bookName, writer:req.body.writer,datePublished:req.body.datePublished}
  books.push(newBook);
  console.log("hej",req.body);
  res.redirect("/")
});


module.exports = router;

