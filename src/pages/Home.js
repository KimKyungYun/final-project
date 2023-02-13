import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Wrap = styled.div`
	margin: 5% auto;
	width: 100vw;
	.slick-prev:before {
		opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
		color: black; // 버튼 색은 검은색으로
		left: 0;
	}
	.slick-next:before {
		opacity: 1;
		color: black;
	}
`;
export default function Main() {
	const settings = {
		dots: true,
		lazyLoad: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 2,
	};
	return (
		<Wrap>
			<h2> Lazy Load</h2>
			<Slider {...settings}>
				<div>
					<h3>1</h3>
				</div>
				<div>
					<h3>2</h3>
				</div>
				<div>
					<h3>3</h3>
				</div>
				<div>
					<h3>4</h3>
				</div>
				<div>
					<h3>5</h3>
				</div>
				<div>
					<h3>6</h3>
				</div>
			</Slider>
		</Wrap>
	);
}
