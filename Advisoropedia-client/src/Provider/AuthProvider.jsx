import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { clearCookie, userLoginWithGoogle } from "../api/auth";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [googleLoginResponse, setGoogleLoginResponse] = useState(null);

  // Google login by @react-oauth/google
  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      // console.log(codeResponse);
      setGoogleLoginResponse(codeResponse);
    },
    onError: (error) => {
      console.log("Login faild", error);
    },
  });
  // console.log(googleLoginResponse);

// get user info from google Api and sento server toget custom Access token
  useEffect(() => {
   const getUserInfo= async ()=>{
     try {   
      if (googleLoginResponse) {
        const toastId = toast.loading("Login in progress...");
        const {data} = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleLoginResponse.access_token}`,
          {headers: {
            Authorization: `Bearer ${googleLoginResponse.access_token}`,
            Accept: "application/json",
          },}
        )
        const googleLoginInfo = {
                  fullName: data?.name,
                  email: data?.email,
                  verified_email: data?.verified_email,
                  profileImage:data?.picture,
                  userRole:'user'
                };

                // console.log(googleLoginInfo)
                const loginResponse = await userLoginWithGoogle(googleLoginInfo)
                // console.log(loginResponse)
                if (loginResponse.success) {
                  toast.success("Successfully Logged In",{ id: toastId });     
                  currentUser(loginResponse.token);
                window.location.pathname='/'
                } else {
                  toast.error("Something Went wrong", { id: toastId });
                }
      }
     } catch (error) {
      console.log(error)
     }
    }
    getUserInfo()
  }, [googleLoginResponse]);

  const currentUser = (accessToken) => {
    try {
      const decoded = jwtDecode(accessToken);
      setUser(decoded);
      // Save the token to localStorage
      localStorage.setItem("token", accessToken);
      setLoading(false);
    } catch (error) {
      console.error("Token decoding error:", error.message);
    }
  };
  const logOut = async () => {
    setLoading(true);
    // Clear user information when logging out
    setUser(null);
    localStorage.removeItem("token");
    await clearCookie();
    setLoading(false);
  };
  // console.log("User ==>", user);
  // onAuthStateChange
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      currentUser(storedToken);
    }
    setLoading(false);
  }, []);

  const authInfo = { user, loading, currentUser, logOut, googleLogin };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
