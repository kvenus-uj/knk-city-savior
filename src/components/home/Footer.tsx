import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="knk_footer">
      <div className="wrapper">
        <Image
          src="/static/images/footer_monster.png"
          layout="responsive"
          width="100%"
          height="100"
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;
