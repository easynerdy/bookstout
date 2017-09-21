import React from "react";
import axios from "axios";

class Wishlist extends React.Component {
  constructor() {
    super();
    this.state = {
      wishlistIds: [
        10,20,30,40
      ],
      wishlistData: []
    }
  }  
  
  componentDidMount() {
    let newWishlistData =[];
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

  render() {
    return (
      <div>
        <h2>Wishlist</h2>
        {console.log("the state is: ",this.state.wishlistData)}
        {this.state.wishlistData.map(book=>{
          return <li key={book.id}>
            <div>{book.title}</div>
            <img src={book.cover_url} width="100" alt="Book Image"/>
          </li>
        })}
      </div>
    )}


}

export default Wishlist;