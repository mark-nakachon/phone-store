import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Payments extends Component {
	render() {
		return (
			<div className="container text-center ">
				<div className="alert alert-success text-capitalize my-5">your payment is succesful</div>
				<p>product will be delivered to your address</p>
				<Link to="/">
					<button className="btn btn-outline-danger">go to products</button>
				</Link>
			</div>
		);
	}
}

export default Payments;
