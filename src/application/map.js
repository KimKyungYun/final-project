/*global kakao*/
import React, { useEffect } from 'react';

export default function Map() {
	useEffect(() => {
		let container = document.getElementById('map');
		let options = {
			center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
			level: 3,
		};
		let map = new kakao.maps.Map(container, options);
	}, []);

	return (
		<div>
			<div id='map' style={{ width: '1000px', height: '500px' }}></div>
		</div>
	);
}
