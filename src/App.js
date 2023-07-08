import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import UserInfo from "./Routes/UserInfo";
import Users from "./Routes/Users";

const App = () => {
  return (
    <div className='min-h-screen p-4 bg-black'>
      <div className=' text-gray-200 py-3'>
        {/* Hello World */}
        <Logo />

        <Router>
          <Routes>
            <Route path='/' element={<Users />}></Route>
            <Route path='/:name' element={<UserInfo />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
