import { useNavigate } from "react-router-dom";
import "./Button5.css"

const Button5 = () => {
    let navigate = useNavigate();
    return (
        <> 
            
        <div className="container-button5">
            
            <div className="btn5-container">
                <div className="btn5-container-inner"></div>
            </div>
            <div className="btn5">
                <button className="btn5-inner">Simple Button</button>
            </div>
            <div className="back-btn">
                <button className="back-btn-inner" onClick={() => navigate("/main")}>Back to List</button>
           </div>
        </div>
        
        </>
    )
}

export default Button5;
