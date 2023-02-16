import DEFAULT from '../../asset/img/default_place.png';
import { useState } from 'react';
import {
	DetailMain,
	DetailSub,
	CloseButton,
	InfoContainer,
	ImageContainer,
	Image,
	DetailSubButton,
} from './SearchList.Style.js';

export default function SearchList({
	markerLocation,
	detailOpen,
	setDetailOpen,
	setListDetailOpen,
	setSelectedList,
}) {
	return (
		<DetailMain detailOpen={detailOpen}>
			<CloseButton
				onClick={() => {
					if (detailOpen) setDetailOpen(false);
					setListDetailOpen(false);
				}}
			>
				X
			</CloseButton>
			{markerLocation &&
				markerLocation.map((location) => (
					<DetailSubButton
						key={location.place_id}
						onClick={() => {
							setListDetailOpen(true);
							setSelectedList(location);
						}}
					>
						<DetailSub>
							<InfoContainer>
								<h4>{location.name}</h4>
								<h5>{location.vicinity}</h5>
								<h5>{location.formatted_address}</h5>
							</InfoContainer>
							<ImageContainer>
								<Image
									src={location.photos ? location.photos[0].getUrl() : DEFAULT}
									alt=''
								/>
							</ImageContainer>
						</DetailSub>
					</DetailSubButton>
				))}
		</DetailMain>
	);
}
