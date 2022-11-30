import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../Components/Item/itemsSlice";
import loginReducer from '../Components/Login/loginSlice';

export default configureStore({
  reducer: {
    items: itemReducer,
    login: loginReducer,
  }
});
