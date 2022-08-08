import React from "react";
import {CartComp} from "./CartComp";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {hidePopup2, selectCartList} from "../features/counter/counterSlice";
import { StyleSheet, css } from 'aphrodite';


// @ts-ignore
export function MiniPopup({ isTrigger }) {
    const dispatch = useAppDispatch()
    const cartLength = String(useAppSelector(selectCartList).length).padStart(2, '0')

    return (isTrigger) ? (
        <div className="hidden md:flex flex-col justify-start h-[135px] w-[400px] p-4 fixed top-[12%] right-4
        shadow-[0_0_10px_0_rgba(0,0,0,0.3)] rounded-[2px] bg-white z-10">
            <div className="flex flex-row gap-[10px] w-full">
                <img src={require("../img/greentick.png")} height="21px" />
                <p className="text-base font-normal mb-4">Thêm thành công <span className="font-bold">{cartLength}</span> gói</p>
                <button onClick={() => {dispatch(hidePopup2())} } className="ml-auto"><img src={require("../img/Vector.png")} alt='' /></button>
            </div>
            <p className="font-normal text-sm mb-2">Xem danh sách các gói đã thêm vào danh sách để đổi</p>
            <button className="w-[150px] h-8 bg-[#00649D] rounded-[5px] text-white text-sm">Xem ngay</button>
        </div>
    ) : <></>
}