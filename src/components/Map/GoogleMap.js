import { useState, memo } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import styled from 'styled-components';

const containerStyle = {
	width: '100%',
	height: '90vh',
	position: 'absolute',
};
const DetailButton = styled.button`
	border-radius: 10px;
	background-color: #2e2efe;
	color: white;
	&:active {
		background-color: #819ff7;
	}
`;
function Map({
	location,
	markerLocation,
	setDetailOpen,
	setSelectedList,
	setListDetailOpen,
	markerIcon,
	mapRef,
}) {
	const [activeMarker, setActiveMarker] = useState(null);
	const [markerClicked, setMarkerClicked] = useState(true);

	const handleActiveMarker = (marker) => {
		if (marker === activeMarker) {
			return;
		}
		setActiveMarker(marker);
	};

	return (
		<GoogleMap
			ref={mapRef}
			position='static'
			mapContainerStyle={containerStyle}
			center={{ lat: location.lat, lng: location.lng }}
			zoom={location.zoom}
			onClick={() => {
				setActiveMarker(null);
				setMarkerClicked(false);
			}}
		>
			{/* Child components, such as markers, info windows, etc. */}
			{markerLocation &&
				markerLocation.map((location) => (
					<Marker
						animation={window.google.maps.Animation.DROP}
						key={location.place_id}
						position={location.geometry.location}
						icon={{
							path: markerIcon,
							fillColor: 'yellow',
							fillOpacity: 0.9,
							scale: 1.5,
							strokeColor: 'orange',
							strokeWeight: 2,
						}}
						onClick={() => {
							setMarkerClicked(!markerClicked);
							handleActiveMarker(location.place_id);
						}}
					>
						{activeMarker === location.place_id && !markerClicked ? (
							<InfoWindow
								onCloseClick={() => {
									setMarkerClicked(false);
								}}
							>
								<div>
									{/* <img src={location.photos.photo_reference} alt='' /> */}
									<h4>{location.name}</h4>
									<h5>{location.vicinity ? location.vicinity : null}</h5>
									<span>{location.formatted_address}</span>
									<DetailButton
										onClick={() => {
											setSelectedList(location);
											setListDetailOpen(true);
											setDetailOpen(true);
										}}
									>
										상세정보
									</DetailButton>
								</div>
							</InfoWindow>
						) : null}
					</Marker>
				))}
			) ;
		</GoogleMap>
	);
}

export default memo(Map);
