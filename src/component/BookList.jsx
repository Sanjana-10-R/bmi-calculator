import React from "react";

function BookList({ books }) {
  return (
    <div>
      <h2>Book List</h2>

      {books.length === 0 ? (
        <p>No books added yet</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              {book.title} - {book.author} | ISBN: {book.isbn} | ₹{book.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
