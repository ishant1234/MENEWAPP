import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Newuser from "./pages/user/Newuser";
import './app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/usreList/UserList";
//import Login from './pages/registration/Singup';
function App() {
  return (
   <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/users" element={<UserList/>}></Route>
          <Route path="/users/:userId" element={<User/>}></Route>
          <Route path="/newuser" element={<Newuser/>}></Route>
         </Routes> 
      </div>
    </Router>
     
  );
}

export default App;
