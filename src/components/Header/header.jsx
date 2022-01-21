import React, { createFactory } from 'react'
import h from './header.m.css' 


const Header = () => {
    return (
    <header className={h.header}>
      <div>
        <span>
          Аккаунт
        </span>
        <div className={h.breadcrumb}>
            <a href='' className={h.breadcrumb__tem}>
            Сотрудник 
            </a>
            <a href='' className={h.breadcrumb__tem}>
            Мои карты
            </a>
            <a href='' className={h.breadcrumb__tem}>
            Активные
            </a>
        </div>
      </div>
    </header>
    )
  };

export default Header;