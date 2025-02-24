import { useRef,useState } from "react";


export default function Input({setAddTodo}){

    const inputRef = useRef("");
    const [inputStyle, setInputStyle] = useState({height: "2rem",flex:"4",borderRadius: "50px", border: "none", paddingInline: "10px", fontFamily:"monospace"  });

const handleAddClick = () => {
    if(inputRef?.current?.value?.trim() === "") {
        setInputStyle({height: "2rem",flex:"4",borderRadius: "50px", border: "none", paddingInline: "10px", fontFamily:"monospace",outlineColor:"red"  })
        inputRef.current.focus();
        return;
    } 
    setInputStyle({height: "2rem",flex:"4",borderRadius: "50px", border: "none", paddingInline: "10px", fontFamily:"monospace"  })
    setAddTodo(inputRef.current.value)
    inputRef.current.value = ''
}
    
    return(
        <div  style={{paddingBlock: "3rem"}} className="input-block">
            <div style={{display: "flex",gap:"1rem"}}>

            <input placeholder="Enter your todo" style={inputStyle}
             type="text"
              ref={inputRef}
              />

            <button className="button-primary" onClick={handleAddClick} style={{flex:"1"}}>Add</button>
            </div>
            
        </div>
    )
}