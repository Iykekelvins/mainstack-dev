type IconProps = {
  classes: string;
  src: any;
  height?: number;
  width?: number;
};

import Image from "next/image";

const Icon = ({ classes, src, height, width }: IconProps) => {
  return (
    <div className={`${classes} icon`}>
      <Image src={src} height={height ? height : 42} width={width ? width : 42} alt="" />
    </div>
  );
};

export default Icon;
