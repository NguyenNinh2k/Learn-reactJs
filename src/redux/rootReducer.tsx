import {combineReducers} from 'redux';
import BaiTapGameXucXacReducer from "./BaiTapGameXucXacReducer";
import BaiTapGameOanTuXiReducer from "./BaiTapGameOanTuXiReducer";

const rootReducer = combineReducers({  //stateTong
    BaiTapGameXucXacReducer,   //stateBaiTapGame
    BaiTapGameOanTuXiReducer,
})

export default rootReducer;
