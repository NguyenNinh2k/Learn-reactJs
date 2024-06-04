
const stateDefault =  {
    taiXiu: true,
    mangXucXac: [
        {ma: 1, hinhAnh: './gameXucXac/1.png'},
        {ma: 2, hinhAnh: './gameXucXac/1.png'},
        {ma: 3, hinhAnh: './gameXucXac/1.png'},
    ],
    soBanThang: 0,
    tongSoBanChoi: 0
}

const BaiTapGameXucXacReducer = (state=stateDefault, action:object) => {
    // switch (action.type) {
    //     default : return {...state}
    // }
}

export default BaiTapGameXucXacReducer;
