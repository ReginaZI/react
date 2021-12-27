import './styles/main.css'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHello from './components/account/account'
import Cards from './components/cards/cards'
import Nav from './components/nav'
import NotFound from './components/notfound';


ReactDom.render(
    <>
        <AppHello />
        <AppHello name="Regina" />
        <Cards />
    </>,
    document.querySelector('.app')
)
ReactDom.render(
        <Router>
            <div>
            <Nav />
                <Routes>
                    <Route path="/cards" element={<Cards />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>,
    document.querySelector('.app')
)
