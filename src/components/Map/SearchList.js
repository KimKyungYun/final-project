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
	setListDetailOpen,
	setSelectedList,
	mapRef,
}) {
	const getDetail = (place) => {
		const map = new window.google.maps.Map(mapRef, {
			center: place.geometry.location,
			zoom: 18,
		});
		const request = {
			placeId: place.place_id,
			fields: [
				'name',
				'rating',
				'formatted_phone_number',
				'geometry',
				'formatted_address',
				'photo',
				'reviews',
				'business_status',
			],
		};
		const service = new window.google.maps.places.PlacesService(map);
		service.getDetails(request, (result) => {
			setSelectedList(result);
		});
	};
	return (
		<DetailMain detailOpen={detailOpen}>
			<CloseButton
				onClick={() => {
					if (detailOpen) setDetailOpen(false);
					setListDetailOpen(false);
				}}
			>
				X
			</CloseButton>
			{markerLocation &&
				markerLocation.map((location) => (
					<DetailSubButton
						key={location.place_id}
						onClick={() => {
							setListDetailOpen(true);
							getDetail(location);
						}}
					>
						<DetailSub>
							<InfoContainer>
								<h4>{location.name}</h4>
								<h5>{location.vicinity}</h5>
								<h5>{location.formatted_address}</h5>
							</InfoContainer>
							<ImageContainer>
								<Image
									src={location.photos ? location.photos[0].getUrl() : DEFAULT}
									alt=''
								/>
							</ImageContainer>
						</DetailSub>
					</DetailSubButton>
				))}
		</DetailMain>
	);
}
