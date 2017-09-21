import React from "react";

const searchResults = [
  {
    id: 4,
    title: "Bees",
    price: "$3.40",
    synopsis: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
  },
  {
    id: 5,
    title: "Cats",
    price: "$3.50",
    synopsis: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
  },
  {
    id: 6,
    title: "Dogs",
    price: "$3.60",
    synopsis: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
  }
]

class Home extends React.Component {
  render() {
    return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map(book=>{
          return <li key={book.id}>
            <div>{book.title} {book.price}</div>
            <div>{book.synopsis}</div>
          </li>
        })}
      </ul>
    </div>
    )}
}

export default Home;