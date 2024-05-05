import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="LOGO"
            height={38}
            width={128}
          />
        </Link>

        <p>2024 Evently. All Rights reserved.</p>
      </div>
    </footer>
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <p style={{color: "green"}}>This project is created for internship(GTU) purposes only.</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
