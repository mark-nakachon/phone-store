import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart';
import Modal from './components/Modal';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route exact path="/" component={ProductList} />
					<Route exact path="/details" component={Details} />
					<Route exact path="/cart" component={Cart} />
					<Route component={Default} />
				</Switch>
				<Modal />
			</React.Fragment>
		);
	}
}

export default App;
