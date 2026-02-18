import React, { useState } from "react";

function BookForm({ addBook }) {
  const [book, setBook] = useState({ isbn: "", title: "", author: "", price: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(book).some(v => v === "")) {
      setError("Fill all fields");
      return;
    }

    addBook(book);
    setBook({ isbn: "", title: "", author: "", price: "" });
    setError("");
  };

  return (
    <div>
      <h2>Add Book</h2>

      <form onSubmit={handleSubmit}>
        <input name="isbn" placeholder="ISBN" value={book.isbn} onChange={handleChange} />
        <input name="title" placeholder="Title" value={book.title} onChange={handleChange} />
        <input name="author" placeholder="Author" value={book.author} onChange={handleChange} />
        <input name="price" type="number" placeholder="Price" value={book.price} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default BookForm;
