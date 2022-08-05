import './App.css';
import { Routes, Route, useParams } from "react-router-dom";

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
import UpdatePost from './posts/UpdatePost';
import DeletePost from './posts/DeletePost';
import UserPosts from "./posts/UserPosts"
import Post from './posts/Post';
import Loading from './layouts/Loading';
import AddPost from './posts/AddPost';
import User from './User/User';


function App() {
  return (
    < div className='App' >
      <Router>
        <Navi />
        <ButtomNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/editor' element={<AddPost />} />
          <Route path='/adminpanel' element={<AdminPanel />} />
          <Route path='/profile/:userId' element={<User />} />
          <Route path='/editUser' element={<EditUser />} />
          <Route path='/uploadImage' element={<UploadImage />} />
          <Route path='/useravatar' element={<UpdateUserAvatar />} />
          <Route path='/userPosts/:userId' element={<UserPosts />} />
          <Route path='/updatePost/:postId' element={<UpdatePost />} />
          <Route path='/deletepost/:postId' element={<DeletePost />} />
          <Route path='/post/:postId' element={<Post />} />
          <Route path='/load' element={<Loading />} />

        </Routes>
        <ButtomNav />
      </Router>
    </div>
  );
}

export default App;
