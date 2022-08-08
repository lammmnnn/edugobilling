import {useAppDispatch} from "../app/hooks";

import {addItemID} from '../features/counter/counterSlice';
import React from "react";

// @ts-ignore
export function Item1stRenderComp({ id, name, info, khois, price }) {
    const dispatch = useAppDispatch();

    const addingItem = () => {
        dispatch(addItemID({
            id: id,
            name: name,
            info: info,
            khois: khois,
            price: price
        }))
    }
    return (
        <>
            <tr>
                <td className="text-sm py-5 text-center">{name}</td>
                <td className="text-sm px-[10px]">{info}</td>
                <td className="text-sm text-center text-[#00649D] font-bold">{price}GO</td>
                <td className="text-center"><button onClick={addingItem}
                            className="text-sm font-bold text-[#00649D] bg-[#CCCCCC] w-[102px] h-9
                            rounded-[4px] hover:bg-gradient-to-r from-[#00649D] to-[#29ABE2] hover:text-white
                            hover:ease-in-out duration-300">Thêm vào giỏ</button></td>
            </tr>
        </>
    )
}