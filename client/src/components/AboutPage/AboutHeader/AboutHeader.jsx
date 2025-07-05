import styles from "./AboutHeader.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import {
  logoBlackImage,
  logoBlackWebpImage,
  aboutLogoAsset1Image,
  aboutLogoAsset1WebpImage,
  aboutLogoAsset2Image,
  aboutLogoAsset2WebpImage,
  aboutLogoAsset3Image,
  aboutLogoAsset3WebpImage,
  aboutLogoAsset4Image,
  aboutLogoAsset4WebpImage,
  aboutLogoAsset5Image,
  aboutLogoAsset5WebpImage,
  aboutLogoAsset6Image,
  aboutLogoAsset6WebpImage,
  aboutLogoAsset7Image,
  aboutLogoAsset7WebpImage,
} from "../../../assets/images";
import { useLazy } from "../../../hooks/useLazy";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

const AboutHeader = () => {
  const { isInView, ref } = useLazy(0.5);
  return (
    <section className={`${styles.aboutHeader} wrapperWhite`}>
      <div className="container">
        <div className={styles.aboutHeader__content}>
          <div className={styles.aboutHeader__text1}>
            <h2 className={styles.aboutHeader__title}>
              MAMNUN is not just an education consultancy agency
            </h2>
            <p className="textMain">
              We are also a premier travel agency dedicated to providing unique
              travel packages and exceptional services. Our expertise extends
              beyond education, as we offer VIP passenger ground handling with
              Fast Track assistance at airports, ensuring a seamless travel
              experience for our clients.
            </p>
          </div>

          <div className={styles.aboutHeader__logoWrapper}>
            <ImageWebp
              src={logoBlackImage}
              srcSet={logoBlackWebpImage}
              alt="MAMNUN Agency"
              className={styles.aboutHeader__logoAnim}
              pictureClass={styles.aboutHeader__logoAnimPicture}
            />
            <div className={styles.aboutHeader__assets}>
              <ImageWebp
                src={aboutLogoAsset1Image}
                srcSet={aboutLogoAsset1WebpImage}
                alt="asset"
                pictureClass={styles.aboutHeader__assetImgPicture}
                className={styles.aboutHeader__assetImg}
              />
              <ImageWebp
                src={aboutLogoAsset2Image}
                srcSet={aboutLogoAsset2WebpImage}
                alt="asset"
                pictureClass={styles.aboutHeader__assetImgPicture}
                className={styles.aboutHeader__assetImg}
              />

              <ImageWebp
                src={aboutLogoAsset3Image}
                srcSet={aboutLogoAsset3WebpImage}
                alt="asset"
                pictureClass={styles.aboutHeader__assetImgPicture}
                className={styles.aboutHeader__assetImg}
              />
              <ImageWebp
                src={aboutLogoAsset4Image}
                srcSet={aboutLogoAsset4WebpImage}
                alt="asset"
                pictureClass={styles.aboutHeader__assetImgPicture}
                className={styles.aboutHeader__assetImg}
              />

              <ImageWebp
                src={aboutLogoAsset5Image}
                srcSet={aboutLogoAsset5WebpImage}
                alt="asset"
                pictureClass={styles.aboutHeader__assetImgPicture}
                className={styles.aboutHeader__assetImg}
              />
              <ImageWebp
                src={aboutLogoAsset6Image}
                srcSet={aboutLogoAsset6WebpImage}
                alt="asset"
                pictureClass={styles.aboutHeader__assetImgPicture}
                className={styles.aboutHeader__assetImg}
              />
              <ImageWebp
                src={aboutLogoAsset7Image}
                srcSet={aboutLogoAsset7WebpImage}
                alt="asset"
                pictureClass={styles.aboutHeader__assetImgPicture}
                className={styles.aboutHeader__assetImg}
              />
            </div>
          </div>

          <div className={styles.aboutHeader__text2}>
            <p className="textMain">
              Whether you are seeking educational opportunities or planning your
              next adventure, MAMNUN is here to cater to all your travel needs,
              including ground transportation across the globe. Experience the
              perfect blend of education and travel with MAMNUN, where your
              satisfaction is our top priority!
            </p>
          </div>
        </div>
        {/* content */}

        <div ref={ref} className={styles.aboutHeader__briefContainer}>
          <TransitionProvider
            inProp={isInView}
            delay={300}
            style={TransitionStyleTypes.left}
            className={`${styles.aboutHeader__briefBlock} width60`}
          >
            <h2 className="titleSecondaryH2">
              Our&nbsp;
              <span className="titlePrimaryH2">Vision</span>
            </h2>
            <p className={styles.aboutHeader__description}>
              To bridge global learning opportunities, providing diverse
              educational programs worldwide to students while crafting unique
              travel experiences and memorable journeys customized to individual
              aspirations. Through education and travel, we strive to foster a
              global perspective, and cultural understanding.
            </p>
          </TransitionProvider>

          <TransitionProvider
            inProp={isInView}
            delay={300}
            style={TransitionStyleTypes.right}
            className={`${styles.aboutHeader__briefBlock} width40`}
          >
            <h2 className="titleSecondaryH2">
              Our&nbsp;
              <span className="titlePrimaryH2">Mission</span>
            </h2>
            <p className={styles.aboutHeader__description}>
              To challenge cultural stereotypes by promoting education and
              travel as opportunities for personal and professional growth for
              everyone.
            </p>
          </TransitionProvider>
        </div>
        {/* briefContainer */}
      </div>
    </section>
  );
};

export default AboutHeader;
