import Navbar from '../components/Navbar';
import { LoadScript } from '@react-google-maps/api';
import Map from '../components/Map/GoogleMap';
import NearbySearch from '../components/Map/NearbySearch';
import '../style/Style.css';
import { useRef, useState } from 'react';
import PlaceAutoComplete from '../components/Map/PlaceAutocomplete';
import SearchList from '../components/Map/SearchList';
import MapDetail from '../components/Map/MapDetail';

export default function GoogleMap() {
	const mapRef = useRef();
	const [map, setMap] = useState(null);
	const [detailOpen, setDetailOpen] = useState(null);
	const [location, setLocation] = useState({
		lat: 37.5379868,
		lng: 127.2045594,
		zoom: 15,
	});
	const [markerLocation, setMarkerLocation] = useState(null);
	const [markerIcon, setMarkerIcon] = useState(null);
	const [listDetailOpen, setListDetailOpen] = useState(false);
	const [selectedList, setSelectedList] = useState(null);

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
			<Map
				location={location}
				markerLocation={markerLocation}
				setMap={setMap}
				setDetailOpen={setDetailOpen}
				markerIcon={markerIcon}
				mapRef={mapRef}
			/>
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
				mapRef={mapRef}
			/>
			<SearchList
				markerLocation={markerLocation}
				detailOpen={detailOpen}
				setDetailOpen={setDetailOpen}
				setListDetailOpen={setListDetailOpen}
				setSelectedList={setSelectedList}
				mapRef={mapRef}
			/>
			<MapDetail
				listDetailOpen={listDetailOpen}
				setListDetailOpen={setListDetailOpen}
				selectedList={selectedList}
				map={map}
				mapRef={mapRef}
			/>
		</LoadScript>
	);
}
