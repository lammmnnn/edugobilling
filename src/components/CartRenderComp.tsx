import React from 'react';
import {removeItem} from "../features/counter/counterSlice";
import {useAppDispatch} from "../app/hooks";

// @ts-ignore
export function CartComp({ id, name, khois, price }) {
    const dispatch = useAppDispatch();
    const removingItem = () => {
        dispatch(removeItem(id))
    };

    return (
        <tr>
            <td className="text-sm py-5 text-center">{id}</td>
            <td className="text-sm px-2"><span>1296709991</span><p>Nguyễn Ngọc Hải</p></td>
            <td className="text-sm px-2">{name}</td>
            <td className="text-sm px-2">{khois}</td>
            <td className="text-sm px-2 font-bold">{price}</td>
            <td><img src={require("../img/delete_icon.png")} onClick={removingItem} height="19px" /></td>
        </tr>
    )
}