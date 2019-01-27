import React, { Component } from 'react';
import Product from './components/Product';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();

//Provider provides all the information like provider in store

//Consumer to get all information we are able to grab like connect

class ProductProvider extends Component {
	state = {
		products: storeProducts,
		detailProduct: detailProduct
	};
	handleDetail = () => {
		console.log('hello from detail');
	};
	addToCart = () => {
		console.log('hello from add to cart');
	};
	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
