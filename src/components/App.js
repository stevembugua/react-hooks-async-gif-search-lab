import React from "react";
import GifListContainer from "./GifListContainer";

import NavBar from "./NavBar";

// the App component should render out the GifListContainer component

function App() {

  return (
    <>
      <NavBar color="grey" title="Giphy Search" />
      <GifListContainer />
    </>
  );
}

export default App;