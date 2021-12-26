import * as $ from 'jquery'
import json from './assets/json.json'
import './styles/main.css'
import React from 'react'
import ReactDom from 'react-dom'
import AppHello from './components/hello/hello'



document.addEventListener('DOMContentLoaded', function(){


    ReactDom.render(
        <>
            <AppHello />
            <AppHello name="Regina" />
        </>,
        document.querySelector('.app')
    )
})