import React from "react";
import axios from "axios";

class Wishlist extends React.Component {
  constructor() {
    super();
    this.state = {
      wishlistIds: [
        30,40,50
      ],
      wishlistData: []
    }
    this.removeWish = this.removeWish.bind(this);
  }  
  
  componentDidMount() {
    let newWishlistData =[];
    // For every Id in the Wishlist:
    // load in the data for that id, then add it to the state.
    this.state.wishlistIds.forEach(id => {
      axios.get('https://bookshout.com/api/books/' + id + '.json')
      .then(response => {
        newWishlistData = this.state.wishlistData.concat({
          id: response.data.id,
          title: response.data.title,
          isbn: response.data.isbn,
          cover_url: response.data.cover_url
        });
        this.setState({ wishlistData: newWishlistData })
      })
      .catch(error => {
        console.error(error);
      })
    })
  }

  removeWish(id) {
    // console.log("id: ",id);
    // console.log("state at the top of removeWish is:",this.state);
    // let wishes = this.state.wishlistData;
    // wishes = wishes.filter(o => {
    //   console.log("the object's id is: ",o.id," and the id is ",id)
    //   return o.id !== id
    // });
    // this.setState({wishlistData: wishes})
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Wishlist</h2>
        {this.state.wishlistData.map(book=>{
          return <li key={book.id}>
            <img src={book.cover_url} width="100" alt="Book Image"/>
            <div>{book.title} {book.isbn}  <button onClick={this.removeWish(book.id)}>X</button></div>
          </li>
        })}
      </div>
    )}


}

export default Wishlist;