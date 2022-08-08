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
                            <label className="text-white font-normal">Tài khoản giáo viên</label>
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
                        <h3 className="font-bold text-[#00649D]">LƯU Ý:</h3>
                        <p className="text-[#3E3E3E] font-bold text-sm">Tỷ lệ quy đổi: 01 Go = 1.000 VNĐ. <br/>1 năm học: Từ 00h ngày 01/06 đến 23h59 ngày 31/05 của năm kế tiếp <br/>Mỗi Tài khoản Học sinh có thể mua nhiều gói dịch vụ cho một hoặc nhiều khối lớp của cấp học hiện tại.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <button className="h-[40px] rounded-[5px] text-white text-sm font-bold bg-gradient-to-r from-[#00649D]
                        to-[#29ABE2]">ĐỔI GÓI DỊCH VỤ</button>
                        <button className="h-[40px] rounded-[5px] border border-[#00649D] text-sm font-bold ">CÁC GÓI IOE HIỆN CÓ</button>
                    </div>
                    <label className="text-[#DC0000] text-base font-bold italic">THỰC HIỆN ĐỔI GÓI:</label>
                    <p>Chọn lớp:</p>
                    <ToggleButtonGroup value={khois} exclusive onChange={handleKhois} className="flex flex-row flex-wrap w-full gap-[8px] mb-[9px]">
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='3'>Lớp 3</ToggleButton>
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='4'>Lớp 4</ToggleButton>
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='5'>Lớp 5</ToggleButton>
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='6'>Lớp 6</ToggleButton>
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='7'>Lớp 7</ToggleButton>
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='8'>Lớp 8</ToggleButton>
                        <ToggleButton //@ts-ignore
                            className="w-[78px] h-[37px]" selectedColor="" value='9'>Lớp 9</ToggleButton>
                    </ToggleButtonGroup>
                    <div className="flex flex-row w-full gap-4 p-[12px] bg-[#F0F2F5] rounded-[5px] mb-4">
                        <span className="text-sm text-[#00649D] font-bold">ID: 1290555000</span>
                        <span className="text-sm text-[#00649D] font-bold">Họ và tên: Nguyễn Ngọc Hải</span>
                        <span className="text-sm text-[#00649D] font-bold">Ngày sinh: 2008-08-08</span>
                    </div>
                    <div className="flex flex-row gap-4 mb-2">
                        <span className="font-bold text-base text-[#00649D]">Số dư GO: 100 GO</span>
                        <span className="font-bold text-base text-[#DC0000]">Số dư Ruby: 69 Ruby</span>
                    </div>
                    <div className="font-bold text-base text-[#00649D] mb-2">Số GO cần có: 199 GO</div>
                    <div className="flex flex-row mb-4">
                        <input type="checkbox" /><span className="ml-1 font-bold text-base text-[#84b3cf]">Dùng ruby đổi gói</span>
                    </div>
                    <table className="mb-8 w-full">
                        <tr className="bg-[#CCCCCC]">
                            <th className="w-[197px] text-sm py-3">Tên gói</th>
                            <th className="w-[448px] text-sm">Chi tiết</th>
                            <th className="w-[105px] text-sm">Giá</th>
                            <th className="w-[120px] text-sm">Trạng thái</th>
                        </tr>
                        <Item1stRenderComp id='1'
                                           name="Gói Thi thử không giới hạn"
                                           info="Gồm thi thử và học cùng IOE theo khối của tài khoản trong 1 năm học."
                                           khois={khois}
                                           price='299' />
                        <Item1stRenderComp id='2'
                                           name="Gói Thi thử không giới hạn"
                                           info="Học cùng IOE theo khối lớp của tài khoản trong 1 năm học. Giá 100 GO khuyến mãi còn 50 GO áp dụng đến ngày 31/12/2021"
                                           khois={khois}
                                           price='299' />
                        <Item1stRenderComp id='3'
                                           name="Gói Thi thử không giới hạn"
                                           info="Học cùng IOE theo khối lớp của tài khoản trong 1 năm học. Giá 100 GO khuyến mãi còn 50 GO áp dụng đến ngày 31/12/2021"
                                           khois={khois}
                                           price='299' />
                    </table>
                    <label className="text-[#DC0000] italic font-bold text-base"><img src="" height="16px" /> GIỎ HÀNG CỦA BẠN:</label>
                    <table className="w-full">
                        <tr className="bg-[#CCCCCC]">
                            <th className="w-[60px] text-sm py-3">STT</th>
                            <th className="w-[180px] text-sm">ID học sinh</th>
                            <th className="w-[420px] text-sm">Tên gói</th>
                            <th className="w-[90px] text-sm">Khối</th>
                            <th className="w-[90px] text-sm">Giá</th>
                            <th className="w-[30px]"></th>
                        </tr>
                        <CartComp popup={false} />
                    </table>
                    <button className="mt-8 w-full h-[40px] rounded-[5px] text-white text-sm font-bold bg-gradient-to-r from-[#00649D]
                        to-[#29ABE2]" onClick={showPopupCall}>XEM CHI TIẾT GIỎ HÀNG</button>

                </div>
            </div>
        </main>
    )
}