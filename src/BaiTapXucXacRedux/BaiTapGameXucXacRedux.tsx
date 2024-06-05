import React from 'react';
import './BaiTapGameXucXac.css';
import XucXac from "./XucXac";
import ThongTinTroChoi from "./ThongTinTroChoi";
import {connect} from "react-redux";

class BaiTapGameXucXacRedux extends React.Component<any,any> {
    render() {
        return (
            <div className='game'>
                <div className='title-game text-center mt-5 display-4'>
                    Bai Tap Game Xuc Xac
                </div>
                <div className='row text-center'>
                    <div className='col-4'>
                        <button className='btnGame' onClick={() => {this.props.datCuoc(true)}}>TÀI</button>
                    </div>
                    <div className='col-4'>
                        <XucXac />
                    </div>
                    <div className='col-4'>
                        <button className='btnGame' onClick={() => {this.props.datCuoc(false)}}>XỈU</button>
                    </div>
                </div>

                <div className="thongTinTroChoi">
                    <ThongTinTroChoi />
                    <button onClick={() => {this.props.playGame()}} className="btn btn-success p-2 display-4 mt-5">Play game</button>
                </div>

            </div>
        );
    }
}


const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        datCuoc: (taiXiu: boolean) => {
            let action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            // Gửi lên reducer
            dispatch(action);
        },
        playGame: ()=> {
            dispatch({
                type: 'PLAY_GAME',
            })
        }
    }

}

export default connect(null, mapDispatchToProps)(BaiTapGameXucXacRedux);
