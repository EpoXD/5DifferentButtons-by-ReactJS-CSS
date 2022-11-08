import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Button1 from "./components/Button 1/Button1";
import Button2 from "./components/Button 2/Button2";
import Button3 from "./components/Button 3/Button3";
import Button4 from "./components/Button 4/Button4";
import Button5 from "./components/Button 5/Button5";
import List from "./components/List of Buttons/List";
import Main from "./components/Main/main";



function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/main" element={<Main />} />
        <Route path="/btn-1" element={<Button1 />} />
        <Route path="/btn-2" element={<Button2 />} />
        <Route path="/btn-3" element={<Button3 />} />
        <Route path="/btn-4" element={<Button4 />} />
        <Route path="/btn-5" element={<Button5 />} />
      </Routes>
    </Router>
  
  )
}

export default App