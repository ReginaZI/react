import React, { createFactory } from 'react'
import {NavLink}  from 'react-router-dom';
import h from './header.m.css' 


const Header = () => {
    return (
    <header className={h.header}>
      <div >
        <span>
          Аккаунт
        </span>
        <div className={h.breadcrumb}>
          <NavLink to="/account" className={h.breadcrumb__tem}>Сотрудник </NavLink>
          <NavLink to="/cards" className={h.breadcrumb__tem}>Мои карты</NavLink>
          <NavLink to="/cards-act" className={h.breadcrumb__tem}>Активные</NavLink>
        </div>
      </div>
    </header>
    )
  };

export default Header;