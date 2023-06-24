import './App.css';
import Header from './Components/Header';
import Newsbody from './Components/Newsbody';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Gravitas from './Components/Gravitas';
import World from './Components/World';
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Newsbody/>}></Route>
        <Route  path="/gravitas" exact element={<Gravitas/>}></Route>
      </Routes>
      
    </Router>
 {/* <Header/>
 <Newsbody/>
 <Gravitas/>
 <World/> */}
    </>
  );
}

export default App;
