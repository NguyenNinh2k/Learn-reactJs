import React from "react";
import {connect} from "react-redux";

class ThongTinTroChoi extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div className='display-4'>BẠN CHỌN:
                    <span className='text-danger'>{this.props.taiXiu ? 'TÀI' : 'XỈU'}</span>
                </div>
                <div className='display-4'>BÀN THẮNG:
                    <span className='text-success'>{this.props.soBanThang}</span>
                </div>
                <div className='display-4'>BÀN SỐ BÀN CHƠI:
                    <span className='text-primary'>{this.props.tongSobanChoi}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state:any) => {
    return {
        taiXiu : state.BaiTapGameXucXacRedux.taiXiu,
        soBanThang: state.BaiTapGameXucXacRedux.soBanThang,
        tongSoBanChoi: state.BaiTapGameXucXacRedux.tongSoBanChoi
    }
}

export default connect(mapStateToProps)(ThongTinTroChoi);
