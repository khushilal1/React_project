import React, { useState } from "react";
import Header from "./google_keep/Header";
import Footer from "./google_keep/Footer";
import CreateNote from "./google_keep/CreateNote";
import Note from "./google_keep/Note";

function App() {
  const [additem, setadditem] = useState([]);

  const Addnote = (current_data) => {
    setadditem((preval) => {
      alert("Note is added");
      return [...preval, current_data];
    });
  };
  return (
    <>
      <Header />
      <CreateNote passnote={Addnote} />

      {additem.map((current_val) => {
        return <Note title={current_val.title} content={current_val.content} />;
      })}
      <Footer />
    </>
  );
}

export default App;
