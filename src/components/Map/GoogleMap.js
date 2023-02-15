import { useState, useCallback, memo } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { DEFAULT } from '../../asset/MarkerIcons.js';

const containerStyle = {
	width: '100%',
	height: '90vh',
	position: 'absolute',
};

function Map({
	location,
	setLocation,
	markerLocation,
	setMap,
	setDetailOpen,
	markerIcon,
}) {
	const [activeMarker, setActiveMarker] = useState(null);
	const [markerClicked, setMarkerClicked] = useState(true);

	const onLoad = useCallback(function callback(map) {
		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	const handleActiveMarker = (marker) => {
		if (marker === activeMarker) {
			return;
		}
		setActiveMarker(marker);
	};

	return (
		<GoogleMap
			position='static'
			mapContainerStyle={containerStyle}
			onLoad={onLoad}
			center={{ lat: location.lat, lng: location.lng }}
			zoom={location.zoom}
			onUnmount={onUnmount}
			onClick={() => {
				setActiveMarker(null);
				setMarkerClicked(false);
			}}
		>
			{/* Child components, such as markers, info windows, etc. */}
			{markerLocation &&
				markerLocation.map((location) => (
					<Marker
						key={location.place_id}
						position={location.geometry.location}
						icon={{
							path: markerIcon ? markerIcon : DEFAULT,
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
						{activeMarker == location.place_id && !markerClicked ? (
							<InfoWindow
								onCloseClick={() => {
									setMarkerClicked(false);
								}}
							>
								<div>
									{/* <img src={location.photos.photo_reference} alt='' /> */}
									<h4>{location.name}</h4>
									<h5>{location.rating ? location.rating : null}</h5>
									<span>{location.formatted_address}</span>
									<button onClick={() => setDetailOpen(true)}>상세정보</button>
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
