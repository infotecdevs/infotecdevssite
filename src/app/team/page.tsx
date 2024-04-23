import Footer from '@/components/Footer/Index';
import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const page = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-bold title-font mb-4 text-violet-950">
              Nosso time
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p> */}
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Oclecio A. Sousa
                  </h2>
                  <h3 className="text-gray-500 mb-3">Dev Full Stack</h3>
                  <p className="mb-4">
                    Habilidades tanto no front-end quanto no back-end do
                    desenvolvimento web.
                  </p>
                  <span className="inline-flex">
                    <a className="text-violet-950">
                      <AiFillInstagram className="w-5 h-5" />
                    </a>
                    <a className="ml-2 text-violet-950">
                      <AiFillLinkedin className="w-5 h-5" />
                    </a>
                    <a className="ml-2 text-violet-950">
                      <AiOutlineWhatsApp className="w-5 h-5" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/201x201"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Thaina F. Silva
                  </h2>
                  <h3 className="text-gray-500 mb-3">Dev Full Stack</h3>
                  <p className="mb-4">
                    Habilidades tanto no front-end quanto no back-end do
                    desenvolvimento web.
                  </p>
                  <span className="inline-flex">
                    <a className="text-violet-950">
                      <AiFillInstagram className="w-5 h-5" />
                    </a>
                    <a className="ml-2 text-violet-950">
                      <AiFillLinkedin className="w-5 h-5" />
                    </a>
                    <a className="ml-2 text-violet-950">
                      <AiOutlineWhatsApp className="w-5 h-5" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/202x202"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Steve F. Silva
                  </h2>
                  <h3 className="text-gray-500 mb-3">Dev Full Stack</h3>
                  <p className="mb-4">
                    Habilidades tanto no front-end quanto no back-end do
                    desenvolvimento web.
                  </p>
                  <span className="inline-flex">
                    <a className="text-violet-950">
                      <AiFillInstagram className="w-5 h-5" />
                    </a>
                    <a className="ml-2 text-violet-950">
                      <AiFillLinkedin className="w-5 h-5" />
                    </a>
                    <a className="ml-2 text-violet-950">
                      <AiOutlineWhatsApp className="w-5 h-5" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/203x203"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Roger F. Silva
                  </h2>
                  <h3 className="text-gray-500 mb-3">Dev Full Stack</h3>
                  <p className="mb-4">
                    Habilidades tanto no front-end quanto no back-end do
                    desenvolvimento web.
                  </p>
                  <span className="inline-flex">
                    <a className="text-violet-950">
                      <AiFillInstagram className="w-5 h-5" />
                    </a>
                    <a className="ml-2 text-violet-950">
                      <AiFillLinkedin className="w-5 h-5" />
                    </a>
                    <a className="ml-2 text-violet-950">
                      <AiOutlineWhatsApp className="w-5 h-5" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

