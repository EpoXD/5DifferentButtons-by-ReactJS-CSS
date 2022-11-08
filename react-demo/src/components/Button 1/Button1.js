import { useNavigate } from "react-router-dom";
import "./Button1.css"

const Button1 = () => {
    let navigate = useNavigate();
    return (
        <>
        
        <div className="container-button1">
            
            <div className="btn1-container">
                <div className="btn1-container-inner"></div>
            </div>
            <div className="btn1">
                <button className="btn1-inner"></button>
            </div>
            <div className="back-btn">
                <button className="back-btn-inner" onClick={() => navigate("/main")}>Back to List</button>
            </div>

        </div>
        
        </>
    )
}

export default Button1;