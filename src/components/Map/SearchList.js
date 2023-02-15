import DEFAULT from '../../asset/img/default_place.png';
import {
	DetailMain,
	DetailSub,
	CloseButton,
	InfoContainer,
	ImageContainer,
	Image,
	DetailSubButton,
} from './SearchList.Style.js';

export default function SearchList({
	markerLocation,
	detailOpen,
	setDetailOpen,
}) {
	return (
		<DetailMain detailOpen={detailOpen}>
			<CloseButton
				onClick={() => {
					if (detailOpen) setDetailOpen(false);
				}}
			>
				X
			</CloseButton>
			{markerLocation &&
				markerLocation.map((location) => (
					<DetailSubButton key={location.place_id}>
						<DetailSub>
							<InfoContainer>
								<h4>{location.name}</h4>
								<h5>{location.vicinity}</h5>
								{console.log(location)}
								{location.rating && <h5>평점 : {location.rating}</h5>}
							</InfoContainer>
							<ImageContainer>
								<Image src={DEFAULT} alt='' />
							</ImageContainer>
						</DetailSub>
					</DetailSubButton>
				))}
		</DetailMain>
	);
}
