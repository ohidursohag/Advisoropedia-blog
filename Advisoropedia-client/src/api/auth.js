import axiosSecure from "./axiosSecure";

// Save User Data in Database
export const userRegistration = async (userRegistrationData) => {
  const { data } = await axiosSecure.post(`/register`, userRegistrationData);
  return data;
};
export const userLogin = async (userLoginData) => {
  const { data } = await axiosSecure.post(`/login`, userLoginData);
  return data;
};

// Clear Access Token
export const clearCookie = async () => {
  const { data } = await axiosSecure.get('/logout');
  return data;
}