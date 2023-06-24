import './App.css';
import Header from './Components/Header';
import Newsbody from './Components/Newsbody';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Gravitas from './Components/Gravitas';
import World from './Components/World';
import Datas from './Components/Data';
function App() {
  return (
    <>
    <Router>
    <Header/>
    <Datas/>
      <Routes>
        <Route  path="/"  exact element={<Newsbody/>}></Route>
        <Route  path="/gravitas" exact element={<Datas/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
