import { useEffect, useState } from 'react';
import styled from 'styled-components';
import default_place from '../../asset/img/default_place.png';
import '../../style/Style.css';
const google = window.google;
const DetailOuter = styled.div`
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
const DetailInnerTop = styled.div`
	width: 100%;
	height: 30%;
	padding: 0px;
	border-radius: 20px;
	overflow: hidden;
	img {
		height: 100%;
	}
`;
export default function MapDetail({
	listDetailOpen,
	setListDetailOpen,
	selectedList,
}) {
	return (
		<DetailOuter listDetailOpen={listDetailOpen}>
			<DetailInnerTop>
				<button onClick={() => setListDetailOpen(false)}>X</button>
				{selectedList && selectedList.photos ? (
					<img
						src={selectedList.photos[0].getUrl({
							maxWidth: 1000,
							maxHeight: 1000,
						})}
					></img>
				) : (
					<img src={default_place} />
				)}
			</DetailInnerTop>
			<div>
				{selectedList && selectedList.name ? (
					<h2>{selectedList.name} </h2>
				) : null}
				{selectedList && selectedList.formatted_phone_number ? (
					<h3>전화번호 :{selectedList.formatted_phone_number} </h3>
				) : null}
				{selectedList && selectedList.rating ? (
					<h3>평점 :{selectedList.rating} </h3>
				) : null}
				<h3>음식점</h3>
				<button onClick={() => console.log(selectedList)}></button>
			</div>
		</DetailOuter>
	);
}
