import { useNavigate } from "react-router-dom";
import "./Button2.css"

const Button2 = () => {
    let navigate = useNavigate();
    return (
        <>
            
        <div className="container-button2">
            
            <div className="btn2-container">
                <div className="btn2-container-inner"></div>
            </div>
            <div className="btn2">
                <button className="btn2-inner">Neon Button</button>
            </div>
            <div className="back-btn">
                <button className="back-btn-inner" onClick={() => navigate("/main")}>Back to List</button>
            </div>
        </div>
        
        </>
    )
}

export default Button2;