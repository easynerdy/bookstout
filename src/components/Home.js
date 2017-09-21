import React from "react";
import { Link } from "react-router";

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
  constructor() {
    super();
    this.state = {
      books: []
    }
  }

  componentDidMount() {

  }

  submitSearch(e) {
    e.preventDefault();
    console.log("We made it in submitSearch!");
  }

  render() {
    const component = this;
    return (
    <div>
      <input type="text"/>
      <button onClick={component.submitSearch}>Search</button>
      {this.state.books.length >= 0
      ? <div>Search for a book!</div>
      : <div> 
          <h2>Search Results</h2>
          <ul>
            {this.state.books.map(book=>{
              return <li key={book.id}>
                <div><Link to={"/details/" + book.id}>{book.title}</Link> {book.price}</div>
                <div>{book.synopsis}</div>
              </li>
            })}
          </ul>
        </div>}
    </div>
    )}
}

export default Home;