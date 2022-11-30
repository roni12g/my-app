import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            userName: 'roni',
            password: '1',
            role: 'user',
        },
        {
            userName: 'Admin',
            password: '1',
            role: 'Admin',
        },

    ],
    loginState: {
        loginUser: '',
        loginStatus: false,
        loginTry:false,
    },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {

    loginUser: (state,action) => {
        let loginUser = state.users.filter(x => {
            if (x.userName === action.payload.user && x.password===action.payload.password) {
                state.loginState.loginUser=action.payload.user;
                state.loginState.loginStatus=true;
            }
        });
        state.loginState.loginTry=true;


    },
    resetLogin: (state, action) => {
        state.loginState.loginTry=false;
        state.loginState.loginUser='';
        state.loginState.loginStatus=false;
    }
  }
});

export const {loginUser, resetLogin } = loginSlice.actions;

export default loginSlice.reducer;
