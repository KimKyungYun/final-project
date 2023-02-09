import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { setCenter } from '../../app/rootReducers';

export default function PlaceList() {
	const Places = useSelector((state) => state.Map.place);
	const dispatch = useDispatch();

	return (
		<div key='list' id='result-list' className='search'>
			{Places.map((item, i) => (
				<Button
					key={i}
					variant='outlined'
					value={item}
					onClick={() => dispatch(setCenter(item))}
				>
					<div style={{ marginTop: '20px' }}>
						<div>
							<h5>
								{i + 1}. {item.place_name}
							</h5>
							{item.road_address_name ? (
								<div>
									<span>주소 : {item.road_address_name}</span>
									<span>{item.address_name}</span>
								</div>
							) : (
								<span>{item.address_name}</span>
							)}
							<span>전화번호 : {item.phone}</span>
						</div>
					</div>
				</Button>
			))}
			<div id='pagination'></div>
		</div>
	);
}
