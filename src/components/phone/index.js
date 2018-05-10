import React, { Component } from 'react';
import './style.scss';

export default class Phone extends Component {
    render() {
        const { phoneNumber, timeOfWork, city } = this.props;
        return (
            <div className="phone">
                <p className="number">{phoneNumber}</p>
                <p className="working"> {timeOfWork}
                    <br /> {city}
                </p>
            </div>
        )
    }
};
