import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
  console.log(user);
    // onAuthStateChange
    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        currentUser(storedToken);
        setLoading(false);
      }
    }, []);

  const authInfo = { user, loading, currentUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
