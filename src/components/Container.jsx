import Details from "./Details"
import Header from "./Header"
import Input from "./Input"
import { useState } from "react";

export default function Container(){
    const [addTodo, setAddTodo] = useState("");
    return(
        <div className="container">
            <div style={{padding: "1rem"}} className="input-section">
                <Header></Header>
                <Input setAddTodo={setAddTodo}></Input>
            </div>
            <div className="data-section">
                <Details addTodo={addTodo} ></Details>
            </div>
        </div>
    )
}