const initState = {
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

const rootReducer = (state = initState, action) => {
    if (action.type === 'Update_User') {
        let newUsers = state.users.filter(x => {
            if (x.userName === action.user) {
                x.userName = action.newUser;
            }
        });
    }

    if (action.type === 'login_user') {
        let loginUser = state.users.filter(x => {
            if (x.userName === action.user && x.password===action.password) {
                state.loginState.loginUser=action.user;
                state.loginState.loginStatus=true;
            }
        });
        state.loginState.loginTry=true;
    }
    if(action.type==='reset_loginState'){
        state.loginState.loginTry=false;
        state.loginState.loginUser='';
        state.loginState.loginStatus=false;
    }
    console.log("login state :",state.loginState);
    return state;
}

export default rootReducer;