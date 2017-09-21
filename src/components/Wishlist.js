import React from "react";

const wishlist = [
  {
    id: 7,
    title: "Elefante",
    image: ""
  },
  {
    id: 8,
    title: "Fishies",
    image: ""
  },
  {
    id: 9,
    title: "Giraffe",
    image: ""
  }
]

class Wishlist extends React.Component {
  render() {
    return (
      <div>
        <h2>Wishlist</h2>
        {wishlist.map(book=>{
          return <li key={book.id}>
            <span>{book.title}</span>
            <div>{book.image}</div>
          </li>
        })}
      </div>
    )}


}

export default Wishlist;