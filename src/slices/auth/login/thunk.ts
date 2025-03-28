import { postJwtLogin } from "helpers/fakebackend_helper";
import { loginError, loginSuccess, logoutSuccess } from "./reducer";
import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from "redux";
import { RootState } from "slices";
import { getFirebaseBackend } from "helpers/firebase_helper";
import axios from "axios";
import { decodeJWT } from "helpers/jwtDecode";
import { setAuthorization } from "helpers/api_helper";

interface User {
  email: string;
  password: string;
}

const baseUrl = "https://spssapi-hxfzbchrcafgd2hg.southeastasia-01.azurewebsites.net/api";
export const loginUser =
  (
    user: User,
    history: any  
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    axios
      .post(`${baseUrl}/authentications/login`, {
        usernameOrEmail: user.email,
        password: user.password,
      })
      .then((res: any) => {
        console.log("res", res);
        const decodedToken = decodeJWT(res.accessToken);
        console.log("decodedToken", decodedToken);

        dispatch(loginSuccess("ok"));
        localStorage.setItem(
          "authUser",
          JSON.stringify({
            accessToken: res.accessToken,
            token: res.accessToken,
            refreshToken: res.refreshToken,
            imageUrl: decodedToken?.AvatarUrl,
            name: decodedToken?.UserName,
            role: decodedToken?.Role,
          })
        );
        
        setAuthorization(res.accessToken);
        
        history("/dashboard");
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
    // try {
    //   if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
    //     try {
    //       // response = await postLogin({
    //       //     email: user.email,
    //       //     password: user.password,
    //       // });
    //       console.log("response", postLogin);
    //     } catch (error) {
    //       console.error("Error during postLogin:", error);
    //     }
    //   } else if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
    //     let fireBaseBackend = await getFirebaseBackend();

    //     response = await fireBaseBackend.loginUser(user.email, user.password);
    //   }

    //   if (response) {
    //     dispatch(loginSuccess(response));
    //     history("/dashboard");
    //   }
    // } catch (error) {
    //   dispatch(loginError(error));
    // }
  };

export const logoutUser = () => async (dispatch: Dispatch) => {
  try {
    localStorage.removeItem("authUser");
    
    // Clear the authorization header
    setAuthorization(null);

    let fireBaseBackend = await getFirebaseBackend();

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = fireBaseBackend.logout;
      dispatch(logoutSuccess(response));
    } else {
      dispatch(logoutSuccess(true));
    }
  } catch (error) {
    dispatch(loginError(error));
  }
};

export const socialLogin =
  (type: any, history: any) => async (dispatch: any) => {
    try {
      let response: any;

      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        const fireBaseBackend = getFirebaseBackend();
        response = fireBaseBackend.socialLoginUser(type);
      }

      const socialData = await response;

      if (socialData) {
        sessionStorage.setItem("authUser", JSON.stringify(socialData));
        dispatch(loginSuccess(socialData));
        history("/dashboard");
      }
    } catch (error) {
      dispatch(loginError(error));
    }
  };
