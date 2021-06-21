import FirebaseAuthService from "../../services/firebase/firebaseAuthService";
import { setUserData } from "./UserActions";
import history from "history.js";

export const LOGIN_ERROR = "SIGNUP_ERROR";
export const LOGIN_SUCCESS = "SIGNUP_SUCCESS";
export const LOGIN_LOADING = "SIGNUP_LOADING";
export const RESET_PASSWORD = "RESET_PASSWORD";

export function firebaseSignUpEmailPassword({ email, password }) {
  return dispatch => {
      console.log('sign up user:: ', email, password)
    FirebaseAuthService.signUpWithEmailAndPassword(email, password)
      .then(user => {
        if (user) {
            console.log('sign up user:: ', user)
          dispatch(
            setUserData({
              userId: "1",
              role: "ADMIN",
              displayName: "Peter Gwaka",
              email: "pgwaka@gmail.com",
              photoURL: "/assets/images/face-7.png",
              age: 25,
              token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
              ...user
            })
          );

          history.push({
            pathname: "/"
          });

          return dispatch({
            type: LOGIN_SUCCESS
          });
        } else {
          return dispatch({
            type: LOGIN_ERROR,
            payload: "Login Failed"
          });
        }
      })
      .catch(error => {
        return dispatch({
          type: LOGIN_ERROR,
          payload: error
        });
      });
  };
}
