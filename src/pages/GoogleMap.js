import Navbar from '../components/Navbar';
import { LoadScript } from '@react-google-maps/api';
import Map from '../components/Map/GoogleMap';
import NearbySearch from '../components/Map/NearbySearch';
import '../style/Style.css';
import { useState } from 'react';
import PlaceAutoComplete from '../components/Map/PlaceAutocomplete';
import SearchList from '../components/Map/SearchList';

export default function GoogleMap() {
	const [map, setMap] = useState(null);
	const [detailOpen, setDetailOpen] = useState(null);
	const [location, setLocation] = useState({
		lat: 37.5379868,
		lng: 127.2045594,
		zoom: 15,
	});
	const [markerLocation, setMarkerLocation] = useState(null);
	const [markerIcon, setMarkerIcon] = useState(null);
	const setCenter = (value, marker) => {
		setLocation(value);
		setMarkerLocation(marker);
	};
	return (
		<LoadScript
			googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
			libraries={['places']}
		>
			<Navbar />
			<PlaceAutoComplete
				setCenter={setCenter}
				setMarkerLocation={setMarkerLocation}
				setDetailOpen={setDetailOpen}
				map={map}
			/>
			<NearbySearch
				lat={location.lat}
				lng={location.lng}
				setLocation={setLocation}
				setMarkerLocation={setMarkerLocation}
				setDetailOpen={setDetailOpen}
				setMarkerIcon={setMarkerIcon}
			/>
			<SearchList
				markerLocation={markerLocation}
				detailOpen={detailOpen}
				setDetailOpen={setDetailOpen}
			/>
			<Map
				location={location}
				setLocation={setLocation}
				markerLocation={markerLocation}
				setMap={setMap}
				setDetailOpen={setDetailOpen}
				markerIcon={markerIcon}
			/>
		</LoadScript>
	);
}
