import * as React from 'react';
import '../style/Style.css';
import styled from 'styled-components';

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
				<a href={process.env.PUBLIC_URL + '/'}>지도닭</a>
			</h2>

			<h4>
				<a href={process.env.PUBLIC_URL + '/map'}>지도</a>
			</h4>
		</NavMain>
	);
}
