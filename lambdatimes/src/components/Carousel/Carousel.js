import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photoData: [],
			counter: 0,
			currentPicture: ''
		};
	}
	componentDidMount() {
		fetch(carouselData)
			.then(
				this.setState({
					photoData: carouselData
				})
			)
			.catch((err) => console.log('error fetching data'));
	}

	leftClick = () => {
		this.state.counter === 0 ? this.setState({ counter: 3 }) : this.setState({ counter: this.state.counter - 1 });
	};

	rightClick = () => {
		this.state.counter === this.state.photoData.length
			? this.setState({ counter: 0 })
			: this.setState({ counter: this.state.counter + 1 });
	};

	selectedImage = () => {
		return <img src={this.state.photoData[this.state.counter]} style={{ display: 'block' }} />;
	};

	render() {
		return (
			<div className="carousel">
				<div className="left-button" onClick={this.leftClick}>
					{'<'}
				</div>
				{this.selectedImage()}
				<div className="right-button" onClick={this.rightClick}>
					{'>'}
				</div>
			</div>
		);
	}
}
