import React, { useState } from "react";
import Item from "./components/Item";
import "./todo.css";

function Todo() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  const handleInput = (e) => {
    setInputItem(e.target.value);
  };

  const addInput = () => {
    if (inputItem) {
      setItems([...items, inputItem]);
      setInputItem("");
    }
  };

  const deleteItem = (i) => {
    setItems(items.filter((item, index) => index !== i));
  };

  const checked = (id, v) => {
    const getItem = document.getElementById(`${id}`);
    if (v) {
      getItem.style.textDecorationLine = "line-through";
    } else getItem.style.textDecorationLine = "none";
  };

  return (
    <div className="container">
      <div className="center-div">
        <h1>ToDo List</h1>
        <div className="form__contain">
          <div>
            <input
              type="text"
              value={inputItem}
              onChange={handleInput}
              placeholder="Add a item"
              className="input__text"
            />
          </div>
          <div>
            <button className="add" onClick={addInput}>
              Add
            </button>
          </div>
        </div>

        <ol className="item_list_div">
          {items.map((item, id) => (
            <Item
              key={id}
              id={id}
              itemValue={item}
              onSel={deleteItem}
              check={checked}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
export default Todo;
