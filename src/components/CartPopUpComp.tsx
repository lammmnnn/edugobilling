import React from "react";
import {CartComp} from "./CartComp";
import {useAppDispatch} from "../app/hooks";
import {hidePopup} from "../features/counter/counterSlice";
import { StyleSheet, css } from 'aphrodite';


// @ts-ignore
export function CartPopUpComp({ isTrigger }) {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth()).padStart(2, '0')
    const yyyy = today.getFullYear()

    const dispatch = useAppDispatch()

    return (isTrigger) ? (
       <div className="w-full h-screen bg-black/50 fixed top-0 left-0 z-10">
           <div className="lg:w-[790px] sm:w-[600px] w-screen bg-white absolute top-[12%] left-0 sm:left-[50%]
           lg:ml-[-395px] sm:ml-[-300px] ">
               <div className="px-[50px] pt-8 relative">
                   <button className="absolute right-5 top-4 cursor-pointer"
                           onClick={()=> {dispatch(hidePopup())} }>
                       <img src={require("../img/Vector.png")} height='10px' alt='' /></button>
                   <div className="mb-4">
                       <h2 className="text-3xl font-bold">Danh sách gói đã chọn</h2>
                       <p className="text-sm"><span className="font-bold">Ngày:</span> {dd + '/' + mm + '/' + yyyy}</p>
                   </div>
                   <table className="border-none-all mb-4">
                       <tr className={css(styles.border_b_blue)}>
                           <td className="w-[60px] text-sm text-[#00649D] font-bold px-2 py-3">STT</td>
                           <td className="w-[180px] text-sm text-[#00649D] font-bold px-2">ID học sinh</td>
                           <td className="w-[270px] text-sm text-[#00649D] font-bold px-2">Tên gói</td>
                           <td className="w-[90px] text-sm text-[#00649D] font-bold px-2">Khối</td>
                           <td className="w-[90px] text-sm text-[#00649D] font-bold px-2">Giá</td>
                       </tr>
                        <CartComp popup={true} />
                   </table>
                   <div className="w-full h-6 flex justify-end mb-8">
                       <div className="w-1/2 flex flex-row justify-between pl-9">
                           <label className="text-sm text-[#00649D] font-bold flex items-center">Tổng</label>
                           <label className="text-base font-bold text-[#00649D] w-24 text-right">800GO</label>
                       </div>
                   </div>
               </div>
               <div className="bg-[#00649D] w-full">
                   <div className="px-[50px] py-4">
                       <div className="w-full h-[121px] grid grid-cols-2 border-b border-[#1973a7] mb-4">
                           <div className=" pr-4">
                                <p className="overflow-ellipsis w-full text-sm font-normal text-white leading-4
                                mb-2">Mã voucher chỉ áp dụng để đổi gói dịch vụ, không hoàn GO nếu giá dịch vụ gói thấp hơn giá trị Voucher.</p>
                                <div className="bg-white w-full h-10 rounded-[5px] flex flex-row shadow-[-2px_-3px_10px_0_rgba(255,255,0,0.2),4px_4px_10px_0_rgba(37,37,37,0.2)]">
                                    <input type="text" value="" className="border-none rounded-[5px] w-2/3" />
                                    <button className="text-sm font-bold w-1/3 bg-[#C4C4C4] border border-[#FFFFFF]
                                    rounded-[5px] text-white">Áp dụng</button>
                                </div>
                           </div>
                           <div className="w-full h-6 pl-9 flex flex-row justify-between">
                               <label className="text-sm font-bold text-white">Tổng GO giảm</label>
                               <label className="text-base font-bold text-white">- 00 GO</label>
                           </div>
                       </div>
                       <div className="w-full h-[124px] grid grid-cols-2 border-b border-white mb-4">
                           <div className="w-full h-[108px] grid grid-rows-4 gap-2">
                               <div className="w-full grid grid-cols-8 gap-3">
                                   <p className="col-span-2 text-sm font-bold text-[#FFC353] justify-start">Hỗ trợ nạp:</p>
                                   <p className="col-span-6 text-sm font-bold text-[#FFC353] justify-start">https://hotro.goplay.vn/</p>
                               </div>
                               <div className="w-full grid grid-cols-8 gap-3">
                                   <p className="col-span-2 text-sm font-bold text-white justify-start">Tổng đài:</p>
                                   <div className="col-span-6 text-sm font-normal flex flex-row justify-between">
                                       <p className="text-[#afcfe0] text-sm font-normal">1900.636.876</p>
                                       <span className="text-[#afcfe0] text-sm font-normal">Từ 8:30 đến 17:00 (T2-T6)</span>
                                   </div>
                               </div>
                               <div className="w-full grid grid-cols-8 gap-3">
                                   <p className="col-span-2 text-sm font-bold text-white justify-start">Hotline:</p>
                                   <div className="col-span-6 text-sm font-normal flex flex-row justify-between">
                                       <p className="text-[#afcfe0] text-sm font-normal">0984650154</p>
                                       <span className="text-[#afcfe0] text-sm font-normal">Từ 18:00 đến 21:00 (T2-T6)</span>
                                   </div>
                               </div>
                               <div className="w-full grid grid-cols-8 gap-3">
                                   <p className="col-span-2 text-sm font-bold text-white justify-start">Email:</p>
                                   <p className="text-[#afcfe0] col-span-6 text-sm font-normal">IOE@GO.VN</p>
                               </div>
                           </div>
                           <div className="w-full pl-9">
                               <div className="w-full h-6 flex flex-row justify-between mb-5">
                                   <label className="text-sm font-bold text-white">Tổng GO cần để đổi gói</label>
                                   <label className="text-base font-bold text-white">800 GO</label>
                               </div>
                               <button className="w-full h-10 font-bold text-sm text-[#00649D] bg-[#FFC353] rounded-[5px]
                               shadow-[-2px_-3px_10px_0_rgba(255,255,0,0.2),4px_4px_10px_0_rgba(37,37,37,0.2)]">Đổi ngay</button>
                           </div>
                       </div>
                       <div className="w-full h-5 mt-4 flex flex-start">
                           <img src={require("../img/Ellipse 26.png")} height='20px' alt='' />
                           <p className="mx-[10px] text-sm font-normal text-white">Thank you !</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    ) : <></>
}

const styles = StyleSheet.create({
    border_b_blue: {
        borderBottom: 'solid 1px #00649D'
    }
});