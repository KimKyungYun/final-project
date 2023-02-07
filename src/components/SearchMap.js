import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
	zIndex: 5,
	position: 'relative',
	border: '1px solid gray',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha('#fef01b', 0.15),
	'&:hover': {
		backgroundColor: alpha('#ebdd47', 0.25),
	},
	marginLeft: 0,
	width: '30%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '100%',
			'&:focus': {
				width: '100%',
			},
		},
	},
}));
export default function SearchMap({ handleSubmit, onChange, InputText }) {
	return (
		<form onSubmit={handleSubmit}>
			<Search>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					placeholder='Search…'
					inputProps={{ 'aria-label': 'search' }}
					onChange={onChange}
					value={InputText}
				/>
			</Search>
		</form>
	);
}
