import React from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

// Book component grabs the book info from the BookShout API,
// and displays its info in the render

class Book extends React.Component {
  constructor() {
    super();
    this.state = {
      wishlist : [],
      book: {
        id: null,
        title: "",
        isbn: "",
        cover_url: "",
        price: "",
        synopsis: ""
      }
    }
  }

  componentWillMount() {
    const cookies = new Cookies();
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
      this.setState({ 
        wishlistIds : cookies.get('wishlistIds')
      });
    })
    .catch(error => {
      console.error(error);
    })  
  }

  addToWishlist() {
    const cookies = new Cookies();    
    let newWishlist = this.state.wishlist.push(this.state.book);
    this.setState({wishlist : newWishlist});
    cookies.set('wishlist', this.state.wishlist, { path: '/' });
    
    console.log("made it")
  }

  render() {
    console.error("in render, state:",this.state.wishlist)
    return (
    <div>
      <h2>{this.state.title}</h2>
      <button onClick={this.addToWishlist.bind(this)}>*</button>
      <img src={this.state.book.cover_url} width="100" alt={this.state.book.title}/>
      <div className="synopsis">{this.state.book.synopsis}</div>
      <div className="isbn">ISBN {this.state.book.isbn} </div><div className="price">{this.state.book.price}</div>
    </div>

    )}
}

export default Book;