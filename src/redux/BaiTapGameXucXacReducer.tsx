
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

const BaiTapGameXucXacReducer = (state=stateDefault, action: { type: string, taiXiu?: any}) => {
    switch (action.type) {
        case 'DAT_CUOC':
            state.taiXiu = action.taiXiu;
            return {...state};

        case 'PLAY_GAME': {
         //Xử lý random xúc xắc
            let mangXucXacNgauNhien = [];
            // mỗi lần lặp ra số ngẫu nhiên từ 1->6
            for (let i=0; i<3; i++) {
                //Tạo ra 1 đối tượng xúc xắc từ số ngẫu nhiên
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xucXacNgauNhien = {ma: soNgauNhien, hinhAnh: `./gameXucXac/${soNgauNhien}.png`};

                //push vào mảng xúc xắc ngẫu nhiên
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }

            //Gan state mangXucXac = mangXucXacNgauNhien
            state.mangXucXac = mangXucXacNgauNhien;

            // Xử lý tăng số bàn chơi
            state.tongSoBanChoi += 1;

            //Xử lý số bàn thắng
            let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem: number, xucXac: {ma: number}, index: number) => {
                return tongDiem += xucXac.ma;
            }, 0);

            //Xét điều kiện để người dùng thắng game
            if((tongSoDiem > 11 && state.taiXiu === true) || (tongSoDiem <= 11 && state.taiXiu === false)) {
                state.soBanThang += 1;
            }

            return {...state};
        }

        default : return {...state}
    }
}

export default BaiTapGameXucXacReducer;
