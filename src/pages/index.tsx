import ActiveQuests from "@/components/home/ActiveQuests";
import Embark from "@/components/home/Embark";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HorrorCastle from "@/components/home/HorrorCastle";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const embarkData = [
  {
    id: 1,
    img: "/static/images/horror.png",
    title: "Horror Castle of Elilth",
    time: "6 days 0 hours",
    cost: "8 $KAGE",
    warriorsRequired: "1 Minimum",
    percentageSuccess: "92%",
    requiredLevel: "Regular",
    potentialReward: "Pool of 5k $KAGE Common Lootbox",
  },
  {
    id: 2,
    img: "/static/images/embark_img2.png",
    title: "Training Ground",
    time: "",
    cost: "",
    warriorsRequired: "",
    percentageSuccess: "",
    requiredLevel: "",
    potentialReward: "",
  },
  {
    id: 3,
    img: "/static/images/embark_img3.png",
    title: "Cathedral of Afareith",
    time: "",
    cost: "",
    warriorsRequired: "",
    percentageSuccess: "",
    requiredLevel: "",
    potentialReward: "",
  },
];

const Home: NextPage = () => {
  const [embarkDataId, setEmbarkDataId] = useState(1);
  return (
    <DefaultLayout>
      <Header />
      <Embark
        data={embarkData}
        embarkDataId={embarkDataId}
        setEmbarkDataId={setEmbarkDataId}
      />
      <div className="horror_active_section">
        <HorrorCastle data={embarkData} embarkDataId={embarkDataId} />
        <ActiveQuests />
      </div>
      <Footer />
    </DefaultLayout>
  );
};

export default Home;
