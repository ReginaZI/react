import './styles/main.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cards from './components/cards/cards.jsx'
import Nav from './components/Navbar/nav.jsx'
import Header from './components/Header/header.jsx'
import Account from './components/account/account.jsx';
import Statistics from './components/statistics/statistics.jsx';


let namesData= [
    {id:1, name: 'Regina'},
    {id:2, name: 'Olya'},
    {id:3, name: 'Pavel'}
]
let newNames = [
    namesData.map ( n => <Account name={n.name} id={n.id} />)
]
const App = () => {
    return (
        <Router>
            <div className='wrapper'>
                <div  className='wrapper__left'>
                    <Nav />
                </div>
                <div  className='wrapper__right'>
                    <Header/>
                    <div className='wrapper__content'>
                        <Routes>
                            <Route path="/" element={<Account name={namesData[1].name} id={namesData[1].id} />} />
                            <Route path="/account" element={<Account name={namesData[0].name} id={namesData[0].id}/>} />
                            <Route path="/cards" element={<Cards />} />
                            <Route path="/statistics" element={<Statistics />} />
                        </Routes>
                    </div>
                </div>
         
        
            </div>
        </Router>
    )
  }
export default App;