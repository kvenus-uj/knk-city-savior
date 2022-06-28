import Image from "next/image";
import React from "react";

const WinModal = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-black p-5 rounded-xl">
          <h3 className="text-white text-xl tracking-widest underline underline-offset-2 text-center py-5">
            Surviving warriors
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
                <div className="bg-primary-dark w-[76%] h-full"></div>
                <h2 className="absolute left-[47%] top-[0.5px] text-center text-base py-1 leading-none rounded-b">
                  76%
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
                <div className="bg-primary-dark w-[33%] h-full"></div>
                <h2 className="absolute left-[47%] top-[0.5px] text-center text-base py-1 leading-none rounded-b">
                  33%
                </h2>
              </div>
            </div>
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
                <div className="bg-primary-dark w-[33%] h-full"></div>
                <h2 className="absolute left-[47%] top-[0.5px] text-center text-base py-1 leading-none rounded-b">
                  33%
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black p-5 rounded-xl">
          <h3 className="text-white text-xl tracking-widest underline underline-offset-2 text-center py-5">
            Fallen warriors
          </h3>

          <div className="w-full h-5/6 flex items-center justify-center">
            <p className="md:w-4/6 text-white text-xl tracking-widest text-center">
              You are a good commander, no one died
            </p>
          </div>
          <h3 className="text-lg text-center py-5 tracking-widest">
            4 days 13 hours
          </h3>
        </div>
      </div>
      <div className="py-10">
        <p className="w-4/5 m-auto text-center text-xl tracking-widest leading-relaxed">
          Your heroes defeated the enemy after a heavy fight.They managed to
          gather the following loot:
        </p>

        <div className="w-full grid grid-cols-5 gap-10 pt-5 ">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/static/images/loot1.png"
              width="130"
              height="130"
              alt=""
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/static/images/loot2.png"
              width="130"
              height="130"
              alt=""
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/static/images/horror_castle_img2.png"
              width="130"
              height="130"
              alt=""
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/static/images/horror_castle_img3.png"
              width="130"
              height="130"
              alt=""
            />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/static/images/horror_castle_img4.png"
              width="130"
              height="130"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinModal;
