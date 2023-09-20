import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import axios from "axios";
import { baseURL } from "./utils/HandleApi";

import Popup from "./components/Popup";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/api/get`)
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveToDo = () => {
    axios
      .post(`${baseURL}/api/save`,{title,desc})
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setTitle("");
        setDesc("");
      })
      .catch((err) =>   console.log(err) );
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">TOdo App </h1>
         
        <div className="input_holder">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Add a Title..."
          />
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            placeholder="Description..."
          />
          <button onClick={saveToDo}>Add</button>
        </div>

        <div className="list">
          {toDos.map((el) => (
            <ToDo
              key={el._id}
              text={el.title}
              text2={el.desc}
              id={el._id}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
              setPopupContent={setPopupContent}
            />
          ))}

          
        </div>
      </div>
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />
      )}
    </main>
  );
};

export default App;
