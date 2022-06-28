import Image from "next/image";
import React from "react";

interface PropType {
  data: {
    id: number;
    img: string;
    title: string;
    time: string;
    cost: string;
    warriorsRequired: string;
    percentageSuccess: string;
    requiredLevel: string;
    potentialReward: string;
  }[];
  embarkDataId: number;
  setEmbarkDataId: any;
}

const Embark: React.FC<PropType> = ({
  data,
  embarkDataId,
  setEmbarkDataId,
}) => {
  return (
    <section className="wrapper py-20">
      <div>
        <h1 className="heading">EMBARK ON A QUEST </h1>
        <p className="text-base pt-5">
          Send your team on a journey for rewards and glory
        </p>
      </div>
      <div className="w-full md:w-4/5 pt-14 grid grid-cols-2 md:grid-cols-3 gap-14">
        {data.map((item, i) => {
          return (
            <div key={i} onClick={() => setEmbarkDataId(item.id)}>
              <div
                className={`rounded-lg rounded-lg-img overflow-hidden ${
                  embarkDataId === item.id && "border-2 border-primary"
                }`}
              >
                <Image
                  src={item.img}
                  layout="responsive"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <p
                className={`${
                  embarkDataId === item.id ? "text-white" : "text-gray"
                } text-xl pt-4`}
              >
                Horror Castle of Elilth
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Embark;
