import { useNavigate } from "react-router-dom";
import "./Button4.css"

const Button4 = () => {
    let navigate = useNavigate();
    return (
        <>
            
        <div className="container-button4">
            
            <div className="btn4-container">
                <div className="btn4-container-inner"></div>
            </div>
            <div className="btn4">
                <button className="btn4-inner">3D Button</button>
            </div>
            <div className="back-btn">
                <button className="back-btn-inner" onClick={() => navigate("/main")}>Back to List</button>
            </div>
        </div>
        
        </>
    )
}

export default Button4;