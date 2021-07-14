import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceReducer from "./iceCream/iceReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceReducer,
  user: userReducer,
});

export default rootReducer;
