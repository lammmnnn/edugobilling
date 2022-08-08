import React from 'react';
import {removeItem} from "../features/counter/counterSlice";
import {useAppDispatch} from "../app/hooks";

// @ts-ignore
export function CartRenderComp({ id, index, name, khois, price, popup }) {
    const dispatch = useAppDispatch();
    const removingItem = () => {
        dispatch(removeItem(id))
    };
    if (!popup) {
        return (
            <tr>
                <td id={id} className="text-sm py-5 text-center">{index}</td>
                <td className="text-xs px-2"><span className="text-sm font-bold">1296709991</span><p>Nguyễn Ngọc Hải</p>
                </td>
                <td className="text-[12.96px] px-2">{name}</td>
                <td className="text-[12.96px] px-2">Khối {khois}</td>
                <td className="text-[12.96px] px-2 font-bold">{price}GO</td>
                <td className="text-center"><img className="cursor-pointer mx-auto"
                                                 src={require("../img/delete_icon.png")}
                                                 onClick={removingItem} height="19px"/></td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td id={id} className="text-sm px-2 py-5">{index}</td>
                <td className="text-xs"><span className="text-sm font-bold">1296709991</span><p>Nguyễn Ngọc Hải</p>
                </td>
                <td className="text-[12.96px] px-2">{name}</td>
                <td className="text-[12.96px] px-2">Khối {khois}</td>
                <td className="text-[12.96px] px-2 font-bold">{price}GO</td>
            </tr>
        )
    }
}