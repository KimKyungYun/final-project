import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ListIcon from '@mui/icons-material/List';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function Category({ setMarkerLocation }) {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<List
			sx={{
				top: '10%',
				borderRadius: '5px',
				zIndex: 10,
				position: 'absolute',
				borderRadius: `3px`,
				boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
				right: '10%',
				width: '100%',
				maxWidth: 200,
				bgcolor: 'background.paper',
				padding: '0',
			}}
			component='nav'
			aria-labelledby='nested-list-subheader'
		>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<ListIcon />
				</ListItemIcon>
				<ListItemText primary='즐겨찾기' />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout='auto' unmountOnExit>
				<List component='div' disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<StarBorder />
						</ListItemIcon>
						<ListItemText primary='Starred' />
					</ListItemButton>
				</List>
			</Collapse>
		</List>
	);
}
