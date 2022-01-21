import './styles/main.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cards from './components/cards/cards.jsx'
import Nav from './components/Navbar/nav.jsx'
import Header from './components/Header/header.jsx'
import NotFound from './components/notfound.jsx';
import Account from './components/account/account.jsx';


const App = () => {
    return (
    
        <div className='wrapper'>
            <Header/>
            <Router>
            <div>
            <Nav />
                <Routes>
                    <Route path="/cards" element={<Cards />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
            <Account/>
        </div>
    )
  }
export default App;