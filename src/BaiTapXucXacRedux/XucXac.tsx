import React from "react";
import {connect} from "react-redux";

class XucXac extends React.Component<any, any> {
    renderXucXac = () => {
        //Lấy props từ reducer về
        return this.props.mangXucXac.map((xucXac:any, index: number) => {
            <img key={index} className='imgXucXac' src={xucXac.hinhAnh} alt={xucXac.hinhAnh} />
        });
    }


    render() {
        return (
            <div className='mt-5'>
                {this.renderXucXac()}
            </div>
        );
    }
}

//Hàm lấy state từ redux về thành props của component
const mapStateToProps = (state:any) => {
  return {
      mangXucXac: state.BaiTapGameXucXacRedux.mangXucXac
  }
}


export default connect(mapStateToProps)(XucXac);
