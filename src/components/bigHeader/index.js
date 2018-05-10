import React, { Component } from 'react';
import logo from '../../assets/logo.jpg';
import './style.scss';

export default class BigHeader extends Component {
    render() {
        return (
            <div>
                <h1 className="bigHeader">Бесплатно доставляем пиццу
                    <p className="vitebsk"> по Витебску</p>
                </h1>
                
                <div className="headerImage">
                <img className ="image" src={logo} />
                </div>
            </div>
        )
       
        
    }
};