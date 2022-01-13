import './styles/main.css'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHello from './components/account/account.jsx'
import Cards from './components/cards/cards.jsx'
import Nav from './components/nav.jsx'
import NotFound from './components/notfound.jsx';


ReactDom.render(
    <>
        <AppHello />
        <AppHello name="Regina" />
        <Cards />
        <Router>
            <div>
            <Nav />
                <Routes>
                    <Route path="/cards" element={<Cards />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    </>,
    document.querySelector('.app')
)
