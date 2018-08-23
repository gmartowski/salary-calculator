import React, { Component } from 'react';
import 'spectre.css';
import './app.less';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { FormComponent } from './Form/FormComponent';

export class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <FormComponent />
                <Footer />
            </div>
        );
    }
}
