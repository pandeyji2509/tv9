import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Gravitas from './Components/Gravitas';
import World from './Components/World';
import NewsbodyData from './Components/newBodyData';
import Footer from './Components/footer';
import Science from './Components/Science';
import Entertainment from './Components/Entertainment';
import Sports from './Components/Sports';
import Business from './Components/Business';
import Livetv from "./Components/Livetv"
function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route  path="/"  exact element={<NewsbodyData/>}></Route>
        <Route  path="/gravitas" exact element={<Gravitas/>}></Route>
        <Route  path="/World" exact element={<World/>}></Route>
        <Route  path="/Science" exact element={<Science/>}></Route>
        <Route  path="/Entertainment" exact element={<Entertainment/>}></Route> 
        <Route  path="/Sports" exact element={<Sports/>}></Route>
        <Route  path="/Business" exact element={<Business/>}></Route>
        <Route  path="/Livetv" exact element={<Livetv/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
