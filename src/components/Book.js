import React from "react";
import axios from "axios";

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
      }
    }
    this.addToWishlist = this.addToWishlist.bind(this);
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
    })
    .catch(error => {
      console.error(error);
    })  
    console.error("at the end of componentDidMount, the state is:",this.state);
    console.error('and localStorage is:',localStorage.getItem('wishlist'));

  }

  addToWishlist() {
    let newWishlist = this.state.wishlist;
    newWishlist = newWishlist.concat(this.state.book);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    alert('You added a new book to your Wishlist!');
  }

  render() {
    return (
    <div>
      <h2>{this.state.title}</h2>
      <button onClick={this.addToWishlist}>*</button>
      <img src={this.state.book.cover_url} width="100" alt={this.state.book.title}/>
      <div className="synopsis">{this.state.book.synopsis}</div>
      <div className="isbn">ISBN {this.state.book.isbn} </div><div className="price">{this.state.book.price}</div>
    </div>

    )}
}

export default Book;