import React from "react";
import Cookies from 'universal-cookie';

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
    let newWishes = this.state.wishlist.filter(book => {
      console.log("the object's id is: ",book.id," and the id is ",id)
      return book.id !== id
    });
    console.log("afterwards",newWishes)
    // this.setState({wishlist: newWishes})
    // // Update the cookie
    // const cookies = new Cookies();    
    // cookies.set('wishlist', this.state.wishlist, { path: '/' });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Wishlist</h2>
        {this.state.wishlist.map(book=>{
          return <li key={book.id}>
            <img src={book.cover_url} width="100" />
            <div>{book.title} {book.isbn}  <button onClick={this.removeWish}>X</button></div>
          </li>
        })}
      </div>
    )}


}

export default Wishlist;