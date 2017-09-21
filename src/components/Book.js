import React from "react";
import axios from "axios";

// Book component grabs the book info from the BookShout API,
// and displays its info in the render

class Book extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      title: "",
      isbn: "",
      cover_url: "",
      price: "",
      synopsis: ""
    }
  }

  componentWillMount() {
    axios.get('https://bookshout.com/api/books/' + this.props.params.id + '.json')
    .then(response=>{
      this.setState({
        id: response.data.id,
        title: response.data.title,
        isbn: response.data.isbn,
        cover_url: response.data.cover_url,
        price: response.data.current_price,
        synopsis: response.data.synopsis     
      })
    })
    .catch(error => {
      console.error(error);
    })  
  }

  render() {
 
    return (
    <div>
      <h2>{this.state.title}</h2>
      <img src={this.state.cover_url} width="100" />
      <div className="synopsis">{this.state.synopsis}</div>
      <div className="isbn">ISBN {this.state.isbn} </div><div className="price">{this.state.price}</div>
    </div>

    )}
}

export default Book;