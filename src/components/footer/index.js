import React, { Component } from 'react';
import Phone from '../phone';
import './style.scss';

export default class Footer extends Component {
    render(){
        return (
            <div className="footer">
                 <div className="info">
                    <Phone 
                        phoneNumber="+375 33 333 33 33"
                        timeOfWork="ПН-ЧТ: 11-23, ПТ-ВC: 12-00"
                        city="Витебск"
                    />   
                </div>
            </div>
        )
    }
}