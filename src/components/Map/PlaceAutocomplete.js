import { StandaloneSearchBox } from '@react-google-maps/api';
import styled from 'styled-components';
import Geocode from 'react-geocode';
import './Geocoder';
import { basic } from '../../asset/MarkerIcons.js';
const Box = styled('div')`
	position: absolute;
	z-index: 10;
	top: 11%;
	left: 45%;
`;
export default function PlaceAutoComplete({
	setCenter,
	setDetailOpen,
	setMarkerIcon,
}) {
	const position = (val) => {
		Geocode.fromAddress(val).then(
			(response) => {
				const location = response.results[0];
				console.log(location);
				setCenter(
					{
						lat: location.geometry.location.lat,
						lng: location.geometry.location.lng,
						zoom: 16,
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

	return (
		<Box>
			<StandaloneSearchBox>
				<input
					onBlur={(e) => {
						position(e.target.value);
						setMarkerIcon(basic);
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
