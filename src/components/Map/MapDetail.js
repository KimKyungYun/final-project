import styled from 'styled-components';
import default_place from '../../asset/img/default_place.png';
import '../../style/Style.css';

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
	border-radius: 20px;
	img {
		width: 100%;
	}
`;
const ReviewOuter = styled.div`
	width: 100%;
	${'' /* display: none; */}
`;
const Reviews = styled.div`
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
				{selectedList && selectedList.business_status ? (
					<h5>
						{selectedList.business_status == 'OPERATIONAL'
							? ' 영업중'
							: '영업준비중'}
					</h5>
				) : null}
				{selectedList && selectedList.vicinity ? (
					<h4>주소 :{selectedList.vicinity} </h4>
				) : null}
				{selectedList && selectedList.formatted_phone_number ? (
					<h4>전화번호 :{selectedList.formatted_phone_number} </h4>
				) : null}
				{selectedList && selectedList.rating ? (
					<h5>평점 :{selectedList.rating} </h5>
				) : null}

				<button onClick={() => console.log(selectedList)}></button>
			</div>
			{selectedList && selectedList.reviews ? (
				<ReviewOuter>
					<h3>리뷰</h3>
					{selectedList.reviews.map((review) => (
						<Reviews>
							<h3>{review.author_name}</h3>
							<h4>{review.text}</h4>
							<h5>{review.relative_time_description}</h5>
						</Reviews>
					))}
				</ReviewOuter>
			) : null}
		</DetailOuter>
	);
}
