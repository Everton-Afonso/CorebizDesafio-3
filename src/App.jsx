import React from "react";

import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Favorites from "./components/Favorites";

function App() {
  return (
    <main className="App">
      <Banner/>
      <Contacts/>
      <Favorites/>
    </main>
  );
}

export default App;
