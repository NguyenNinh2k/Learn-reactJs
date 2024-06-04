import React from 'react';
import './BaiTapGameXucXac.css';
import XucXac from "./XucXac";
import ThongTinTroChoi from "./ThongTinTroChoi";

export default class BaiTapGameXucXacRedux extends React.Component {
    render() {
        return (
            <div className='game'>
                <div className='title-game text-center mt-5 display-4'>
                    Bai Tap Game Xuc Xac
                </div>

                <div className='row text-center'>
                    <div className='col-4'>
                        <button className='btnGame'>TÀI</button>
                    </div>
                    <div className='col-4'>
                        <XucXac />

                    </div>
                    <div className='col-4'>
                        <button className='btnGame'>XỈU</button>
                    </div>
                </div>

                <div className="thongTinTroChoi">
                    <ThongTinTroChoi />

                    <button className="btn btn-success p-2 display-4 mt-5">Play game</button>
                </div>

            </div>
        );
    }
}
