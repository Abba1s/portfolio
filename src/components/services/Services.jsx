import React from "react";
import hero2 from "../../assets/hero2.png"
import fd from "../../assets/fdd.jpeg"

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="container lg:pt-5">
          <div className="text-center">
            <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
              What do I help
            </h2>
            <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              voluptatibus tempora in numquam? Nostrum excepturi minima
              perferendis animi, ut saepe doloremque sequi magni reiciendis,
              dolorem consectetur dolor aperiam inventore? Soluta dolorem velit
              explicabo molestias!
            </p>
          </div>

          <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold ">
                <div className="absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

                {/* Left card */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ">
                            Frotend Development
                          </h3>
                          <p className="font-[16px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime animi perferendis ipsum blanditiis sed
                            magni sint excepturi! Labore praesentium maxime
                            iste, ratione nobis voluptatum deserunt quibusdam
                            esse officia dolor sunt neque culpa, hic ducimus?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                      <figure>
                      <img className="rounded-full" src={fd} alt="fd" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* __________Right___________ */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-left"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ">
                            Backend Development
                          </h3>
                          <p className="font-[16px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime animi perferendis ipsum blanditiis sed
                            magni sint excepturi! Labore praesentium maxime
                            iste, ratione nobis voluptatum deserunt quibusdam
                            esse officia dolor sunt neque culpa, hic ducimus?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                      <figure>
                      <img className="rounded-full" src={fd} alt="fd" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* Left card */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ">
                            UI/UX
                          </h3>
                          <p className="font-[16px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime animi perferendis ipsum blanditiis sed
                            magni sint excepturi! Labore praesentium maxime
                            iste, ratione nobis voluptatum deserunt quibusdam
                            esse officia dolor sunt neque culpa, hic ducimus?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                      <figure>
                      <img className="rounded-full" src={fd} alt="fd" />
                      </figure>
                    </div>
                  </div>
                </div>
                        {/* __________Right___________ */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-left"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl ">
                            Blockchain
                          </h3>
                          <p className="font-[16px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime animi perferendis ipsum blanditiis sed
                            magni sint excepturi! Labore praesentium maxime
                            iste, ratione nobis voluptatum deserunt quibusdam
                            esse officia dolor sunt neque culpa, hic ducimus?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img className="rounded-full" src={fd} alt="fd" />
                      </figure>
                    </div>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
