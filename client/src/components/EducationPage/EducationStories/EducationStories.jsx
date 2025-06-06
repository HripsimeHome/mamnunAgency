import styles from "./EducationStories.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

import {
  storyImage, 
  storyWebpImage
} from "../../../assets/images";

import {
  starStoryIcon 
} from "../../../assets/svg";


const EducationStories = () => {
  return (
    <section className={`${styles.educationStories} wrapperWhite`}>
      <div className="container"> 
        <h2 className="titleBlackh2">Success stories of the&nbsp;          
          <span className="titlePurpleh2">students placed abroad             
          </span>
        </h2>  

        <div className={styles.educationStories__slideContainer}> 
          <div className={styles.educationStories__slide}> 
            <p className={styles.educationStories__slideDescription}>
              As I navigated the challenge of choosing the right destination for my academic journey, my focus was primarily on my passion for football. MAMNUN Agency played a crucial role in helping me identify the best educational path for my future. Applying to study in Warsaw turned out to be one of the best decisions of my life. Not only am I pursuing my diploma, which is a significant step towards my career, but I also have the incredible opportunity to play for one of the top football teams in Poland. Thanks to MAMNUN, I am successfully balancing my education and my love for the game!
            </p>          
            <hr className={styles.educationStories__slideLine} />

            <div className={styles.educationStories__storyContainer}> 
              <div className={styles.educationStories__storyBLock}>
                <ImageWebp 
                  src={storyImage} 
                  srcSet={storyWebpImage}
                  alt="Success stories of the students"                 
                  className={styles.educationStories__storyImg} 
                /> 

                <div className={styles.educationStories__storyInfo}>
                  <span className={styles.educationStories__studientName}>
                    Farrukh A.
                  </span>
                  <span className={styles.educationStories__storyTitle}>
                    A Winning Combination of Education and Football
                  </span>
                </div>
              </div>

              <div className={styles.educationStories__starBlock}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Svg
                    key={index}
                    id={starStoryIcon}
                    className={styles.educationStories__starIcon}
                  />
                ))}
              </div>
            </div>    
          </div>  
          {/* /slide  */}

          <div className={styles.educationStories__slide}> 
            <p className={styles.educationStories__slideDescription}>
              As I navigated the challenge of choosing the right destination for my academic journey, my focus was primarily on my passion for football. MAMNUN Agency played a crucial role in helping me identify the best educational path for my future. Applying to study in Warsaw turned out to be one of the best decisions of my life. Not only am I pursuing my diploma, which is a significant step towards my career, but I also have the incredible opportunity to play for one of the top football teams in Poland. Thanks to MAMNUN, I am successfully balancing my education and my love for the game!
            </p>          
            <hr className={styles.educationStories__slideLine} />

            <div className={styles.educationStories__storyContainer}> 
              <div className={styles.educationStories__storyBLock}>
                <ImageWebp 
                  src={storyImage} 
                  srcSet={storyWebpImage}
                  alt="Success stories of the students"                 
                  className={styles.educationStories__storyImg} 
                /> 

                <div className={styles.educationStories__storyInfo}>
                  <span className={styles.educationStories__studientName}>
                    Jony
                  </span>
                  <span className={styles.educationStories__storyTitle}>
                    Finding My Path to Poland
                  </span>
                </div>
              </div>

              <div className={styles.educationStories__starBlock}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Svg
                    key={index}
                    id={starStoryIcon}
                    className={styles.educationStories__starIcon}
                  />
                ))}
              </div>
            </div>    
          </div>
        {/* /slide      */}
                
        </div>   
      </div>  
    </section>  
  );
};

export default EducationStories;