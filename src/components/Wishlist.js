import React from "react";
import { Link } from "react-router";

// The Wishlist pulls from localStorage
// Then displays the books in a list with a remove button

class Wishlist extends React.Component {
  
  constructor() {
    super();
    this.state = {
      wishlist: [],
    }
    this.removeWish = this.removeWish.bind(this);
  }  
  
  componentDidMount() { 
    let newWishlist = [];
    newWishlist = JSON.parse(localStorage.getItem('wishlist'));
    this.setState({
      wishlist : newWishlist || []
    });
  }

  removeWish(id) {
    let lessWishes = this.state.wishlist.filter(book => {
      return book.id !== id
    });
    this.setState({wishlist: lessWishes})
    // Update localStorage
    localStorage.setItem('wishlist', JSON.stringify(lessWishes));
  }

  render() {
    return (
      <div>
        <h2>Wishlist</h2>
        {this.state.wishlist.map(book=>{
          return <li key={book.id}>
            <Link to={"/details/" + book.id}><img src={book.cover_url} width="100" /></Link>
            <div>{book.title} {book.isbn}  <button onClick={() => {this.removeWish(book.id)}}>X</button></div>
          </li>
        })}
      </div>
    )}


}

export default Wishlist;