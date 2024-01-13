const books = [
    {books:"Book one",generic:"History",published:2009,eddition:2015},
    {books:"Book two",generic:"geograpgy",published:1904,eddition:2014},
    {books:"Book three",generic:"Maths",published:1987,eddition:2022},
    {books:"Book four",generic:"fiction",published:1958,eddition:2017},
    {books:"Book five",generic:"non-fiction",published:1981,eddition:2019},
    {books:"Book six",generic:"History",published:1999,eddition:2020}
]

const userBook = books.filter((bk)=> bk.generic === "History");

const newBook = books.filter((book)=> book.eddition > 2000)

const bookName = []
books.forEach((item)=>{
    bookName.push(item.books)
})

const HistoryBook = books.filter((book)=> (book.generic === "History" && book.eddition > 2000))
console.log(HistoryBook);


