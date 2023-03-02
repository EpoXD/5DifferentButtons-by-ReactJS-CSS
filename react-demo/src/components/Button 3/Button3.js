import { useNavigate } from "react-router-dom";
import "./Button3.css"

const Button3 = () => {
    let navigate = useNavigate(); 
    return (
        <>  

        <div className="container-button3">
             
            <div className="btn3-container">
                <div className="btn3-container-inner"></div>
            </div>
            <div className="btn3">
                <button className="btn3-inner">Button</button>
            </div>
            <div className="back-btn">
                <button className="back-btn-inner" onClick={() => navigate("/main")}>Back to List</button>
            </div>
            <div className="btn3-cont">
                <button className="btn3-cont-inner">Neon Button</button>
            </div>
        </div>
        
        </>
    )
}

export default Button3;
