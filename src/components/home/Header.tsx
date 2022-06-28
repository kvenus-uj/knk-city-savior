import Image from "next/image";
import React, { useState } from "react";

const warriorData = [
  {
    id: 1,
    img: "/static/images/home_hero_grid_1.png",
    bgImg: "",
  },
  {
    id: 2,
    img: "/static/images/home_hero_grid_2.png",
    bgImg: "",
  },
  {
    id: 3,
    img: "/static/images/home_hero_grid_3.png",
    bgImg: "",
  },
];

const Header = () => {
  const [singleWarriorData, setSingleWarriorData] = useState(
    warriorData[0] || {}
  );
  console.log(
    "🚀 ~ file: Header.tsx ~ line 26 ~ Header ~ singleWarriorData",
    singleWarriorData
  );

  return (
    <header className="home_hero w-full">
      <div className="wrapper py-20">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-7 md:col-span-5 rounded-lg bg-primary-dark">
            <h1 className="uppercase text-center py-4 border-b border-primary">
              My Warriors
            </h1>
            <div className="p-4 md:p-8 text-center">
              <span className="text-center text-xl py-5 block">
                Found 3 characters
              </span>
              <div className="grid grid-cols-2 gap-2 md:gap-5">
                {warriorData.map((item, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => setSingleWarriorData(item)}
                      className="w-full h-full"
                    >
                      <Image
                        src={item.img}
                        layout="responsive"
                        width="100%"
                        height="100%"
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-5 md:col-span-7">
            <Image
              src={singleWarriorData.img || "/static/images/home_hero_img.png"}
              layout="responsive"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
