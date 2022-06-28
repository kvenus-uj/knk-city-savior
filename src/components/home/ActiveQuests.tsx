import Image from "next/image";
import React from "react";

const ActiveQuests = () => {
  return (
    <div className="wrapper py-10">
      <h1 className="heading uppercase pb-10">Active Quests</h1>
      <div>
        <div className="grid grid-cols-5 rounded-lg">
          <div className="col-span-5 md:col-span-2 h-full">
            <div className="w-full h-full">
              <img
                src="/static/images/activeQuests.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-5 md:col-span-3 bg-gray-dark">
            <div className="px-6 lg:px-12 pt-6 lg:pt-10 pb-3 border-b border-gray flex items-end justify-between">
              <h2 className="text-xl lg:text-2xl font-bold uppercase m-0 leading-none">
                Academy of Yamato
              </h2>
              <button className="py-1 px-3 lg:px-6 bg-primary rounded-lg text-base">
                Continue the expedition
              </button>
            </div>
            <div className="px-6 lg:px-12 py-5 lg:py-10">
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-black p-5 rounded-xl">
                  <h3 className="text-lg underline underline-offset-2 text-center py-5">
                    Team
                  </h3>
                  <div className="grid grid-cols-2 gap-5 pb-5">
                    <div className="w-full h-full border rounded-lg border-primary">
                      <Image
                        src="/static/images/ac_team1.png"
                        layout="responsive"
                        width="100%"
                        height="100%"
                        alt=""
                      />
                    </div>
                    <div className="w-full h-full border rounded-lg border-primary">
                      <Image
                        src="/static/images/ac_team2.png"
                        layout="responsive"
                        width="100%"
                        height="100%"
                        alt=""
                      />
                    </div>
                    <div className="w-full h-full border rounded-lg border-primary">
                      <Image
                        src="/static/images/ac_team1.png"
                        layout="responsive"
                        width="100%"
                        height="100%"
                        alt=""
                      />
                    </div>
                    <div className="w-full h-full border rounded-lg border-primary">
                      <Image
                        src="/static/images/ac_team1.png"
                        layout="responsive"
                        width="100%"
                        height="100%"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-black p-5 rounded-xl">
                  <h3 className="text-lg underline underline-offset-2 text-center py-5">
                    Time remaining
                  </h3>
                  <div className="flex justify-center">
                    <Image
                      src="/static/images/solt_timer.svg"
                      width="80"
                      height="160"
                      alt=""
                    />
                  </div>
                  <h3 className="text-lg text-center py-5 tracking-widest">
                    4 days 13 hours
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray rounded-b-lg -mt-1.5 overflow-hidden z-10">
          <div className="w-[76%] py-6 bg-primary-dark text-center">
            <span className="text-lg">76%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveQuests;
