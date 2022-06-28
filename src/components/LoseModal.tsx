import Image from "next/image";
import React from "react";

const LoseModal = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-black p-5 rounded-xl">
          <h3 className="text-white text-xl tracking-widest underline underline-offset-2 text-center py-5">
            Surviving warriors
          </h3>

          <div className="w-full h-5/6 flex items-center justify-center">
            <p className="md:w-4/6 text-white text-xl tracking-widest text-center">
              You have no living warriors left
            </p>
          </div>
          <h3 className="text-lg text-center py-5 tracking-widest">
            4 days 13 hours
          </h3>
        </div>

        <div className="bg-black p-5 rounded-xl">
          <h3 className="text-white text-xl tracking-widest underline underline-offset-2 text-center py-5">
            Fallen warriors
          </h3>
          <div className="grid grid-cols-2 gap-3 pb-5">
            <div className="w-full h-full">
              <div>
                <Image
                  src="/static/images/warrior1.png"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <div className="bg-gray w-full h-6 relative">
                <div className="bg-primary-dark w-[0%] h-full"></div>
                <h2 className="absolute left-[47%] top-[0.5px] text-center text-base py-1 leading-none rounded-b">
                  0%
                </h2>
              </div>
            </div>
            <div className="w-full h-full">
              <div>
                <Image
                  src="/static/images/warrior2.png"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <div className="bg-gray w-full h-6 relative">
                <div className="bg-primary-dark w-[0%] h-full"></div>
                <h2 className="absolute left-[47%] top-[0.5px] text-center text-base py-1 leading-none rounded-b">
                  0%
                </h2>
              </div>
            </div>
            <div className="w-full h-full">
              <div>
                <Image
                  src="/static/images/warrior3.png"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <div className="bg-gray w-full h-6 relative">
                <div className="bg-primary-dark w-[0%] h-full"></div>
                <h2 className="absolute left-[47%] top-[0.5px] text-center text-base py-1 leading-none rounded-b">
                  0%
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoseModal;
