import React, { Component } from 'react';
import Phone from '../phone';
import './style.scss';

const menu = ['Пицца', 'Напитки','Закуски'];

export default class Header extends Component {

    renderMenu() {
        return menu.map((item) => (
            <a> {item} </a>
        ));
    }

    render() {
        return (
            <header className="header">
                <div className="menu">
                    <div className="menuItems">
                        {this.renderMenu()}
                    </div>
                    <a className="icon">{String.fromCharCode(9776)}</a>
                    <div className="dropdown">
                        <input className="input" placeholder="поиск по сайту" />
                        <div className="dropdownContent"> </div>
                    </div>
                </div>
                <div className="info">
                    <Phone 
                        phoneNumber="+375 33 333 33 33"
                        timeOfWork="ПН-ЧТ: 11-23, ПТ-ВC: 12-00"
                        city="Витебск"
                    />
                </div>
                <div className="scroll">
                    <button className="button">Позвоните мне и примите заказ</button>
                </div>
          
            </header>
           
        )
    }
    
};
