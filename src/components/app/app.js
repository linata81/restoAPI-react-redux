import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {

    return (
        <Router>
            <div className="app" style={{ background: `url(${Background}) center center/cover no-repeat` }} >
                <AppHeader total={50} />
                <Route path='/' exact component={MainPage} />
                <Route path='/cart' exact component={CartPage} />
            </div>
        </Router>
    )
}

export default App;