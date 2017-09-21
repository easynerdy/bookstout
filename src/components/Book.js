import React from "react";
import axios from "axios";

const book = {
  id: 3,
  title: "Ah",
  isbn: "qqq",
  image: "",
  price: "$3.30",
  synopsis: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
}

class Book extends React.Component {

  render() {
    return (
    <div>
      <h1>{book.title}</h1>
      <div className="cover">{book.image}</div>
      <div className="synopsis">{book.synopsis}</div>
      <div className="isbn">ISBN {book.isbn} </div><div className="price">{book.price}</div>
    </div>

    )}
}

export default Book;