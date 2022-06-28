import useWindowSize from "@/hooks/useWindowSize";
import { Modal } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CancelIcoGreen from "@/components/icons/CancelIcoGreen";
import CancelIcoRed from "@/components/icons/CancelIcoRed";
import WinModal from "./WinModal";
import LoseModal from "./LoseModal";

const Navbar = () => {
  const windowSize = useWindowSize();

  const [buyKageModal, setBuyKageModal] = useState(false);
  const [selectWalletModal, setSelectWalletModal] = useState(false);

  return (
    <nav className="sticky top-0 py-4 bg-black z-10">
      <div className="wrapper flex justify-between items-center">
        <Link href="/" passHref>
          <Image
            src="/static/brand/brand-logo.png"
            width={windowSize.width > 768 ? "170" : "100"}
            height={windowSize.width > 768 ? "50" : "30"}
            alt=""
          />
        </Link>
        <div className="flex gap-4 md:gap-10">
          <button
            onClick={() => setBuyKageModal(true)}
            className="btn-secondary"
          >
            Buy $KAGE
          </button>
          <button
            onClick={() => setSelectWalletModal(true)}
            className="btn-primary"
          >
            Select wallet
          </button>
        </div>
      </div>

      {/* --------------- Modals  -------------- */}
      <Modal
        title="You won"
        centered
        closable={true}
        visible={buyKageModal}
        onCancel={() => setBuyKageModal(false)}
        closeIcon={<CancelIcoGreen />}
        width={
          windowSize.width < 660
            ? "100%"
            : windowSize.width < 1024
            ? "90%"
            : "60%"
        }
        footer={null}
        style={{ borderRadius: "10px" }}
        className="custom-modal win-modal"
        // wrapClassName="bg-gray"
      >
        <WinModal />
      </Modal>

      <Modal
        title="You lose"
        centered
        closable={true}
        visible={selectWalletModal}
        onCancel={() => setSelectWalletModal(false)}
        closeIcon={<CancelIcoRed />}
        width={
          windowSize.width < 660
            ? "100%"
            : windowSize.width < 1024
            ? "90%"
            : "60%"
        }
        footer={null}
        style={{ borderRadius: "10px" }}
        className="custom-modal lose-modal"
        // wrapClassName="bg-gray"
      >
        <LoseModal />
      </Modal>
    </nav>
  );
};

export default Navbar;
