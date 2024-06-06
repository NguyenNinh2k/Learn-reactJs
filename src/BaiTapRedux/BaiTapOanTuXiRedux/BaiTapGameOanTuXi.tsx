import React from "react";
import './BaiTapGameOanTuXi.css';
import Player from "./Player";
import Computer from "./Computer";
import ThongTinTroChoiOanTuXi from "./ThongTinTroChoiOanTuXi";

class BaiTapGameOanTuXi extends React.Component<any, any> {
    render() {
        return (
            <div className='gameOanTuXi'>
                <div className='row'>
                    <div className='col-4'>
                        <Player />
                    </div>
                    <div className='col-4'>
                       <ThongTinTroChoiOanTuXi />
                    </div>
                    <div className='col-4'>
                        <Computer />
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapGameOanTuXi;