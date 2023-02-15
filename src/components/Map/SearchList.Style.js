import styled from 'styled-components';
import '../../style/Style.css';

export const DetailMain = styled.div`
	font-family: 'NanumSquareNeo-Variable';
	position: absolute;
	z-index: 12;
	background-color: white;
	width: 30%;
	height: 90%;
	left: ${(props) => (props.detailOpen ? '0%' : '-30%')};
	overflow-y: scroll;
	transition: 1s;
	border: 1px solid white;
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
	position: absolute;
	width: 40px;
	height: 40px;
	right: 0;
	background-color: white;
	border: none;
	float: right;
`;
export const InfoContainer = styled.div`
	width: 70%;
`;
export const ImageContainer = styled.div`
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
	max-height: 20%;
	overflow: hidden;
	background-color: transparent;
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
