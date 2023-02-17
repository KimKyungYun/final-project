import '../../style/Style.css';
import styled from 'styled-components';

export const DetailOuter = styled.div`
	font-family: 'NanumSquareNeo-Variable';
	transition: 1s;
	position: absolute;
	z-index: 11;
	background-color: white;
	display: flex;
	align-items: center;
	text-align: left;
	padding-left: 3px;
	flex-direction: column;
	width: 20%;
	height: 90vh;
	left: ${(props) => (props.listDetailOpen ? '26%' : '-20%')};
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
	button {
		position: absolute;
		right: 0;
		width: 30px;
		height: 30px;
		font-size: 20px;
		font-weight: bold;
		border: 1px solid silver;
		border-radius: 100px;
		background-color: white;
		&:hover {
			background-color: #d8d8d8;
		}
	}
`;
export const DetailInnerTop = styled.div`
	border-radius: 20px;
	img {
		width: 100%;
	}
`;
export const ReviewOuter = styled.div`
	width: 100%;
	${'' /* display: none; */}
`;
export const Reviews = styled.div`
	border-top: 1px solid silver;

	h3 {
		font-size: 15px;
	}
	h4 {
		font-weight: none;
		font-size: 13px;
	}
	h5 {
		font-size: 14px;
	}
`;
