import React from 'react';
import { useState } from 'react';
import "./style.css";
import { useEffect } from 'react';

// const getlocalData = () => {
//     const list = localStorage.getItem("mytodo")
//     if (list) {
//         return JSON.parse(list)

//     } else {
//         return []
//     }
// }
const Todo = () => {
    const [inputdata, setInputdata] = useState("");
    const [Items, setItems] = useState([]);

    const Additems = () => {
        if (!inputdata) {
            alert("please fill the data")
        } else {
            const myNewInputData = {
                id: new Date().getTime.toString,
                name: inputdata,
            }
            setItems([...Items, inputdata])
            setInputdata("")
        };
    }
    // how to delete items section
    const deleteItem = (index) => {
      const updatedItems = Items.filter((curElem) => {
        return curElem.id !== index;
      });
      setItems(updatedItems);
    };
    const clearAll = () => {
        setItems([]);
    }
    // add local Storage
    useEffect(() => {
        localStorage.setItem("mytodo", JSON.stringify(Items));
    }, [Items])
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="" srcset="" />
                        <figcaption>Add your list here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="Add Items" className="form-control"
                            value={inputdata}
                            onChange={(event) => setInputdata(event.target.value)} />
                        <i className="fa fa-plus" onClick={Additems}></i>
                    </div>
                    <div className="showItems">
                        {Items.map((curElem) => {
                            return (
                                <div className="eachItem" key={curElem.id}>
                                    <h3>{curElem}</h3>
                                    <div className="todo-btn">
                                        <i
                                            className="far fa-trash-alt add-btn"
                                            onClick={() => deleteItem(curElem.id)}></i>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    <div className="showItems"><button className="btn effect04" data-sm-link-text="Remove All"
                        onClick={() => clearAll()}>
                        <span>CheckList</span>
                    </button></div>
                </div>
            </div>
        </>
    )
}

export default Todo
