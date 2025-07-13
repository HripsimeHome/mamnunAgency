import React from "react";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import {
  companyLabelImage,
  companyLabelWebpImage,
} from "../../../assets/images";

const TrustPilotLink = ({ className, pictureClass }) => {
  return (
    <div
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="67abb63c21d7cd3d58ca403f"
      data-style-height="52px"
      data-style-width="100%"
    >
      <a
        href="https://www.trustpilot.com/review/mamnunagency.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageWebp
          src={companyLabelImage}
          srcSet={companyLabelWebpImage}
          alt="MAMNUN Agency"
          className={className}
          pictureClass={pictureClass}
        />
      </a>
    </div>
  );
};

export default TrustPilotLink;
