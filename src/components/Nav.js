import React from "react";
import { Link } from "react-router";

class Nav extends React.Component {
  render() {
    return (
    <div>
      <div>
        <h1>Browse BookShout with a Bier!</h1>
        <div><Link to="/">Home</Link> <Link to="/wishlist">Wishlist</Link></div>
      </div>
      {this.props.children}
    </div>
    )
  }


}

export default Nav;