import Layout from '../common/Layout';
import {useEffect, useState} from 'react';

function Department() {
  let [num, setNum] = useState(0);

  //현재 useEffet의 의존성 배열은 비어있으므로
  useEffect(()=>{
    //컴포넌트가 생성시 한번만 실행
    console.log('department 생성');

    return ()=>{
      console.log('department 소멸')
    }
  },[]);

  //useEffect의 의존성 배열이 num으로 지정되어 있으므로
  useEffect(()=>{
    // num값이 변경될때마다 실행
    console.log(num);
  },[num]);

  return (
    <Layout name={'Department'}>
      <button onClick={()=>setNum(num++)}>증가</button>
      <h1>{num}</h1>
    </Layout>
  )
  
}

export default Department;

/*
  useEffect
  컴포넌트가 생성, 변경, 소멸될때마다의 life cycle (생명주기에 관한 hook)
  -컴포넌트 생성시 한번만 실행
  --useEffect의 의존성 배열이 비어있을때 

  -컴포넌트 소멸시 한번말 실행
  --useEffect의 의존성 배열이 비어있고 함수를 리턴으로 내보낼때 

  -컴포넌트가 변경될때마다 실행
  --useEffect에 특정 state값을 의존성 뱅려에 집어넣음
*/