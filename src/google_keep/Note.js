import React from "react";
import { DeleteForever } from "@material-ui/icons";

import "./Note.css";
function Note(props) {
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="btn">
          <DeleteForever className="deleteicon" />
        </button>
      </div>
    </>
  );
}

export default Note;
