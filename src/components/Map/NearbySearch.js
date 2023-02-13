import styled from 'styled-components';
const SearchMain = styled('div')`
	position: absolute;
	z-index: 10;
	display: flex;
	flex-direction: column;
	right: 1%;
	top: 20%;
`;
const Button = styled('button')`
	background-color: white;
	border: none;
	margin: 5px;
	border-radius: 20px;
	box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
	&:hover {
		background-color: #d8d8d8;
	}
	&:active {
		box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
		transform: translateY(4px);
	}
`;
export default function NearbySearch({
	lat,
	lng,
	markerLocation,
	setMarkerLocation,
	setMarkerInformation,
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
				// locationInformation(text[0]);
				console.log(text);
			}
		};
	};

	return (
		<SearchMain>
			<Button onClick={() => search('cafe')}>카페</Button>
			<Button onClick={() => search('restaurant')}>식당</Button>
			<Button onClick={() => search('shopping_mall')}>쇼핑</Button>
			<Button onClick={() => search('gym')}>헬스장</Button>
		</SearchMain>
	);
}
