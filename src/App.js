import './App.css';
import Header from './Components/Header';
import Newsbody from './Components/Newsbody';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Gravitas from './Components/Gravitas';
import World from './Components/World';
import NewsbodyData from './Components/newBodyData';
import Footer from './Components/footer';

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route  path="/"  exact element={<NewsbodyData/>}></Route>
        <Route  path="/gravitas" exact element={<Gravitas/>}></Route>
        <Route  path="/World" exact element={<World/>}></Route>
        {/* <Route  path="/Science" exact element={<Science/>}></Route>
        <Route  path="/Entertainment" exact element={<Entertainment/>}></Route>
        <Route  path="/sports" exact element={<sports/>}></Route>
        <Route  path="/buisness" exact element={<buisness/>}></Route> */}
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
