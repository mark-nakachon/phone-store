import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './ButtonContainer';
export default class Details extends Component {
	render() {
		return (
			<div>
				<ProductConsumer>
					{(value) => {
						const { id, company, img, info, price, title, inCart } = value.detailProduct;

						return (
							<div className="container py-5">
								<div className="row">
									<div className="col text-center mx-auto text-slanted text-blue">
										<h1>{title}</h1>
									</div>
								</div>
								{/* product info*/}
								<div className="row">
									<div className="col-10 mx-auto col-md-6 my-3">
										<img src={img} className="img-fluid" alt="product" />
									</div>
									{/* product text*/}
									<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
										<h2>model :{title}</h2>
										<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
											this is made by :<span>{company}</span>
										</h4>
										<h4 className="text-blue">
											<strong>
												price: <span>$</span>
												{price}
											</strong>
										</h4>
										<p className="text-capitalize font-weight-bold mt-3 mb-0">
											<h3>some info about the product</h3>
											<p className="tet-muted lead ">{info}</p>
										</p>
										{/*buttons*/}
										<div className="d-flex justify-content-center">
											<Link to="/" className="mr-4">
												<ButtonContainer>back to products</ButtonContainer>
											</Link>
											<ButtonContainer
												disabled={inCart ? true : false}
												className="btn btn-lg btn-outline-secondary"
												onClick={() => {
													value.addToCart(id);
													value.openModal(id);
												}}
												cart="true"
											>
												{inCart ? 'incart' : 'add to cart'}
											</ButtonContainer>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</ProductConsumer>
			</div>
		);
	}
}
