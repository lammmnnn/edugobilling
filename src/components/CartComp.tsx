import {CartRenderComp} from "./CartRenderComp";
import {selectCartList} from "../features/counter/counterSlice";
import {useAppSelector} from "../app/hooks";


// @ts-ignore
export function CartComp({ popup }) {
    const cartList = useAppSelector(selectCartList);
    let cartDisplayDiv;

    if (cartList.length > 0) {
        // @ts-ignore
        cartDisplayDiv = cartList.map((item, index) =>

            <CartRenderComp // @ts-ignore
            index={index+1} id={item.id} name={item.name} khois={item.khois} price={item.price} popup={popup} />
            )
    } else {
        cartDisplayDiv =
            <></>
    }


    return (
        <>
            {cartDisplayDiv}
        </>
    )
}