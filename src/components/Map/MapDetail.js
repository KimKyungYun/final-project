import default_place from '../../asset/img/default_place.png';
import {
	DetailOuter,
	DetailInnerTop,
	ReviewOuter,
	Reviews,
} from './MapDetail.Style';

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
						alt='detail_image'
					></img>
				) : (
					<img src={default_place} alt='default_image' />
				)}
			</DetailInnerTop>
			<div>
				{selectedList && selectedList.name ? (
					<h2>{selectedList.name} </h2>
				) : null}
				{selectedList && selectedList.business_status ? (
					<h5>
						{selectedList.business_status === 'OPERATIONAL'
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
			</div>
			{selectedList && selectedList.reviews ? (
				<ReviewOuter>
					<h3>리뷰</h3>
					{selectedList.reviews.map((review, index) => (
						<Reviews key={index}>
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
