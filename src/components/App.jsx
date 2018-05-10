import React, { Component } from 'react';
import Header from '../components/header';
import BigHeader from '../components/bigHeader';
import Footer from '../components/footer';
import Block from '../components/block';
import './style.scss';

const CONST = 'https://api.myjson.com/bins/1flf77';

export default class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentWillMount() {
        fetch(CONST).then(data => data.json().then(json => {
            this.setState({ products: json });
        }));
    };

    renderList() {
        return this.state.products.map((item, index) => (
            <Block key={index} {...item} />
        ));
    }

    render() {
        return (
            <div className="container">
                <Header />
                <BigHeader />
                <div className="list">
                  {this.renderList()}
                </div>
                <Footer />
            </div>
        )
    }
};
