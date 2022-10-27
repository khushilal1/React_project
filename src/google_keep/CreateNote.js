import React, { useState } from "react";
import "./CreateNote.css";

function CreateNote(pops) {
  const [current_data, setcurrent_data] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setcurrent_data((pre_val) => {
      return( {
        ...pre_val,
        [name]: value,
      });
    });
  };

  const AddEvent = () => {
    pops.passnote(current_data);
  };

  return (
    <>
      <div className="createnote">
        <form action="">
          <div className="input_area">
            <input
              name="title"
              value={current_data.title}
              onChange={InputEvent}
              type="text"
              autoComplete="off"
              placeholder="Title...."
              id="text_area1"
            />
            <br />
            <textarea
              value={current_data.content}
              onChange={InputEvent}
              name="content"
              id="text_area"
              placeholder="Write a note...."
            ></textarea>

            <button id="btn" onClick={AddEvent}>
              +
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default CreateNote;
