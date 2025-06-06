import React, { FC } from "react";

import sprite from "../../../assets/svg/sprite.svg";

const Svg: FC<SvgProps> = ({ className, id }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Svg;
