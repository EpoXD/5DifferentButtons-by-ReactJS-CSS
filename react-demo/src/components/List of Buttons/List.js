import "./List.css"
import { useNavigate } from "react-router-dom";

const List = () => {
    let navigate = useNavigate();
    return (
        <>
        <div className="container-list">

        <div className="list-of-buttons">
        <button className="list-of-buttons-inner" onClick={() => navigate("/main")}>List of Buttons</button>
          </div>

        </div>
        </>
    )
}

export default List;
