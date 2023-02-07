import * as React from 'react';
import '../style/Style.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function SearchAppBar() {
	return (
		<Box>
			<AppBar position='static'>
				<Toolbar
					sx={{ backgroundColor: '#fef01b', justifyContent: 'space-between' }}
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
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
