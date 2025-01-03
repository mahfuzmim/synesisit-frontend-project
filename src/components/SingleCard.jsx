import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Calender from "../assets/images/calender.png";
import avatar from "../assets/images/Avatar.png";
import moment from "moment";

const SingleCard = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [reviews, setReviews] = useState([
    {
      id: 1,
      blogId: 1,
      name: "John Doe",
      rating: 5,
      comment: "Great blog!",
      date: "23/07/2024",
    },
    {
      id: 2,
      blogId: 1,
      name: "Jane Smith",
      rating: 4,
      comment: "Very informative!",
      date: "2/08/2024",
    },
    {
      id: 3,
      blogId: 2,
      name: "Alice Brown",
      rating: 3,
      comment: "Good read, but could be better.",
      date: "2/07/2023",
    },
  ]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.org/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <>
      <div
        key={post.id}
        className="w-full bg-white  
    "
      >
        <div className=" grid p-3  lg:grid-cols-2 items-center h-full">
          <img
            className="rounded-lg w-full  h-full"
            src={post.image}
            alt={post.title}
          />
          <div className="p-[1.5rem] bg-[##FFFFFF] ">
            <div>
              <div className=" flex flex-col lg:flex-row">
                <h5
                  className="mb-2 mt-4 text-[36px] leading-[42.19px] 
                font-roboto text-center lg:text-left font-bold 
                tracking-tight text-[#000000] dark:text-white"
                >
                  {post.title}
                </h5>

                <label
                  className="text-[24px] font-semibold text-[#000000] mt-2 w-[148px] h-[46px] 
              rounded-[10px] p-0 bg-[#C9C5C580] self-center "
                >
                  {post.category}
                </label>
              </div>
              <div className="flex justify-center lg:justify-start mb-10 mt-4">
                <img src={Calender} alt="Calendar Icon" />
                <div className="ml-1 self-center text-center text-[24px] font-semibold text-[#000000] text-nowrap">
                  {moment(post.publishedAt, "DD/MM/YYYY HH:mm:ss").format(
                    "MMM D, YYYY"
                  )}
                </div>
              </div>

              <p className="mb-3 mt-3 text-[24px] font-roboto text-center lg:text-left text-[#000000]">
                {post.content}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[6rem]">
          <h3 className="text-[20px]  font-semibold text-center lg:text-left ml-3">
            Latest Review
          </h3>
          <div className="grid grid-cols-1 gap-6  lg:grid-cols-3 lg:text-left  mt-4 px-3  mt-[2rem]">
            {reviews.length > 0 &&
              reviews.map((item, i) => (
                <div className="border  rounded-md pl-3 pt-3 pb-3 " key={i + 1}>
                  <div> {"⭐".repeat(item.rating)}</div>
                  <div className="text-[20px] font-bold">Review Title</div>
                  <div className="text-[15px] mb-3">{item.comment}</div>
                  <div className="text-center flex justify-center lg:justify-start">
                    <img src={avatar}></img>
                  </div>
                  <div className="font-semibold mt-2">{item.date}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="mt-[4rem]">
        <div className="text-[22px] font-semibold">
          Follow the latest trends
        </div>
        <div className="text-[#757575] text-[18px]">
          With our daily newsletter
        </div>
        <div className="p-[2rem] ">
          <form className="flex flex-col gap-2 md:flex-row items-center justify-center">
            <div className="flex-grow-auto">
              <input
                type="email"
                id="email"
                className="bg-gray-50 mr-2 border border-gray-300 w-[14rem] text-gray-900 text-sm rounded-lg block  p-2.5"
                placeholder="example@example.com"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
