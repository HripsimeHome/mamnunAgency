import styles from "./HomeReasons.module.scss";
import ImageWebp from './../../../layout/ImageWebp/ImageWebp';

import {
  expertiseImage,
  expertiseWebpImage,
  personalizedApproachImage,
  personalizedApproachWebpImage,
  improvementImage,
  improvementWebpImage,
  strongRelationshipsImage,
  strongRelationshipsWebpImage,
  transparencyIntegrityImage,
  transparencyIntegrityWebpImage,
} from "../../../../assets/images";

export const reasonsData = [
  {
    image: expertiseImage,
    webpImage: expertiseWebpImage,    
    title: "8+ Years of Expertise", 
    description: "Our experience and global network enable us to offer reliable and effective solutions"
  }, 

  {
    image: personalizedApproachImage,
    webpImage: personalizedApproachWebpImage, 
    title: "Personalized Approach", 
    description: "We tailor our services to meet each client’s unique goals and aspirations"
  }, 

  {
    image: improvementImage,
    webpImage: improvementWebpImage, 
    title: "Continuous Growth & Improvement", 
    description: "We never stop evolving, constantly enhancing our services to provide the best opportunities"
  }, 

  {
    image: strongRelationshipsImage,
    webpImage: strongRelationshipsWebpImage, 
    title: "Strong Relationships with Stakeholders", 
    description: "We collaborate closely with universities, institutions, and industry leaders to create lasting opportunities"
  }, 

  {
    image: transparencyIntegrityImage,
    webpImage: transparencyIntegrityWebpImage, 
    title: "Transparency & Integrity", 
    description: "No hidden fees, clear communication, and honest guidance every step of the way."
  }, 
]

const HomeReasons = () => {
  return (
    <section className={styles.homeReasons}>
      <h2 className="titleWhiteH2">
        Reasons to&nbsp;
        <span className="titlePrimaryH2">Choouse Us</span>
      </h2>

      <div className={styles.homeReasons__cardContainer}>
        {reasonsData.map(({ image, webpImage, title, description }, index) => (                              
        <div 
          key={index}
          className={styles.homeReasons__card}
        >
          <ImageWebp
            src={image}
            srcSet={webpImage}
            alt={title}
            />
          <h4 className={styles.homeReasons__title}> 
            {title}
          </h4>
          <p className={styles.homeReasons__description}> 
            {description}
          </p>
        </div>
        ))}
        {/* card */}
       </div>
       {/* cardContainer */}      
    </section>
  );
};

export default HomeReasons;