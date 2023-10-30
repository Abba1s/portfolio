import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#12141e] pt-12">
        <div className="container">
          {/* footer top */}
          <div className="sm:flex items-center justify-between md:gap-8">
            <div className="w-full sm:w-1/2">
              <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
                Wanna make beautiful products?
              </h2>
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i>Hire Me
                </button>
              </a>
            </div>

            <div className="w-full sm:w1/2">
              <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, nulla architecto recusandae ad cupiditate tempora
                porro sint quasi ex repudiandae cumque, officia, illum nemo
                quia? Quis incidunt quos, corporis magni fuga pariatur!
              </p>

              <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
                <span className="text-gray-300 font-[600] text-[15px]">
                  Follow Me:
                </span>
                <span className="w-[35px] h-[35px] p-1 rounded-[50px] cursor-pointer text-center bg-[#2b2d33] hover:bg-primaryColor">
                  <a
                    href="#github"
                    className="text-gray-300 font-[500] text-[18px]"
                  >
                    <i class="ri-facebook-line"></i>
                  </a>
                </span>
                <span className="w-[35px] h-[35px] p-1 rounded-[50px] cursor-pointer text-center bg-[#2b2d33] hover:bg-primaryColor">
                  <a
                    href="#github"
                    className="text-gray-300 font-[500] text-[18px]"
                  >
                    <i class="ri-instagram-line"></i>
                  </a>
                </span>
                <span className="w-[35px] h-[35px] p-1 rounded-[50px] cursor-pointer text-center bg-[#2b2d33] hover:bg-primaryColor">
                  <a
                    href="#github"
                    className="text-gray-300 font-[500] text-[18px]"
                  >
                    <i class="ri-github-line"></i>
                  </a>
                </span>
                <span className="w-[35px] h-[35px] p-1 rounded-[50px] cursor-pointer text-center bg-[#2b2d33] hover:bg-primaryColor">
                  <a
                    href="#github"
                    className="text-gray-300 font-[500] text-[18px]"
                  >
                    <i class="ri-linkedin-line"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* Footer menu links */}
          <div>
            <ul className="flex flex-col md:flex-row items-center justify-center pt-10 gap-10 ">
              <li>
                <a className="text-gray-400 font-[600] hover:text-white" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-400 font-[600] hover:text-white" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-gray-400 font-[600] hover:text-white" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-gray-400 font-[600] hover:text-white" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* footer bottom */}

        <div className="bg-[#1b1e29] py-3 mt-14">
          <div className="container">
            <div className="flex items-center justify-center sm:justify-between">
              <div className="hidden sm:block">
                <div className="flex items-center gap-[10px]">
                  <span className="flex items-center justify-center w-[35px] h-[35px] rounded-full text-white font-[500] text-[18px] bg-[#2b2d33]">
                    AB
                  </span>

                  <div className="leading-[20px] ">
                    <h2 className="text-xl text-gray-200 font-[500] text-[18px]">
                      Abbas
                    </h2>
                    <p className="text-gray-400 text-[14px] font-[500]">
                      Personal Portfolio
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-[14px] "> Copyright 2023 - All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
