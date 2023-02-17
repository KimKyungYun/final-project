import styled from 'styled-components';

export const OuterDiv = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #fae699;
`;
export const Page = styled.div`
	z-index: 5;
	position: absolute;
	background-color: transparent;
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	transition: 2s;
	scroll: none;
	left: ${(props) =>
		props.page === props.pageNum
			? '0%'
			: props.pageNum > props.page
			? '-100%'
			: '100%'};

	opacity: ${(props) => (props.page === props.pageNum ? '100' : '0')};
`;
export const PageButton = styled.button`
	z-index: 15;
	position: absolute;
	height: 90vh;
	left: ${(props) => (props.direction === 'left' ? '0%' : null)};
	right: ${(props) => (props.direction === 'right' ? '0%' : null)};
	background-color: transparent;
	border: none;
	font-size: 30px;

	img {
		width: 50px;
		height: 50px;
	}
	&:hover {
		transition: 1s;
		background-color: #dbc775;
	}
	&:active {
		transition: 0s;
		background-color: #c6b46b;
	}
`;
export const Image = styled.img`
	width: 30%;
	animation: motion 1s linear 0s infinite alternate; 
  }
  @keyframes motion {
	0% {margin-top: -10px;} 
	100% {margin-top: 10px;} 
  }
`;
export const MapButton = styled.button`
	font-size: 50px;
	background-color: skyblue;
	border: 5px solid black;
	border-radius: 50px;
	color: white;
	box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
	a {
	}
	&:hover {
		color: black;
	}
	&:active {
		box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
		transform: translateY(4px);
	}
`;
