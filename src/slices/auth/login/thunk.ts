import { postJwtLogin } from "helpers/fakebackend_helper";
import { clearLoginError, loginError, loginSuccess, logoutSuccess } from "./reducer";
import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from "redux";
import { RootState } from "slices";
import { getFirebaseBackend } from "helpers/firebase_helper";
import axios from "axios";
import { decodeJWT } from "helpers/jwtDecode";
import { setAuthorization } from "helpers/api_helper";
import { API_CONFIG } from "config/api";

interface User {
  email: string;
  password: string;
}
export const loginUser =
  (
    user: User,
    history: any  
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: Dispatch) => {
    // Clear any previous errors
    dispatch(clearLoginError());
    
    axios
      .post(`${API_CONFIG.BASE_URL}/authentications/login`, {
        usernameOrEmail: user.email,
        password: user.password,
      })
      .then((response: any) => {
        console.log("Login response:", response);
        // Since we disabled unwrapping for login endpoint, response.data contains the actual data
        const { accessToken, refreshToken } = response.data;
        
        if (!accessToken) {
          throw new Error("No access token received");
        }
        
        const decodedToken = decodeJWT(accessToken);
        console.log("decodedToken", decodedToken);

        dispatch(loginSuccess("ok"));
        localStorage.setItem(
          "authUser",
          JSON.stringify({
            accessToken: accessToken,
            token: accessToken,
            refreshToken: refreshToken,
            imageUrl: decodedToken?.AvatarUrl,
            name: decodedToken?.UserName,
            role: decodedToken?.Role,
          })
        );
        
        setAuthorization(accessToken);
        
        history("/dashboard");
      })
      .catch((error) => {
        console.error("Login error:", error);
        console.error("Error response:", error.response);
        dispatch(loginError(error.response?.data?.message || error.message || "Đăng nhập thất bại"));
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
