import * as React from 'react';
import '../style/Style.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PlaceAutoComplete from './Map/PlaceAutocomplete';

export default function SearchAppBar({ setCenter }) {
	return (
		<Box>
			<AppBar position='static'>
				<Toolbar
					sx={{
						backgroundColor: '#fef01b',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<a href='/'>
						<Typography
							id='title'
							variant='h5'
							noWrap
							component='div'
							sx={{
								color: 'black',
								display: { xs: 'none', sm: 'block' },
							}}
						>
							Todo With Place
						</Typography>
					</a>
					<PlaceAutoComplete setCenter={setCenter} />
					<Box sx={{ display: 'flex' }}>
						<a href='/'>
							<Typography
								id='title'
								variant='h6'
								noWrap
								component='div'
								sx={{
									color: '#9DA039',
									display: { xs: 'none', sm: 'block' },
								}}
							>
								Map
							</Typography>
						</a>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
