import React from 'react';
import {DealListComp} from "./DealListComp";
import {SuggestionItemComp} from "./SuggestionItemComp";
import {QuicklinkComp} from "./QuicklinkComp";
import Countdown from "react-countdown";
import ReactDOM from 'react-dom';

// @ts-ignore
export function MainComp({ t }) {
    const formatTime = (time : number) => {
        return String(time).padStart(2, '0');
    }
    // @ts-ignore
    const renderer = ({ hours, minutes, seconds }) => {
            // Render a countdown
            return <><span>{formatTime(hours)}</span>
                :
                <span>{formatTime(minutes)}</span>
                :
                <span>{formatTime(seconds)}</span></>;
    }

    return (
        <main>
            <div className="contain container mb-2 pt-2 pt-lg-3">
                <div className="banner-wrapper row justify-content-around">
                    <div className="banner col-12 col-lg-8 pl-0 pr-0" id="banner-1">
                        <img className="img d-none d-lg-block" src={require('../img/banner/banner1.png')} alt='' />
                        <img className="img d-lg-none" src={require('../img/banner/banner1_mobile.png')} alt='' />
                    </div>
                    <div className="banner d-none d-lg-block col-lg-4 pl-0 pr-0 pl-2" id="banner-2">
                        <img className="img" src={require('../img/banner/banner2.png')} alt='' />
                    </div>
                </div>
                <div className="banner-wrapper row mb-2">
                    <div id="home_deal" className="d-none d-lg-block col-lg-7 pl-0 pr-0">
                        <div className="header row pt-3 pl-3 pr-3">
                            <div className="header-left">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" alt="flash deal"/>
                                <img width="21" src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
                                     alt="flash deal" />
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="flash deal" />
                            </div>
                            <div className="deal-countdown d-flex align-items-center">
                                <Countdown
                                    date={Date.now() + 86300000}
                                    renderer={renderer}
                                />
                            </div>
                            <div className="navigation">
                                <a href="#xemthem">{t('More')}</a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="list-deal row">
                                <DealListComp />
                            </div>
                        </div>
                    </div>
                    <div className="RewardHub-wrapper-smaller col-lg-5 pl-0 pr-0 pl-lg-2">
                        <div className="slick-slider banners-reward h-100">
                            <div className="h-100" id="banner banner-reward">
                                <img className="img d-none d-lg-block h-100" src={require('../img/banner/banner4.png')} alt='' />
                                <img className="img d-lg-none h-100" src={require('../img/banner/banner4_mobile.png')} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="Ad-wrap row align-items-center">
                    <div className="d-block d-lg-none"></div>
                    <a href="#ad1" className="col-4 col-lg-2 pr-1 pr-lg-2 pl-lg-0">
                        <img className="img" src={require('../img/ad/ad_lg1.png')} alt='' />
                    </a>
                    <a href="#ad2" className="col-4 col-lg-8 pl-0 pr-0">
                        <img className="img d-none d-lg-block h-100" src={require('../img/ad/ad_lg2.png')} alt='' />
                        <img className="img d-lg-none" src={require('../img/ad/ad_lg2_mobile.png')} alt='' />
                    </a>
                    <a href="#ad3" className="col-4 col-lg-2 pl-1 pl-lg-2 pr-lg-0">
                        <img className="img" src={require('../img/ad/ad_lg3.png')} alt='' />
                    </a>
                </div>
            </div>
            <div className="container mt-lg-2 pl-0 pr-0 pl-lg-3 pr-lg-3">
                <div className="bg-white row flex-nowrap">
                    <QuicklinkComp />
                </div>
            </div>
            <div className="container mt-2 pl-0 pr-0 pl-lg-3 pr-lg-3">
                <div className="suggestion-wrap">
                    <div className="header">
                        <h2>Gợi Ý Hôm Nay</h2>
                    </div>
                    <div className="style-infinite-scroll bg-white">
                        <div className="content row">
                            <SuggestionItemComp />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}