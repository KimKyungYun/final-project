import { useState, useCallback, memo } from 'react';
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import { useRef } from 'react';
const google = window.google;
const containerStyle = {
	width: '100%',
	height: '91%',
};

function Map({ location, markerLocation }) {
	const [locationInfo, setLocationInfo] = useState();
	const [activeMarker, setActiveMarker] = useState(null);
	const [markerClicked, setMarkerClicked] = useState(false);

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
	});
	const [map, setMap] = useState(null);

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

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			onLoad={onLoad}
			center={{ lat: location.lat, lng: location.lng }}
			zoom={location.zoom}
			onUnmount={onUnmount}
			onClick={() => setActiveMarker(null)}
		>
			{/* Child components, such as markers, info windows, etc. */}
			{/* <NearbySearch></NearbySearch> */}
			{markerLocation &&
				markerLocation.map((location) => (
					<Marker
						key={location.place_id}
						position={location.geometry.location}
						onClick={() => {
							setActiveMarker(null);
							handleActiveMarker(location.place_id);
							console.log(activeMarker, location.place_id);
						}}
					>
						{activeMarker === location.place_id ? (
							<InfoWindow onCloseClick={() => setActiveMarker(null)}>
								<div>
									<img src={location.icon} alt='icon' />
									<h4>{location.name}</h4>
									<h5>{location.rating ? location.rating : null}</h5>
									<span>{location.formatted_address}</span>
									<button
										onClick={() => console.log(activeMarker, location.place_id)}
									>
										bt
									</button>
								</div>
							</InfoWindow>
						) : undefined}
					</Marker>
				))}
		</GoogleMap>
	) : (
		<></>
	);
}

export default memo(Map);
