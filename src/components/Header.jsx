import { FaSearch } from "react-icons/fa";

const Header = ({ setSearchedValue }) => {
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setSearchedValue(e.target.value);
  };

  return (
    <>
      <div className="mt-[2rem]">
        <div className="flex px-3 flex-col gap-2 lg:flex-row justify-between  items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-[32px] font-roboto md:text-[48px] lg:text-[40px] font-bold leading-[40px] md:leading-[55px] lg:leading-[75px] text-center md:text-left">
              PlaceHolder Posts
            </h1>
          </div>
          <div className="w-full md:w-auto">
            <form className="w-full flex justify-center md:justify-end">
              <div className="relative flex items-center">
                <div
                  className="absolute inset-y-0 left-0 flex 
                items-center pl-3 pointer-events-none"
                ></div>
                <input
                  type="text"
                  id="search"
                  className=" font-roboto  block w-[100%] 
                  md:w-[500px] md:w-[600px] lg:w-[693] h-[50px] md:h-[70px] lg:h-[93px] text-[16px] 
                  md:text-[24px] lg:text-[32px] p-0 pl-10 border border-gray-300 
                  rounded-lg bg-gray-50 placeholder:text-black placeholder:font-normal 
                  leading-[20px] md:leading-[30px] lg:leading-[37.5px]"
                  placeholder="Search..."
                  required
                  autoComplete="off"
                  onChange={handleInputChange}
                />
                <FaSearch className=" absolute text-[18px]  lg:text-[32px] end-10   font-medium    " />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
