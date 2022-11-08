import { useNavigate } from "react-router-dom";
import "./main.css"

const Main = () => {
    let navigate = useNavigate();
    return (
        <>
        <div className="container">
            <div className="board-css"></div>

        <div className="btn-1">
             <button className="btn-1-inner" onClick={() => navigate("/btn-1")}> Button 1</button>
        </div>
        <div className="btn-2">
             <button className="btn-2-inner" onClick={() => navigate("/btn-2")}> Button 2</button>
        </div>
        <div className="btn-3">
             <button className="btn-3-inner" onClick={() => navigate("/btn-3")}> Button 3</button>
        </div>
        <div className="btn-4">
             <button className="btn-4-inner" onClick={() => navigate("/btn-4")}> Button 4</button>
        </div>
        <div className="btn-5">
             <button className="btn-5-inner" onClick={() => navigate("/btn-5")}> Button 5</button>
        </div>
        <div className="animation-board"></div>
        </div>
        <div className="back-btn">
                <button className="back-btn-inner" onClick={() => navigate("/")}>Back</button>
            </div>
        </>
    )
}

export default Main;