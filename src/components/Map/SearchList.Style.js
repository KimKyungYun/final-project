import styled from 'styled-components';
import '../../style/Style.css';

export const DetailMain = styled.div`
	font-family: 'NanumSquareNeo-Variable';
	position: absolute;
	z-index: 12;
	background-color: white;
	width: 25%;
	justify-content: space-between;
	height: 90vh;
	left: ${(props) => (props.detailOpen ? '0%' : '-30%')};
	overflow-y: scroll;
	transition: 1s;
	border: 1px solid silver;
	border-radius: 5px;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: #ccc;
	}
`;
export const DetailSub = styled.div`
	border: none;
	overflow: scroll;
	display: flex;
	align-items: center;
	width: 100%;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: #ccc;
	}
`;
export const CloseButton = styled.button`
	z-index: 20;
	border-radius: 100px;
	position: absolute;
	width: 30px;
	height: 30px;
	font-size: 20px;
	font-weight: bold;
	right: 0;
	background-color: white;
	border: 1px solid silver;
	float: right;
	&:hover {
		background-color: #d8d8d8;
	}
`;
export const InfoContainer = styled.div`
	width: 70%;
`;
export const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	border: 1px siver solid;
	border-radius: 10px;
	overflow: hidden;
`;
export const Image = styled.img`
	width: 200px;
	height: 100px;
`;
export const DetailSubButton = styled.button`
	width: 100%;
	max-height: 50%;
	overflow: hidden;
	background-color: transparent;
	display: flex;
	align-items: center;
	border: 0;
	box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.24);
	transition: 0.5s;
	&:hover {
		${'' /* box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24); */}
		background-color: #d8d8d8;
	}
	&:active {
		transition: 0s;
		box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
		transform: translateY(2px);
	}
`;
