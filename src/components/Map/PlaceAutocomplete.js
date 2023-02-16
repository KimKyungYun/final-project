import { StandaloneSearchBox } from '@react-google-maps/api';
import styled from 'styled-components';
import Geocode from 'react-geocode';
import './Geocoder';
import { useState } from 'react';
const Box = styled('div')`
	position: absolute;
	z-index: 10;
	top: 11%;
	left: 45%;
`;
export default function PlaceAutoComplete({
	setCenter,
	setDetailOpen,
	mapRef,
}) {
	let [id, setId] = useState();
	const position = (val) => {
		Geocode.fromAddress(val).then(
			(response) => {
				const location = response.results[0];
				console.log(location);
				setCenter(
					{
						lat: location.geometry.location.lat,
						lng: location.geometry.location.lng,
						zoom: 15,
					},
					[location]
				);
				setDetailOpen(true);
			},
			(error) => {
				console.error(error);
			}
		);
	};
	const getDetails = (text) => {
		const map = new window.google.maps.Map(mapRef, {});
		const request = {
			query: text,
			fields: [
				'name',
				'place_id',
				'geometry',
				'formatted_address',
				'photo',
				'type',
				'url',
				'formatted_phone_number',
				'rating',
				'reviews',
			],
		};
		const service = new window.google.maps.places.PlacesService(map);

		service.getDetails(request, (result) => {
			setCenter(
				{
					lat: result.geometry.location.lat,
					lng: result.geometry.location.lng,
					zoom: 15,
				},
				[result]
			);
			setDetailOpen(true);
		});
	};
	return (
		<Box>
			<StandaloneSearchBox>
				<input
					onBlur={(e) => {
						position(e.target.value);
					}}
					type='text'
					placeholder='장소 검색'
					style={{
						boxSizing: `border-box`,
						border: `1px solid transparent`,
						width: `30vw`,
						height: `32px`,
						padding: `0 12px`,
						borderRadius: `3px`,
						boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
						fontSize: `14px`,
						outline: `none`,
						textOverflow: `ellipses`,
						left: '40%',
						marginLeft: '-120px',
					}}
				/>
			</StandaloneSearchBox>
		</Box>
	);
}
