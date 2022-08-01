import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './layouts/Home';
import ButtomNav from './bars/ButtomNav';
import { BrowserRouter as Router } from "react-router-dom";
import ExplorePage from './layouts/ExplorePage';
import Navi from './bars/Navi';
import Signup from './User/Register';
import Login from './User/Login';
import Edit from './posts/Edit';
import AdminPanel from './admin/AdminPanel';
import Profile from './User/Profile';
import EditUser from "./User/EditUser"
import UploadImage from './image/UploadImage';
import UpdateUserAvatar from './User/UpdateUserAvatar';
import UploadPostImg from './posts/UploadPostImg';


function App() {
  return (
    < div>
    <Router>
            <Navi />
            <ButtomNav />
      <Routes>
      <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/editor' element={<Edit />} />
          <Route path='/adminpanel' element={<AdminPanel />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/editUser' element={<EditUser />} />
          <Route path='/uploadImage' element={<UploadImage />} />
          <Route path='/useravatar' element={<UpdateUserAvatar />} />
          <Route path='/postimg' element={<UploadPostImg />} />
      </Routes>
      <ButtomNav/>
    </Router>
    </div>
  );
}

export default App;
