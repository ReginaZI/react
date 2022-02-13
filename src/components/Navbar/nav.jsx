import React from 'react';
import {NavLink}  from 'react-router-dom';
import n from './nav.m.css' 



const Nav = () => {
    return (
        <div className={n.sidebar}>
        <NavLink to="/">Главная</NavLink> 
        <NavLink to="/cards">Карты</NavLink>
        <NavLink to="/account">Аккаунт</NavLink>
        <NavLink to="/statistics">Статистика</NavLink>
      </div>
    )
  };

export default Nav;