import React from "react";
import axios from "axios";
import { browserHistory } from "react-router";

// Book component grabs the book info from the BookShout API,
// and displays its info in the render

class Book extends React.Component {
  constructor() {
    super();
    this.state = {
      wishlist : [],
      book: {
        id: 0,
        title: "",
        isbn: "",
        cover_url: "",
        price: "",
        synopsis: ""
      },
      listed: false
    }
    this.addWish = this.addWish.bind(this);
    this.removeWish = this.removeWish.bind(this);    
  }

  componentWillMount() {
    let newWishlist = JSON.parse(localStorage.getItem('wishlist'));
    this.setState({ 
      wishlist : newWishlist || []
    });
    // Grab the book from the api
    axios.get('https://bookshout.com/api/books/' + this.props.params.id + '.json')
    .then(response=>{
      this.setState({
        book: {
          id: response.data.id,
          title: response.data.title,
          isbn: response.data.isbn,
          cover_url: response.data.cover_url,
          price: response.data.current_price,
          synopsis: response.data.synopsis     
        }
      })
      // Set listed to true if the book is found in the wishlist
      this.setState({
        listed: this.state.wishlist.some(book =>{
                  return book.id === this.state.book.id
                })
      })
    })
    .catch(error => {
      console.error(error);
    })
  }

  // Add the book obj to state, then add to localStorage

  addWish() {
    let newWishlist = this.state.wishlist;
    newWishlist = newWishlist.concat(this.state.book);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    this.setState({
      listed: true
    })
    alert('You added a new book to your Wishlist!');
  }

  // Search the wishlist for the book and remove with filter,
  // then update state and localStorage

  removeWish() {
    let lessWishes = this.state.wishlist.filter(book => {
      return book.id !== this.state.id
    });
    this.setState({
      wishlist: lessWishes,
      listed: false 
    })
    localStorage.setItem('wishlist', JSON.stringify(lessWishes));
  }

  render() {
    return (
    <div>
      <button onClick={browserHistory.goBack}>Back</button>
      <button onClick={this.state.listed ? this.removeWish : this.addWish}>
        {this.state.listed ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
      <h2>{this.state.title}</h2>
      <img src={this.state.book.cover_url} width="100" alt={this.state.book.title}/>
      <div className="isbn">ISBN {this.state.book.isbn} </div><div className="price">{this.state.book.price}</div>
      <div className="synopsis">{this.state.book.synopsis}</div>
    </div>

    )}
}

export default Book;