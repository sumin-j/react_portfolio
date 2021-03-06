import { Route, Switch } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Visual from './components/main/Visual';
import Content from './components/main/Content';

//sub
import Department from './components/sub/Department';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Youtube from './components/sub/Youtube';
import Location from './components/sub/Location';
import Join from './components/sub/Join';

import './scss/style.scss';

function App() {
	return (
		<>
	
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<Content />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/department' component={Department}/>
				
			<Route path='/community' component={Community}/>
			
			<Route path='/gallery' component={Gallery}/>
				
			<Route path='/youtube' component={Youtube}/>
				
			<Route path='/location' component={Location}/>
				
			<Route path='/join' component={Join}/>
				

			<Footer />
		</>
	);
}

export default App;

/*
	SSR vs CSR
	SSR (Server Side Rendering)
	-페이지 이동할때마다 일일이 서버쪽에 출력될 html파일을 요청
	-장점 : 초기 로딩속도가 빠름 , 검색최적화 SEO
	-단점 : 페이지 이동시, 같은 페이지안에서 컨텐츠가 동적으로 바꿔야될때 사용성 낮음

	CSR (Client Side Rendering)
	-초기에 화면에 출력된 모든 정보 데이터를 chunk단위로 모두 불러옴
	-장점 : 같은 페이지 안에서 서로 다른 컨텐츠를 실시간으로 변경하면서 출력하므로 사용성이 좋음
	-단점 : 초기 로딩속도가 느림, 검색엔진 비최적화
*/

/*
	Switch 
	라우터 연결시 중복되는 url이 있을때 더 구체적인 라우터 하나만 적용
*/