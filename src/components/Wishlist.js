import React from "react";
import Cookies from 'universal-cookie';
import { Link } from "react-router";

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
    console.log("id: ",id);
    console.log("state at the top of removeWish is:",this.state);
    let lessWishes = this.state.wishlist.filter(book => {
      return book.id !== id
    });
    this.setState({wishlist: lessWishes})
    // Update localStorage
    localStorage.setItem('wishlist', JSON.stringify(lessWishes));
  }

  render() {
    console.log(this.state);
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