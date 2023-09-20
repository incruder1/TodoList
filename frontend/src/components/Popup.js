import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/HandleApi";

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [title, setTitle] = useState(popupContent.text);
  const [desc, setDesc] = useState(popupContent.text2);
  console.log(popupContent);


  const updateToDo = () => {
    axios
      .put(`${baseURL}/api/update/${popupContent.id}`, { title,desc })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      });
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update ToDo</h1>

        <div className="popup__input_holder">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Update Title..."
          />
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            placeholder="Update Description..."
          />
          <button onClick={updateToDo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;