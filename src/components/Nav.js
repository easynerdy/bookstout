import React from "react";

class Nav extends React.Component {
  render() {
    return (
    <div>
      <div>
        Browse BookShout with a Bier!
      </div>
      {this.props.children}
    </div>
    )
  }


}

export default Nav;