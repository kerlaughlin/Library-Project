function getTotalBooksCount(books) {
  //use length of books to find out total
  return books.length 
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}


function getBooksBorrowedCount(books) {
  //set variable to filter through the record of books
  let booksOut = books.filter(
  (book) =>
  book.borrows.filter((record) => record.returned === false).length > 0);
  //if the length of books that are not returned is greather than 0
  return booksOut.length;
  //return the length of books not returned
}

function getBooksBorrowedCount(books){
let total = books.reduce((acc, book) => {
       return ( acc + (book.borrows[0].returned === false))},0);
return total  
}


function helper(books) {
  //helper function for getMostCommonGenres
  let countObj = {}
  books.forEach(aBook => {
    if (countObj[aBook.genre] != null) {
      countObj[aBook.genre]++
    } else {
      countObj[aBook.genre] = 1
    }
  }) 
  return countObj
}
function getMostCommonGenres(books) {
  let countObj = helper(books)
  let countArray = []
  for (const [key, value] of Object.entries(countObj)) {
    countArray.push({
      name: key,
      count: value,
    })
  }
  countArray.sort((a, b) => b.count - a.count)
  return countArray.slice(0, 5)
}


function getMostPopularBooks(books, count =5) {
 //organize book data
  const borrows = books.map(book => ({name:book.title, count:book.borrows.length}));
   //sort by borrow count, descending
  borrows.sort((a, b) => b.count - a.count);
  return borrows.slice(0,count);
}


function getMostPopularAuthors(books, authors) {
 let result = [];
 authors.forEach((author) => {
   //for each author identify first and last name
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
    //for each book identify author id
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
     //include authors and the number of books borrowed
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
