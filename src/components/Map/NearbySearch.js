import { SearchMain, Button } from './NearbySearch.Style';
import { cafe, restaurant, shopping, gym } from '../../asset/MarkerIcons.js';
export default function NearbySearch({
	lat,
	lng,
	setMarkerLocation,
	setDetailOpen,
	setMarkerIcon,
	mapRef,
}) {
	const nearbySearch = (type) => {
		const position = new window.google.maps.LatLng(lat, lng);

		const map = new window.google.maps.Map(mapRef.current, {
			center: position,
			zoom: 16,
		});
		const request = {
			location: position,
			radius: '1000',
			type: [type],
		};
		const service = new window.google.maps.places.PlacesService(map);
		service.nearbySearch(request, (text) => {
			setMarkerLocation(text);
			setDetailOpen(true);
		});
	};

	return (
		<SearchMain>
			<Button
				onClick={() => {
					setMarkerIcon(cafe);
					nearbySearch('cafe');
				}}
			>
				카페
			</Button>
			<Button
				onClick={() => {
					setMarkerIcon(restaurant);
					nearbySearch('restaurant');
				}}
			>
				식당
			</Button>
			<Button
				onClick={() => {
					setMarkerIcon(shopping);
					nearbySearch('shopping_mall');
				}}
			>
				쇼핑
			</Button>
			<Button
				onClick={() => {
					setMarkerIcon(gym);
					nearbySearch('gym');
				}}
			>
				헬스장
			</Button>
		</SearchMain>
	);
}
