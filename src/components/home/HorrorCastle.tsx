import { Modal } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ChooseWarriorModal from "../ChooseWarriorModal";
import CancelIcoWhite from "../icons/CancelIcoWhite";

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
}

interface EmbarkDataInterface {
  id: number;
  img: string;
  title: string;
  time: string;
  cost: string;
  warriorsRequired: string;
  percentageSuccess: string;
  requiredLevel: string;
  potentialReward: string;
}

const HorrorCastle: React.FC<PropType> = ({ data, embarkDataId }) => {
  const [selectedEmbarkData, setSelectedEmbarkData] =
    useState<EmbarkDataInterface>({
      id: 1,
      img: "",
      title: "",
      time: "",
      cost: "",
      warriorsRequired: "",
      percentageSuccess: "",
      requiredLevel: "",
      potentialReward: "",
    });

  const [addWarrior, setAddWarrior] = useState(false);

  useEffect(() => {
    const selectedData =
      data.find((item) => item.id === embarkDataId) || data[0];
    setSelectedEmbarkData(selectedData);
  }, [embarkDataId]);

  return (
    <section className="wrapper pb-28">
      <div className="border border-white rounded-lg">
        <div className="relative">
          {selectedEmbarkData?.img && (
            <Image
              src={selectedEmbarkData?.img}
              layout="responsive"
              objectFit="cover"
              width="100%"
              height="40"
              alt=""
            />
          )}
          <h1 className="absolute uppercase bottom-10 left-20">
            {selectedEmbarkData.title}
          </h1>
          <button className="btn-primary absolute top-10 right-10">
            Select Quest
          </button>
        </div>

        {/* --------------------- Table section --------------------- */}
        <div className="horror-castle-table">
          <div className="p-14 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* ------------- table right column ------------- */}
            <div className="grid gap-10">
              <div className="grid grid-cols-2">
                <h3 className="m-0 underline underline-offset-2 text-base text-white">
                  Time
                </h3>
                <p className="m-0 text-base tracking-widest">6 days 0 hours</p>
              </div>
              <div className="grid grid-cols-2">
                <h3 className="m-0 underline underline-offset-2 text-base text-white">
                  Cost
                </h3>
                <p className="m-0 text-base tracking-widest">8 $KAGE</p>
              </div>
              <div className="grid grid-cols-2">
                <h3 className="m-0 underline underline-offset-2 text-base text-white">
                  Warriors required
                </h3>
                <p className="m-0 text-base tracking-widest">1 Minimum</p>
              </div>
            </div>

            {/* ------------- table right column ------------- */}
            <div className="grid gap-10">
              <div className="grid grid-cols-2">
                <h3 className="m-0 underline underline-offset-2 text-base text-white">
                  Percentage Success
                </h3>
                <p className="m-0 text-base tracking-widest">92%</p>
              </div>
              <div className="grid grid-cols-2">
                <h3 className="m-0 underline underline-offset-2 text-base text-white">
                  Required Level
                </h3>
                <p className="m-0 text-base tracking-widest">Regular</p>
              </div>
              <div className="grid grid-cols-2">
                <h3 className="m-0 underline underline-offset-2 text-base text-white">
                  Potential Reward
                </h3>
                <p className="m-0 text-base tracking-widest">
                  Pool of 5k $KAGE Common Lootbox
                </p>
              </div>
            </div>
          </div>
          <h3 className="px-14 py-3 m-0 text-base tracking-widest">
            Create your warrior’s team
          </h3>
        </div>

        {/* --------------------- Create your own team section --------------------- */}
        <div className="py-5 px-16 rounded-b-lg bg-gray-dark flex flex-col md:flex-row justify-between gap-[10%]">
          <div className="w-full md:w-1/2 grid grid-cols-3 gap-8">
            <Image
              src="/static/images/horror_castle_img1.png"
              layout="responsive"
              width="100%"
              height="130"
              alt=""
            />
            <button
              onClick={() => {
                setAddWarrior(true);
              }}
              className="w-full h-full border border-gray rounded-lg flex flex-col items-center justify-center gap-4"
            >
              <span className="text-gray">Add warrior</span>

              <div className="w-8 h-8 flex justify-center items-center border border-gray rounded-full">
                <Image
                  src="/static/icons/plus.svg"
                  width={15}
                  height={15}
                  alt=""
                />
              </div>
            </button>
            <button
              onClick={() => {
                setAddWarrior(true);
              }}
              className="w-full h-full border border-gray rounded-lg flex flex-col items-center justify-center gap-4"
            >
              <span className="text-gray">Add warrior</span>

              <div className="w-8 h-8 flex justify-center items-center border border-gray rounded-full">
                <Image
                  src="/static/icons/plus.svg"
                  width={15}
                  height={15}
                  alt=""
                />
              </div>
            </button>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-3 gap-10 pt-5 md:pt-0">
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

      {/* ---------------- Modals ------------------- */}
      <Modal
        title="Choose your warrior"
        centered
        closable={true}
        visible={addWarrior}
        onCancel={() => setAddWarrior(false)}
        closeIcon={<CancelIcoWhite />}
        footer={null}
        style={{ borderRadius: "10px" }}
        className="custom-modal-dark"
      >
        <ChooseWarriorModal setAddWarrior={setAddWarrior} />
      </Modal>
    </section>
  );
};

export default HorrorCastle;
