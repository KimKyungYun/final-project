import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Left from '../asset/left.svg';
import Right from '../asset/right.svg';
import { OuterDiv, Page, PageButton } from './Home.Style.js';

export default function Home() {
	const [pageNum, setPageNum] = useState(1);
	const handlePage = (num) => {
		if (num > 3 || num < 1) {
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
				<h1>첫째 페이지</h1>
				<h2>안녕</h2>
				<div>
					rmfaslknfasdfkln;asdkln;asdflnk;adsflnk;af;sldknaksfnld;l;afnkdslk;anfds;nklaffasnkdl;;kldnafs
				</div>
			</Page>
			<Page page={2} pageNum={pageNum}>
				<h1>둘째 페이지</h1>
				<h2>안녕</h2>
				<div>
					rmfaslknfasdfkln;asdkln;asdflnk;adsflnk;af;sldknaksfnld;l;afnkdslk;anfds;nklaffasnkdl;;kldnafs
				</div>
			</Page>
			<Page page={3} pageNum={pageNum}>
				<h1>셋째 페이지</h1>
				<h2>안녕 잘가</h2>
				<div>
					rmfaslknfasdfㅁㄴㅇㄻㄴㅇㄹㄴㄻㄴㅇㄻㄴㄹㄴㅇㄻㄴㄹㄴㅇㅁㄴㄹㄴㄻㄴㄹㅇkln;asdkln;asdflnk;adsflnk;af;sldknaksfnld;l;afnkdslk;anfds;nklaffasnkdl;;kldnafs
				</div>
			</Page>
			<PageButton direction='right' onClick={() => handlePage(pageNum + 1)}>
				<img src={Right} />
			</PageButton>
		</OuterDiv>
	);
}
