import React from "react";
import Image from "next/image";
import Text from "./text";
import Link from "next/link";
import BackIcon from "../../public/images/icon-back.svg";

type SignLayoutPropsType = {
  children: React.ReactNode;
  className?: string;
  text: string;
  subtitle: string;
  src: string;
  onBack?: any;
};

const SignLayout = ({
  children,
  className,
  text,
  subtitle,
  src,
  onBack,
}: SignLayoutPropsType) => {
  return (
    <div className={`sign-layout-wrapper ${className ? className : ""}`}>
      <div className="sign-layout-left">
        {onBack && (
          <Link href={onBack} className="back-btn">
            <Image src={BackIcon} alt="Back" />
          </Link>
        )}
        {children}
      </div>
      <div className="sign-layout-right">
        <Text type="H1" className="slr-title" text={text} />
        <Text type="H4" className="slr-subtitle" text={subtitle} />
        <Image src={src} alt={text} className="slr-img" />
      </div>
    </div>
  );
};

export default SignLayout;
