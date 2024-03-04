import { useParams } from "react-router-dom";
import useGetSinglePost from "../hooks/useGetSinglePost";
import Loading from "../Components/Utils/Loading";
import Container from '../Components/Utils/Container'
import { formatDate } from "../utilities/dateFormat";
const PostDetails = () => {
  const { id } = useParams();
  const {post,isPending} = useGetSinglePost(id)

  return (
    <Container>
      {
      isPending ? (
        <div className="text-center">
          <Loading />
        </div>
      ) : post ? (
        <div className=" my-20 lg:my-28">
              <h5 className="text-3xl font-bold mb-5">{post?.title}</h5>
              <img width={"100%"} src={post?.image} alt="" className="max-h-[700px] object-cover object-center" />
              <div>
              <div className="flex items-center gap-3 my-3">
              <div className='size-8 rounded-xl overflow-hidden'>
              <img src={post?.authorImage} alt="author" className='object-cover object-center size-full'/>
            </div >
                <h3 className="text-base ">
                  {post?.author}{" "}
                  <span className="opacity-60 text-sm">
                    ({post?.view_count} views)
                  </span>
                </h3>
              </div>
                <p className="text-sm mb-4">
                  <span className="font-bold">Publish: </span>
                  {formatDate(post?.publish_date)}
                </p>
                <pre
                  className="text-justify text-sm pr-3 my-12 wrapper"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {post?.article}
                </pre>
              </div>
            </div>
      ):''
    }
    </Container>
  )
};

export default PostDetails;
