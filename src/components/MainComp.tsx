import React from 'react';
import ReactDOM from 'react-dom';
import {Item1stRenderComp} from "./Item1stRenderComp";
import {CartRenderComp} from "./CartRenderComp";
import {CartComp} from "./CartComp";
import MuiToggleButton from "@mui/material/ToggleButton";
import {styled, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {CartPopUpComp} from "./CartPopUpComp";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectPopup, selectPopup2, showPopup} from "../features/counter/counterSlice";
import {MiniPopup} from "./MiniPopup";

// @ts-ignore
export function MainComp() {
    const [khois, setKhois] = React.useState<string>('5')
    const popup = useAppSelector(selectPopup)
    const popup2 = useAppSelector(selectPopup2)
    const dispatch = useAppDispatch()
    const showPopupCall = () => {
        dispatch(showPopup())
    }


    const ToggleButton = styled(MuiToggleButton, {
        shouldForwardProp: (prop) => prop !== "selectedColor"
    })(() => ({
        "&.MuiToggleButtonGroup-grouped": {
            borderRadius: "5px !important",
            border: "1px solid #00649D !important",
            color: "black",
            fontWeight: "700",
            fontSize: "14px"
        },
        "&.Mui-selected, &.Mui-selected:hover": {
            color: "white !important",
            backgroundImage: "linear-gradient(to right, #00649D, #29ABE2)",
        }
    }));
    const handleKhois = (
        event: React.MouseEvent<HTMLElement>,
        newKhois: string) => {
        if (newKhois !== null) {
            setKhois(newKhois)
        }
    }

    return (
        <main className="bg-white pb-[66px]">

            <CartPopUpComp isTrigger={popup} />
            <MiniPopup isTrigger={popup2} />
            <div className="pt-4 md:pt-[45px] container mx-auto px-6 md:px-[135px] md:flex flex-row md:grid grid-cols-10 gap-3">
                <div className="col-span-3 ">
                    <div className="w-full md:w-11/12 h-[229px] rounded-[5px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-4 md:mb-0">
                        <div className="h-[83px] p-[20px] bg-[#00649D] rounded-[5px_5px_0_0]">
                            <label className="text-white font-normal">T??i kho???n gi??o vi??n</label>
                            <p className="text-white font-bold">lamxinh</p>
                        </div>
                        <div className="grid grid-rows-3 h-[144px]">
                            <button className="text-sm font-bold border-x border-b text-[#252525] px-[20px] text-left">IOE</button>
                            <button className="text-sm font-bold border-x border-b text-[#252525] px-[20px] text-left">IOK</button>
                            <button className="text-sm font-bold border-x text-[#252525] px-[20px] text-left">Wise Mentor</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-7">
                    <div className="w-full mb-[40px]">
                        <h3 className="font-bold text-[#00649D]">L??U ??:</h3>
                        <p className="text-[#3E3E3E] font-bold text-sm">T??? l??? quy ?????i: 01 Go = 1.000 VN??. <br/>1 n??m h???c: T??? 00h ng??y 01/06 ?????n 23h59 ng??y 31/05 c???a n??m k??? ti???p <br/>M???i T??i kho???n H???c sinh c?? th??? mua nhi???u g??i d???ch v??? cho m???t ho???c nhi???u kh???i l???p c???a c???p h???c hi???n t???i.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <button className="h-[40px] rounded-[5px] text-white text-sm font-bold bg-gradient-to-r from-[#00649D]
                        to-[#29ABE2]">?????I G??I D???CH V???</button>
                        <button className="h-[40px] rounded-[5px] border border-[#00649D] text-sm font-bold ">C??C G??I IOE HI???N C??</button>
                    </div>
                    <label className="text-[#DC0000] text-base font-bold italic">TH???C HI???N ?????I G??I:</label>
                    <p>Ch???n l???p:</p>
                    <ToggleButtonGroup value={khois} exclusive onChange={handleKhois} className="flex flex-row flex-wrap w-full gap-[8px] mb-[9px]">
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='3'>L???p 3</ToggleButton>
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='4'>L???p 4</ToggleButton>
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='5'>L???p 5</ToggleButton>
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='6'>L???p 6</ToggleButton>
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='7'>L???p 7</ToggleButton>
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='8'>L???p 8</ToggleButton>
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='9'>L???p 9</ToggleButton>
                    </ToggleButtonGroup>
                    <div className="flex flex-row w-full gap-4 p-[12px] bg-[#F0F2F5] rounded-[5px] mb-4">
                        <span className="text-sm text-[#00649D] font-bold">ID: 1290555000</span>
                        <span className="text-sm text-[#00649D] font-bold">H??? v?? t??n: Nguy???n Ng???c H???i</span>
                        <span className="text-sm text-[#00649D] font-bold">Ng??y sinh: 2008-08-08</span>
                    </div>
                    <div className="flex flex-row gap-4 mb-2">
                        <span className="font-bold text-base text-[#00649D]">S??? d?? GO: 100 GO</span>
                        <span className="font-bold text-base text-[#DC0000]">S??? d?? Ruby: 69 Ruby</span>
                    </div>
                    <div className="font-bold text-base text-[#00649D] mb-2">S??? GO c???n c??: 199 GO</div>
                    <div className="flex flex-row mb-4">
                        <input type="checkbox" /><span className="ml-1 font-bold text-base text-[#84b3cf]">D??ng ruby ?????i g??i</span>
                    </div>
                    <table className="mb-8 w-full">
                        <tr className="bg-[#CCCCCC]">
                            <th className="w-[197px] text-sm py-3">T??n g??i</th>
                            <th className="w-[448px] text-sm">Chi ti???t</th>
                            <th className="w-[105px] text-sm">Gi??</th>
                            <th className="w-[120px] text-sm">Tr???ng th??i</th>
                        </tr>
                        <Item1stRenderComp id='1'
                                           name="G??i Thi th??? kh??ng gi???i h???n"
                                           info="G???m thi th??? v?? h???c c??ng IOE theo kh???i c???a t??i kho???n trong 1 n??m h???c."
                                           khois={khois}
                                           price='299' />
                        <Item1stRenderComp id='2'
                                           name="G??i Thi th??? kh??ng gi???i h???n"
                                           info="H???c c??ng IOE theo kh???i l???p c???a t??i kho???n trong 1 n??m h???c. Gi?? 100 GO khuy???n m??i c??n 50 GO ??p d???ng ?????n ng??y 31/12/2021"
                                           khois={khois}
                                           price='299' />
                        <Item1stRenderComp id='3'
                                           name="G??i Thi th??? kh??ng gi???i h???n"
                                           info="H???c c??ng IOE theo kh???i l???p c???a t??i kho???n trong 1 n??m h???c. Gi?? 100 GO khuy???n m??i c??n 50 GO ??p d???ng ?????n ng??y 31/12/2021"
                                           khois={khois}
                                           price='299' />
                    </table>
                    <label className="text-[#DC0000] italic font-bold text-base"><img src="" height="16px" /> GI??? H??NG C???A B???N:</label>
                    <table className="w-full">
                        <tr className="bg-[#CCCCCC]">
                            <th className="w-[60px] text-sm py-3">STT</th>
                            <th className="w-[180px] text-sm">ID h???c sinh</th>
                            <th className="w-[420px] text-sm">T??n g??i</th>
                            <th className="w-[90px] text-sm">Kh???i</th>
                            <th className="w-[90px] text-sm">Gi??</th>
                            <th className="w-[30px]"></th>
                        </tr>
                        <CartComp popup={false} />
                    </table>
                    <button className="mt-8 w-full h-[40px] rounded-[5px] text-white text-sm font-bold bg-gradient-to-r from-[#00649D]
                        to-[#29ABE2]" onClick={showPopupCall}>XEM CHI TI???T GI??? H??NG</button>

                </div>
            </div>
        </main>
    )
}