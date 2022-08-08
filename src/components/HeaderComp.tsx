import React from 'react';

// @ts-ignore
export function HeaderComp() {
    return (
        <header id="main-header" className="">
            <div className="flex flex-wrap mx-auto">
                <div className="w-full bg-[#00649D] ">
                    <div className="container mx-auto min-h-[25px] hidden lg:flex flex-row-reverse gap-[20px] px-[135px]">
                    <button className="text-xs text-white font-normal decoration-solid">Đăng xuất</button>
                    <button className="text-xs text-white font-bold">Xin chào: haingonzainhatvtconline</button>

                    </div>
                </div>
                <div className="w-full bg-white shadow-[0_4px_10px_0px_rgba(0,0,0,0.2)]">
                    <div className="container h-[60px] mx-auto flex flex-row justify-between w-full px-md-[135px] px-5">
                        <img src={require("../img/goedu_icon.png")} className="h-[40.18px] self-center" alt='' />
                        <div className="flex flex-row items-center">
                            <a href="#/doigo" data-index="0" className="w-[96px] hidden md:flex justify-center items-center">
                                <span className="text-sm font-bold text-[#00649D]">ĐỔI GO</span>
                            </a>
                            <a href="#/lichsu" data-index="1" className="w-[96px] hidden md:flex justify-center items-center">
                                <span className="text-sm font-bold text-[#00649D]">LỊCH SỬ</span>
                            </a>
                            <a href="#/baomat" data-index="2" className="w-[96px] hidden md:flex justify-center items-center mr-[26px]">
                                <span className="text-sm font-bold text-[#00649D]">BẢO MẬT</span>
                            </a>
                            <div className="flex justify-center items-center mr-[40px]">
                                <span className="text-sm font-bold text-[#00649D]">SỐ DƯ: 100 GO</span>
                            </div>
                            <button className="bg-[#00649D] h-[35px] w-[100px] rounded text-white
                            font-bold text-sm">Nạp GO</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}