import axiosSecure from "./axiosSecure"

export const getSinglePost = async(id)=>{
   const {data} = await axiosSecure.get(`post/${id}`)
   return data
}