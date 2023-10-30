import { useRef } from "react";
import Resume from '../../assets/AbbasResume.pdf'

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => {
    menuRef.current.classList.toggle("show_menu");
  };


  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo Item */}

          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              AB
            </span>

            <div className="leading-[20px] ">
              <h2 className="text-xl text-smallTextColor font-[700]">Abbas</h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                Personal Portfolio
              </p>
            </div>
          </div>
          {/* Links */}
          <div className="menu" ref={menuRef} onClick={menuToggle}>
            <ul className="flex items-center gap-10">
              <span className="md:hidden absolute top-5 right-1/2 font-[600] text-[1.5rem]">
                X
              </span>
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* _________ */}

          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex items-center gap-4 order-2 md:order-1">
              <a href={Resume} download className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 sm:px-4 px-2 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white text-[14px] hover:font-[500] ease-in duration-300">
                <i class="ri-file-download-line"></i> Resume
              </a>
            </div>
            <div className="flex items-center gap-4 order-1 md:order-2">
              <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 sm:px-4 px-2 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white text-[14px] hover:font-[500] ease-in duration-300">
                <i className="ri-send-plane-line"></i>Let's Connect
              </button>

              <span
                className="text-2xl text-smallTextColor md:hidden cursor-pointer"
                onClick={menuToggle}
              >
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
