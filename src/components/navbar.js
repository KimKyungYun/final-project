import * as React from 'react';
import '../style/Style.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavMain = styled.div`
	font-family: 'PuradakGentleGothicR';
	z-index: 20;
	height: 10vh;
	background-color: #fef01b;
	display: flex;
	justify-content: space-between;
	box-shadow:3px 3px 3px rgba(0, 0, 0, 0.3);

	align-items: center;
	text-align: center;
	a{
		color:black;
		}
	}
	h2 {
		margin-left: 3%;
		font-weight: bold;
		font-size: 40px;
	}
	h4 {
		margin-right:3%;
		font-size:20px;
	}
`;
export default function Navbar() {
	return (
		<NavMain>
			<h2>
				<Link to='/'>지도닭</Link>
			</h2>

			<h4>
				<Link to='/map'>지도</Link>
			</h4>
		</NavMain>
	);
}
