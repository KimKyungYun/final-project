import Navbar from '../components/navbar';
import Map from '../components/Map/GoogleMap';
import NearbySearch from '../components/Map/NearbySearch';
import Category from '../components/Map/Category';
import '../style/Style.css';
import { useState } from 'react';

export default function GoogleMap() {
	const [location, setLocation] = useState({
		lat: 37.5379868,
		lng: 127.2045594,
		zoom: 15,
	});
	const [markerLocation, setMarkerLocation] = useState(null);
	const [markerInformation, setMarkerInformation] = useState([]);
	const setCenter = (value, marker) => {
		setLocation(value);
		setMarkerLocation(marker);
	};
	return (
		<div id='google-map'>
			<Navbar setCenter={setCenter} />
			<NearbySearch
				lat={location.lat}
				lng={location.lng}
				setMarkerLocation={setMarkerLocation}
			/>
			{/* <Category setMarkerLocation={setMarkerLocation} /> */}
			<Map location={location} markerLocation={markerLocation} />
		</div>
	);
}
