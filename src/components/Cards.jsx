import { useEffect } from "react";
import Calender from "../assets/images/calender.png";

import axios from "axios";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment } from "../redux/bellCounter";
import moment from "moment";

const baseURL = "https://jsonplaceholder.org/posts/";

const Cards = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const [filteredDisplayPosts, setFilteredDisplayPost] = useState([]);
  const dispatch = useDispatch();

  const searchedText = props.searchedValue;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(baseURL);
        setAllPosts(response.data.length > 0 && response.data);
        setDisplayedPosts(response.data.slice(0, pageSize));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const fetchMorePosts = () => {
    setTimeout(() => {
      const startIndex = page * pageSize;
      const endIndex = startIndex + pageSize;
      console.log("start index", startIndex);
      console.log("end index", endIndex);

      const nextPosts = allPosts.slice(startIndex, endIndex);
      console.log("next posts", nextPosts);

      setDisplayedPosts((prevPosts) => [...prevPosts, ...nextPosts]);

      console.log("all posts", allPosts);
      console.log("all posts length", allPosts.length);

      if (endIndex >= allPosts.length) {
        setHasMore(false);
      }

      setPage((prevPage) => prevPage + 1);
    }, 1500);
  };

  useEffect(() => {
    if (searchedText) {
      const filteredDisplayPosts = allPosts.filter((item) =>
        item.title.toLowerCase().includes(searchedText.toLowerCase())
      );
      console.log(filteredDisplayPosts);

      setFilteredDisplayPost(filteredDisplayPosts);
    } else {
      setFilteredDisplayPost([]);
    }
  }, [searchedText]);

  const postToDisplay = searchedText ? filteredDisplayPosts : displayedPosts;

  const handleCardClick = () => {
    dispatch(increment());
  };

  return (
    <div className="">
      <InfiniteScroll
        dataLength={postToDisplay.length}
        next={fetchMorePosts}
        hasMore={searchedText ? false : hasMore}
        loader={
          <div className="flex  items-center justify-center">
            <h4 className="text-[24px]">
              {displayedPosts.length >= 10 ? "More Posts Loading" : "Loading"}
            </h4>
            <ThreeDots
              visible={true}
              height="40"
              width="40"
              color="#A3A6A8"
              radius="7"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ marginLeft: "5px", marginTop: "15px" }}
              wrapperClass=""
            />
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="grid px-4 grid-cols-1 lg:grid-cols-2 gap-6">
          {postToDisplay.map((item) => (
            <div
              key={item.id}
              className="w-full bg-white border border-gray-200 rounded-lg shadow 
          dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="rounded-t-lg w-full"
                src={item.image}
                alt={item.title}
              />
              <div className="p-5 bg-[#F7F9F9] mt-2">
                <div className="flex">
                  <img src={Calender} alt="Calendar Icon" />
                  <div className="ml-1 self-center text-[24px] font-semibold text-[#000000] text-nowrap">
                    {moment(item.publishedAt, "DD/MM/YYYY HH:mm:ss").format(
                      "MMM D, YYYY"
                    )}
                  </div>
                </div>
                <h5 className="mb-2 mt-4 text-[36px] leading-[42.19px] font-roboto text-left font-bold tracking-tight text-[#000000] dark:text-white">
                  {item.title}
                </h5>
                <p className="mb-3 mt-3 text-[24px] font-roboto text-left text-[#000000]">
                  {item.content.slice(0, 150)}...
                  <Link
                    to={`/post/${item.id}`}
                    state={{ id: item.id }}
                    className="text-[#206CE5] font-semibold ml-2"
                    onClick={handleCardClick}
                  >
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Cards;
