import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './layouts/Home';
import Dashboard from './layouts/Dashboard';
import ButtomNav from './bars/ButtomNav';
import { BrowserRouter as Router } from "react-router-dom";
import ExplorePage from './layouts/ExplorePage';
import Navi from './bars/Navi';
import Signup from './User/Register';
import Login from './User/Login';
import Edit from './posts/Edit';


function App() {
  return (
    < div>
          <Dashboard />
          <Navi />
          <ButtomNav/>

    <Router>

      <Routes>
      <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/editor' element={<Edit />} />
      </Routes>
      <ButtomNav/>
    </Router>
    </div>
  );
}

export default App;
