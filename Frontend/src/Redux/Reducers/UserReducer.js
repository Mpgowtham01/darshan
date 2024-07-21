import { GET_USER_DATA, USER_LOGIN_DATA } from "../ActionTypes/UserActionType";

const initialValue = {
  isLogin: false,
  token: null,
  role: null,
  id: null,
};
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return state;
    case USER_LOGIN_DATA:
      const userDetail = {
        ...state,
        isLogin: action.payload.isLogin,
        token: action.payload.token,
        id: action.payload.id,
        role: action.payload.role,
      };
      return userDetail;
    default:
      return state;
  }
};
export default userReducer;
