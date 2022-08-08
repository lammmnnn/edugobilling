import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import {HeaderComp} from "./components/HeaderComp";
import {MainComp} from "./components/MainComp";

function App() {
  return (
      <Router>
        <div className="App">
          <div className='home-page'>
            <HeaderComp />
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<MainComp />} />
            </Routes>
          </div>
        </div>
        <footer className="bg-[#00649D]">
            <div className="text-center p-[22px]">
                <p>Địa chỉ: Tầng 12 - VTC Online - 18 Tam Trinh - Hà Nội</p>
                <p>Hotline: <span className="font-bold">1900.636.876</span> nhánh 3 ( T2~T6, giờ hành chính)
                    | Email: <span className="font-bold">hotro@go.vn</span></p>
                <p><a href="">Câu hỏi thường gặp</a> | <a>Điều khoản dịch vụ</a> | <a>Chính sách bảo mật</a></p>
                <p className="italic">Copyright © GoEdu - VTC Online. All Rights Reserved.</p>
            </div>
        </footer>
      </Router>
  );
}

export default App;
