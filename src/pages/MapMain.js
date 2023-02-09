import { useState } from 'react';
import '../style/Style.css';
import Navbar from '../components/navbar';
import SearchMap from '../components/Map/SearchMap';
import MapContainer from '../components/Map/MapContainer';
import PlaceList from '../components/Map/PlaceList';
import { useSelector } from 'react-redux';

export default function MapMain() {
	const center = useSelector((state) => state.Map.center);
	const [InputText, setInputText] = useState('');
	const [Place, setPlace] = useState('');

	const onChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setPlace(InputText);
		setInputText('');
	};

	return (
		<div>
			<Navbar />
			<div>
				<div id='Search-container'>
					<SearchMap
						handleSubmit={handleSubmit}
						onChange={onChange}
						InputText={InputText}
					/>
					<PlaceList />
				</div>
				<div id='map-container'>
					<MapContainer searchPlace={Place} x={center.x} y={center.y} />
				</div>
			</div>
		</div>
	);
}
