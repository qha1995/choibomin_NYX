import React from 'react';
import MainSlide from '../components/MainSlide';
import Itm from '../shop/Itm';
import MainTab from '../components/MainTab';
import '../css/Main.scss'
import MainCategory from '../components/MainCategory';
import MainProuctSlide from '../components/MainProuctSlide';

const Main = ({ shopList }) => {
    return (
        <>
            <MainSlide />
            <MainProuctSlide shopList={shopList} category={'pencil'} tit={'BEST PRODUCT'} des={'NYX 프로페셔널 메이크업'} arrow={true} dots={true} />
            <MainProuctSlide shopList={shopList} category={'liquid'} tit={'NEW PRODUCT'} des={'NYX 프로페셔널 메이크업'} arrow={true} dots={false} bg />
            <MainTab shopList={shopList} arrow={true} dots={false} />
        </>
    )
}

export default Main