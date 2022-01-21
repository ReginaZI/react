import React from 'react';
import {Link}  from 'react-router-dom';
import n from './nav.m.css' 



const Nav = () => {
    return (
        <div className={n.sidebar}>
        <Link to="/">Главная</Link> 
        <Link to="/cards">Карточки</Link>
        <Link to="/acount">Аккаунт</Link>
      </div>
    )
  };

export default Nav;