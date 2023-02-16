import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Left from '../asset/left.svg';
import Right from '../asset/right.svg';
import { OuterDiv, Page, PageButton, Image, MapButton } from './Home.Style.js';
import food from '../asset/img/food.png';
import cafe from '../asset/img/cafe2.png';
import shopping from '../asset/img/shopping.png';
import gym from '../asset/img/gym.png';
import map from '../asset/img/map.png';

export default function Home() {
	const [pageNum, setPageNum] = useState(1);
	const handlePage = (num) => {
		if (num > 5 || num < 1) {
			console.log(num);
			return;
		}
		setPageNum(num);
	};
	return (
		<OuterDiv>
			<Navbar />
			<PageButton direction='left' onClick={() => handlePage(pageNum - 1)}>
				<img src={Left} />
			</PageButton>
			<Page page={1} pageNum={pageNum}>
				<div>
					<h1>외식할 장소를 찾으신다구요?</h1>
					<h3>배가 고프시다면 식당을!</h3>
				</div>
				<Image src={food} alt='' />
			</Page>
			<Page page={2} pageNum={pageNum}>
				<div>
					<h1>식사 후 커피를 찾으신다구요?</h1>
					<h3>그렇다면 카페를!</h3>
				</div>
				<Image src={cafe} alt='' />
			</Page>
			<Page page={3} pageNum={pageNum}>
				<div>
					<h1>쇼핑을 하고싶으시다구요?</h1>
					<h3>그렇다면 쇼핑을!</h3>
				</div>
				<Image src={shopping} alt='' />
			</Page>
			<Page page={4} pageNum={pageNum}>
				<div>
					<h1>운동이 하고싶으시다구요?</h1>
					<h3>헬창이시라면 헬스장을!</h3>
				</div>
				<Image src={gym} alt='' />
			</Page>
			<Page page={5} pageNum={pageNum}>
				<div>
					<h1>위치를 원하시는 장소를 검색하신 후!</h1>
					<h2>오른쪽에 원하시는 카테고리를 선택하시면!</h2>
					<h3>주변 장소에 대한 정보를 알 수 있습니다!</h3>
					<MapButton onClick={() => (window.location.href = '/map')}>
						Search!
					</MapButton>
				</div>
				<Image src={map} alt='' />
			</Page>
			<PageButton direction='right' onClick={() => handlePage(pageNum + 1)}>
				<img src={Right} />
			</PageButton>
		</OuterDiv>
	);
}
