import React, { Component } from 'react';
import season from '../../assets/season.jpg';
import './style.scss';

export default class Block extends Component {
    render() {
        const { src, name, description } = this.props; // достаем название, картинку и описание пиццы
        console.log('пришло в пропс: ', this.props);
        return (
                <div className="pizza">
                    <h1>{name}</h1>
                    <img src={src} />
                    <p>{description}</p>
                </div>
        )
    }
}