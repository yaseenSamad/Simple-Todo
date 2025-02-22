


export default function Input(){
    
    return(
        <div  style={{paddingBlock: "3rem"}} className="input-block">
            <div style={{display: "flex",gap:"1rem"}}>

            <input placeholder="Enter your todo" style={{height: "2rem",flex:"4",borderRadius: "50px", border: "none", paddingInline: "10px", fontFamily:"monospace"  }} type="text" />
            <button className="button-primary" style={{flex:"1"}}>Add</button>
            </div>
            
        </div>
    )
}