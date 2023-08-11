import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Nav from './Startpage/Nav';
import Signup from './Startpage/sign/Signup';
import Password from './Startpage/password/Password';
import List from './Startpage/List/List';
import Header from './Startpage/Header/Header';
import Footer from './Startpage/Footer/Footer';
function App() {

  return (

    <Router >
      <Routes>
        <Route path='/' element={<Nav />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/password' element={<Password />} />
        <Route path='*' element={<Link to='/'>
          <h2>Page is not found</h2> <p>Back to Page</p> </Link>} />
        <Route path='/database' element={
          <React.Fragment>
            <Header />
            <List title="Netflix Originals" param="originals" />
            <List title="Trending Now" param="trending" />
            <List title="Now Playing" param="now_playing" />
            <List title="popular" param="popular" />
            <List title="Top Rated" param="top_rated" />
            <List title="Upcoming" param="upcoming" />
            <Footer/>
          </React.Fragment>

        } />
      </Routes>
    </Router>
  );
}

export default App;
