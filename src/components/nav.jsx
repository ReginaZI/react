import React from 'react';
import {Link}  from 'react-router-dom';
 
export default class Nav extends React.Component{
    render(){
        return <div>
                <Link to="/">Главная</Link> 
                <Link to="/cards">Карточки</Link>
                <Link to="/acount">Профиль</Link>
              </div>;
    }
}