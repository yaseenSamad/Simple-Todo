import Details from "./Details"
import Header from "./Header"
import Input from "./Input"

export default function Container(){
    
    return(
        <div className="container">
            <div style={{padding: "1rem"}} className="input-section">
                <Header></Header>
                <Input></Input>
            </div>
            <div className="data-section">
                <Details></Details>
            </div>
        </div>
    )
}