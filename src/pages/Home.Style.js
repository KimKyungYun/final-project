import styled from 'styled-components';

export const OuterDiv = styled.div`
	width: 100%;
	background-color: #868a08;
`;
export const Page = styled.div`
	z-index: 5;
	position: absolute;
	width: 100%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	transition: 2s;
	scroll: none;
	opacity: ${(props) => (props.page == props.pageNum ? '100' : '0')};
`;
export const PageButton = styled.button`
	z-index: 15;
	position: absolute;
	height: 90vh;
	left: ${(props) => (props.direction == 'left' ? '0%' : null)};
	right: ${(props) => (props.direction == 'right' ? '0%' : null)};
	background-color: transparent;
	border: none;
	font-size: 30px;

	img {
		width: 50px;
		height: 50px;
	}
	&:hover {
		transition: 1s;
		background-color: #d8d8d8;
	}
	&:active {
		transition: 0s;
		background-color: #a4a4a4;
	}
`;
