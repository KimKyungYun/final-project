import styled from 'styled-components';

export const SearchMain = styled('div')`
	position: absolute;
	z-index: 10;
	display: flex;
	flex-direction: column;
	right: 1%;
	top: 20%;
`;
export const Button = styled('button')`
	background-color: white;
	border: none;
	height: 60px;
	width: 60px;
	margin: 5px;
	border-radius: 100px;
	font-size: 15px;
	box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
	&:hover {
		background-color: #d8d8d8;
	}
	&:active {
		box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
		transform: translateY(4px);
	}
`;
