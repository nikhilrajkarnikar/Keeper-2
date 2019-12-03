import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
    <div>
      {notes.map(noteTerm => (
        <Note 
          key = {noteTerm.id}
          title = {noteTerm.title}
          content = {noteTerm.content}
        />
        )
      )}
    </div>
    <Footer />
    </div>
  );
}

export default App;
