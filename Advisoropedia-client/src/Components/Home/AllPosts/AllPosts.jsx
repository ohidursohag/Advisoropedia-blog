
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import Select from "react-select";
import axiosSecure from "../../../api/axiosSecure";
import Skeleton from "../../Utils/Skeleton";
import PostCard from "../../Shared/Cards/PostCard";
import Search from "./Search";
const categoryOptions = [
   { value: "", label: "All Posts" },
   { value: "Politics", label: "Politics" },
   { value: "Business", label: "Business" },
   { value: "Technology", label: "Technology" },
   { value: "Sports", label: "Sports" },
   { value: "Science", label: "Science" },
   { value: "Health", label: "Health" },
   { value: "Entertainment", label: "Entertainment" },
 ];

const AllPosts = () => {
   const [selectedCategory, setSelectedCategory] = useState({
      value: "",
      label: "All Posts",
    });
    const limit=10
    const [search, setSearch] = useState("");
   const getAllPosts = async (page)=>{
      const {data} = await axiosSecure.get(`/all-posts?limit=${limit}&page=${page}&tags=${selectedCategory.value}&search=${search}`)
      return data
   }

   const { isPending, data, hasNextPage, fetchNextPage } = useInfiniteQuery({
      queryKey: ["allPosts", selectedCategory, search],
      queryFn: ({ pageParam = 1 }) => getAllPosts(pageParam),
      getNextPageParam: (lastPage, pages) => {
        return lastPage.length == 10 ? pages.length + 1 : undefined;
      },
    });
   //  console.log(hasNextPage, fetchNextPage)
   //  console.log(data)
    const posts = data?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  
   //  console.log(posts)
  

    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        backgroundColor: "white",
        borderColor: state.isFocused ? "black" : provided.borderColor,
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundImage: state.isSelected
          ? "linear-gradient(to top right, #58bfff , #01bea5)"
          : "white",
        color: state.isSelected ? "white" : "black",
      }),
    };
    const handleSubmit = (e) => {
      // console.log(e.target.value);
      setSelectedCategory({
        value: "",
        label: "All Posts",
      });
      
      setSearch(e.target.value);
    };
  return (
    <div>
       <div className="my-12 flex flex-col sm:flex-row justify-between items-center gap-5">
         {/* Filter Ans Search */}
       <Select
       className="w-60"
            styles={customStyles}
            value={selectedCategory}
            required
            placeholder="Filter tags"
            onChange={setSelectedCategory}
            options={categoryOptions}
          />
        <Search handleSubmit={handleSubmit} />{" "}
      </div>
      {isPending ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center  gap-5 xl:gap-10">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : posts?.length ? (
        <InfiniteScroll
          dataLength={posts ? posts.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center  gap-5 xl:gap-10">
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          }
        >
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center  gap-5 xl:gap-10">
              {posts?.map((post,idx) => {
                return <PostCard post={post} key={idx}></PostCard>;
              })}
            </div>
          </div>
        </InfiniteScroll>
      ) : (
        <div className="h-[50vh] w-full flex flex-col justify-center items-center">
          <h1 className="text-9xl font-extrabold text-gray-500 tracking-widest">
            OPPS!
          </h1>
          <div className="bg-black text-white px-5  text-lg rounded  ">
            Data Not Found
          </div>
        </div>
      )}
    </div>
  )
};

export default AllPosts;
