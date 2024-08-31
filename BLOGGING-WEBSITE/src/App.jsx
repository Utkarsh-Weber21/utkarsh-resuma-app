import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GuestRoute from './components/GuestRoute';

function App() {
  return (
    <Router>
      <div>
        <header>
          { /* <Navbar/> */}
        </header>
        <main>
          <Routes>

            <Route path = '/' element = {<h1>Home Page</h1>} />

            <Route path='/register/*' element={<GuestRoute />} />

            <Route path = '/login' element = {<h1>Log In</h1>} />
            <Route path = '/setting' element = {<h1>Setting</h1>} />
            <Route path = '/editer/:abcd' element = {<h1>Editor</h1>} />
            <Route path = '/article/:sign' element = {<h1>Article</h1>} />
            <Route path = '/profile/username' element = {<h1>Profile</h1>} />
            <Route path = '/@username' element = {<h1>Profile</h1>} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;