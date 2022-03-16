function findAccountById(accounts, id) {
  //use find() to determine accounts by id
  return accounts.find(account => {return account.id === id})
}

function sortAccountsByLastName(accounts) {
  //use sort to sort accounts by last name
  return accounts.sort((a, b) => {
    return (a.name.last > b.name.last ? 1 : -1);
  })
 }
                  
function getTotalNumberOfBorrows(account, books) {
  const acctID = account.id;
  let total = 0;
  books.forEach(book => book.borrows.forEach(borrow => acctID === borrow.id && total++));
  //if each book has been borrowed, account ID is equal to borrowed book and total borrows
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksTaken = [];
  books.forEach(book => {
    if (book.borrows.find(item => item.id === account.id && !item.returned)) {
      //identify item id to equal account id and if book has not been returned
      booksTaken.push(book);
    }
  })
    booksTaken.forEach(book=>{
      let anAuthor = authors.find(person => person.id === book.authorId);
      //identify person that has checked out a book by an author id
      book['author'] = anAuthor;
    })
  return booksTaken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
