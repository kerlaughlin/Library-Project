function findAuthorById(authors, id) {
  //use find() to idenitfy authors by id
  return authors.find(author => {return author.id === id})
}

function findBookById(books, id) {
  //use find() to identify books by id
  return books.find(book => {return book.id === id})
}

function partitionBooksByBorrowedStatus(books) {
  //set variables to arrays
  let available = [];
  let unavailable = [];
  const bookStatus = [];
  books.forEach((book) => {
    const isBookReturned = book.borrows[0].returned;
    if (isBookReturned) {
      //if book is returned is unavaialble, push that book
      //if book is retruend is available, push that book
      unavailable.push(book);
    } else { available.push(book) 
           }
    })
  bookStatus.push(available);
  bookStatus.push(unavailable);
  //push status of book to variables to return book status
  return bookStatus;
}
  

function getBorrowersForBook(book, accounts) {
  let result = [];
  let borrowStatus = book.borrows;
  borrowStatus.forEach(borrow => {
    //identify which account id has borrowed books
    let account = accounts.find(acc => acc.id === borrow.id);
    let object = account;
    object['returned'] = borrow.returned;
    result.push(object);
  })
  console.log(result)
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
