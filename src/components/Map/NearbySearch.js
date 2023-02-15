import styled from 'styled-components';
import { SearchMain, Button } from './NearbySearch.Style';
import { cafe, restaurant, shopping, gym } from '../../asset/MarkerIcons.js';
export default function NearbySearch({
	lat,
	lng,
	setMarkerLocation,
	setDetailOpen,
	setMarkerIcon,
}) {
	const search = (type) => {
		const Http = new XMLHttpRequest();
		const url =
			'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
			lat +
			',' +
			lng +
			'&radius=1000&type=' +
			type +
			'&key=' +
			process.env.REACT_APP_GOOGLE_MAP_API_KEY;

		Http.open('GET', url);
		Http.send();
		Http.onreadystatechange = (e) => {
			if (Http.readyState === 4 && Http.status === 200) {
				const text = JSON.parse(Http.responseText).results;
				setMarkerLocation(text);
				setDetailOpen(true);
				console.log(text);
			}
		};
	};

	return (
		<SearchMain>
			<Button
				onClick={() => {
					setMarkerIcon(cafe);
					search('cafe');
				}}
			>
				카페
			</Button>
			<Button
				onClick={() => {
					setMarkerIcon(restaurant);
					search('restaurant');
				}}
			>
				식당
			</Button>
			<Button
				onClick={() => {
					setMarkerIcon(shopping);
					search('shopping_mall');
				}}
			>
				쇼핑
			</Button>
			<Button
				onClick={() => {
					setMarkerIcon(gym);
					search('gym');
				}}
			>
				헬스장
			</Button>
		</SearchMain>
	);
}
