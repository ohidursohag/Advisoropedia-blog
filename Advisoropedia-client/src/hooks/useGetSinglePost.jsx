import {useQuery} from '@tanstack/react-query'
import { getSinglePost } from '../api/posts';
const useGetSinglePost = (id) => {
const {data:post,isPending, refetch}= useQuery({
queryKey:['singlePost',id],
queryFn:async()=>{
   const post = await getSinglePost(id)
   return post
}
})
  return {post,isPending, refetch}
};

export default useGetSinglePost;
