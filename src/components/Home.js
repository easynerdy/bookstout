import React from "react";
import { Link } from "react-router";
import axios from "axios";

// Home Component contains a search bar and search results.

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      books: []
    }
    this.onChange = this.onChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({searchInput: e.target.value});
  }

  submitSearch(e) {
    e.preventDefault();
    console.error(e);
    axios.get("https://bookshout.com/api/books/search.json?query=" + this.state.searchInput)
    .then(response => {
      this.setState({books: response.data});
    })
    .catch(error => {
      console.error(error);
    })
  }

  render() {
    return (
    <div>
      <input id="searchInput" type="text" value={this.state.searchInput} onChange={this.onChange}/>
      <button onClick={this.submitSearch}>Search</button>
      <ul>
        {this.state.books.map(book=>{
          return <li key={book.id}>
            <div><Link to={"/details/" + book.id}>{book.title}</Link> {book.current_price}</div>
            <div>{book.synopsis && book.synopsis.length > 100 ? book.synopsis.substring(0,99)+"..." : book.synopsis}</div>
          </li>
        })}
      </ul>
    </div>
    )}
}

export default Home;