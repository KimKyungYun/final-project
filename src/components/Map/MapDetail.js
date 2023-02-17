import default_place from '../../asset/img/default_place.png';
import { DetailOuter, DetailInnerTop } from './MapDetail.Style';

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
