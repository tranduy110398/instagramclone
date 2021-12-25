import './App.css';
import Home from './components/Home/Home';
import LoginPage from './components/LoginPage/LoginPage';
import {Route, Routes,Navigate} from "react-router-dom";
function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" exact element={<Navigate to="/welcome"/>}/>
        <Route path="/welcome" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>   
     <Routes>
     <Route path="/" exact element={<Navigate to="/welcome"/>}/>
         {
         (localStorage.getItem("users")==undefined ||  localStorage.getItem("users")== null) ? <Route path="/welcome" element={ <LoginPage/> }/>: <Navigate path="/home" element={<Home/>}/>
        }
     </Routes>*/}
       {
         (localStorage.getItem("users")==undefined ||  localStorage.getItem("users")== null) ? <LoginPage/> : <Home/>
        }
    </div>
  );
}

export default App;
