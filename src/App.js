import React from "react";
import { Helmet } from "react-helmet";
import Routes from "./Routes";

const App = props => (
  <div>
    <Helmet>
      <title>BookStout!</title>
      <meta
        name="description"
        content="Everyone loves a good book with a good bier. Now search for any book available at BookShout with BookStout!"
      />
      <meta
        name="keywords"
        content="books, bier, bier books, Oktoberfest"
      />
    </Helmet>
    <Routes/>
  </div>
);

export default App;

