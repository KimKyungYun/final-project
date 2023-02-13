import styled, { keyframes } from 'styled-components';

export const smoothAppear = keyframes`
0% {
  opacity: 0;
  transform: translateY(-10%);
}
20% {
	opacity: 0;
}
100% {
  opacity: 1;
  transform: translateY(0);
} 
`;

export const smoothDisappear = keyframes`
0% {
  opacity: 1;
  transform: translateY(0);
}
100% {
  opacity: 0;
  transform: translateY(-5%);
}
`;

export const smoothUpDown = keyframes`
0% {
	opacity:1;
	transform: translateY(-30%);
}
100%{
	opacity:1;
	transform: translateY(0%);
}
`;
export const Outer = styled.div`
	font-family: '';
	min-width: 810px;
	min-height: 560px;
	overflow-y: auto;
	height: 100vh;
	::-webkit-scrollbar {
		display: none;
	}
	.inner {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 100px;
	}
`;

export const FirstPage = styled.div`
	background: #f9f2ed;
	.foods-enter {
		opacity: 0;
	}
	.foods-enter-active {
		opacity: 1;
		animation: ${smoothAppear} 1.4s;
	}
	.foods-exit {
		opacity: 1;
	}
	.foods-exit-active {
		opacity: 0;
		animation: ${smoothDisappear} 1.499s;
	}
`;
export const YumYum = styled.div`
	position: absolute;
	font-family: 'Pretendard700';
	width: 100px;
	height: 36px;
	left: 24px;
	top: 24px;
	font-size: 24px;
	transition: all 0.2s ease;
	animation: ${smoothAppear} 1s;
	:hover {
		transform: scale(1.15);
	}
`;
export const StartButton = styled.button`
	position: absolute;
	width: 100px;
	height: 36px;
	right: 24px;
	top: 24px;
	border-radius: 50px;
	border: none;
	background: white;
	box-shadow: 0px 0px 2px #e0d8b0;
	transition: all 0.2s ease;
	:hover {
		transform: scale(1.075);
		box-shadow: 0px 0px 6px #e0d8b0;
		font-family: 'Pretendard600';
	}
	animation: ${smoothAppear} 1s;
`;
export const Title = styled.div`
	display: flex;
	width: 342px;
	flex-direction: column;
	.maintitle {
		font-size: 60px;
		animation: ${smoothAppear} 1.4s;
		:hover {
			transition: all 0.2s ease;
			transform: scale(1.05);
		}
	}
	.subtitle {
		font-size: 36px;
		margin: 36px 0px 0px 8px;
		font-family: 'Pretendard500';
		animation: ${smoothAppear} 1.4s;
	}
	.subtitle-enter {
		opacity: 0;
	}
	.subtitle-enter-active {
		opacity: 1;
		animation: ${smoothAppear} 1.4s;
	}
	.subtitle-exit {
		opacity: 1;
	}
	.subtitle-exit-active {
		opacity: 0;
		animation: ${smoothDisappear} 1.4s;
	}
`;
export const ScrollArrow = styled.span`
	position: absolute;
	bottom: 0px;
	right: 50vw;
	font-size: 48px;
	animation: ${smoothUpDown} 1.2s infinite alternate;
	display: ${(props) => (props.showScrollArrow ? `block` : `none`)};
`;
export const MainPicture = styled.img`
	font-family: 'Pretendard500';
	font-size: 24px;
	background: none;
	height: 512px;
	width: 512px;
	animation: ${smoothAppear} 1.4s;
`;
export const Picture = styled.img`
	font-family: 'Pretendard500';
	font-size: 24px;
	background: none;
	height: 512px;
	width: 512px;
`;
export const Description = styled.div`
	font-size: 16px;
	margin: 36px 0px 0px 8px;
	font-family: 'Pretendard500';
`;
export const SecondPage = styled.div`
	background: #f9f2ed;
`;
export const ThirdPage = styled.div`
	background: #f9f2ed;
`;
