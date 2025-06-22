import styles from "./EducationStories.module.scss";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import { Navigation, Pagination } from "swiper/modules";
import { sliderArrowLeftIcon, sliderArrowRightIcon } from "../../../assets/svg";
import "swiper/css/pagination";
// import "./sliderDots.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

import { storyImage, storyWebpImage } from "../../../assets/images";

import { starStoryIcon } from "../../../assets/svg";

const storyData = [
  {
    description:
      "While pursuing my Bachelor’s degree in Dubai, I realized I wanted to explore new opportunities for my education. After careful consideration, I decided to transfer my studies to Berlin, a city known for its vibrant academic environment. The process of transferring was challenging, but I was determined to make it happen. With the support of MAMNUN Agency, I received expert guidance in selecting the right university and navigating the visa process. Thanks to their assistance, I successfully transitioned to my new academic journey in Berlin, opening doors to a world of possibilities!",
    image: storyImage,
    webpImage: storyWebpImage,
    alt: "Success Story: A Journey to Berlin",
    name: "Otabek G.",
    title: "Success Story: A Journey to Berlin",
  },

  {
    description:
      "As I navigated the challenge of choosing the right destination for my academic journey, my focus was primarily on my passion for football. MAMNUN Agency played a crucial role in helping me identify the best educational path for my future. Applying to study in Warsaw turned out to be one of the best decisions of my life. Not only am I pursuing my diploma, which is a significant step towards my career, but I also have the incredible opportunity to play for one of the top football teams in Poland. Thanks to MAMNUN, I am successfully balancing my education and my love for the game!",
    image: storyImage,
    webpImage: storyWebpImage,
    alt: "Success Story: A Winning Combination of Education and Football",
    name: "Farrukh A.",
    title: "Success Story: A Winning Combination of Education and Football",
  },

  // {
  //   description: "After reaching out to several agencies, I faced repeated challenges as they either denied my requests or suggested destinations that didn’t align with my goals. I was determined to study in Warsaw, where I longed to experience student life alongside my childhood friends, who were also supported by MAMNUN in their journey. Fortunately, MAMNUN stepped in to assist me in transferring my studies from Belarus to Poland. This decision not only opened the door to my academic aspirations but also led me to find the love of my life - my wife. Thanks to MAMNUN, I am thriving both in my studies and in my personal life!",
  //   image: storyImage,
  //   webpImage: storyWebpImage,
  //   alt: "Success Story: Finding My Path to Poland",
  //   name: "Jony",
  //   title: "Success Story: Finding My Path to Poland",
  // },

  // {
  //   description: "Big thanks to the MAMNUN agency for helping me start my Ausbildung! The service I received was exceptional, and their support throughout the entire process was amazing. I truly appreciate their professionalism and dedication to my success. I highly recommend MAMNUN Agency to anyone looking to embark on their educational journey!",
  //   image: storyImage,
  //   webpImage: storyWebpImage,
  //   alt: "A Grateful Journey to My Ausbildung",
  //   name: "Mukhammad Bobur J.",
  //   title: "A Grateful Journey to My Ausbildung",
  // },

  // {
  //   description: "While I was studying for my Bachelor’s degree in my home country, I always dreamed of traveling to amazing places like Paris, Rome, and Barcelona while being financially independent. MAMNUN Agency helped me make those dreams come true through the Work and Travel program in Germany. With their support, I got to explore new cities and gain valuable experiences while working. I am very happy with my journey and thankful to MAMNUN for helping me reach my goals!",
  //   image: storyImage,
  //   webpImage: storyWebpImage,
  //   alt: "Work and Travel - Making My Dreams Come True",
  //   name: "Dilafruz N.",
  //   title: "Work and Travel - Making My Dreams Come True",
  // },

  // {
  //   description: "As a student in Warsaw, I wanted to improve my German and immerse myself in the culture. The Work and Travel program from MAMNUN Agency was the perfect opportunity for me. Not only did I enhance my language skills, but I also experienced the vibrant culture of Germany. Plus, the income I earned helped me pay for my Bachelor’s tuition fees. I am very grateful to MAMNUN for making this amazing experience possible!",
  //   image: storyImage,
  //   webpImage: storyWebpImage,
  //   alt: "Work and Travel - A Path to Growth and Opportunity",
  //   name: "Alpha",
  //   title: "Work and Travel - A Path to Growth and Opportunity",
  // },

  // {
  //   description: "I have a passion for Fashion Design, and I love speaking German. After graduating with a Diploma in Fashion Design from KSA School in Krakow, where MAMNUN helped me get recruited, I applied to several German universities specializing in Fashion Design. Unfortunately, my Benkov college diploma from Uzbekistan was not recognized in Germany, and I was rejected by all the universities. Feeling stressed, I turned to MAMNUN for help, and they provided me with the best solution by assisting me in becoming a student in Linz, Austria. I am incredibly grateful for their support in making my dreams come true!",
  //   image: storyImage,
  //   webpImage: storyWebpImage,
  //   alt: "Overcoming Challenges in Fashion Design Education",
  //   name: "Jasmin Kh.",
  //   title: "Overcoming Challenges in Fashion Design Education",
  // },

  // {
  //   description: "While I was studying at Tashkent State Economy University, I felt lonely when my sisters went to Germany for their studies. I wanted to join them in Frankfurt, a city known for its great public universities and lively student life. I was excited about the chance to get a high-quality education for free. With help from MAMNUN, I applied to a well-known university in Frankfurt for Corporate Law. Now, I am back with my sisters, enjoying the vibrant student life in this amazing city and working towards my dreams!",
  //   image: storyImage,
  //   webpImage: storyWebpImage,
  //   alt: "Enjoying Student Life in Frankfurt",
  //   name: "Nilufar Kh",
  //   title: "Enjoying Student Life in Frankfurt",
  // },

  // {
  //   description: "I always dreamed of studying Economics and Management at one of the top universities in the Czech Republic, and now I am living that dream in Prague. With the help of MAMNUN, I chose the right university and gathered all the necessary documents for my application. Even the internal test was not stressful, thanks to the great assistance from MAMNUN, which helped me prepare effectively. I was thrilled to receive my official offer from the university, and MAMNUN also assisted me in finding accommodation and made the visa process smooth and easy. Now, I am enjoying my studies and the vibrant life in this beautiful city!",
  //   image: storyImage,
  //   webpImage: storyWebpImage,
  //   alt: "Studying Economics and Management in Prague",
  //   name: "Mukhabbat O.",
  //   title: "Studying Economics and Management in Prague",
  // },

  // {
  //   description: "I always wanted to experience life in Germany, so I decided to join the Au Pair program. With the help of MAMNUN, I successfully got my visa and moved to Germany. I enjoyed my time as an Au Pair, taking care of children and learning about the culture. After completing the program, I wanted to continue my education, so I applied for a Hotel Management Ausbildung. MAMNUN assisted me throughout the application process, making it easy and stress-free. Now, I am excited to start my training in hotel management and continue my journey in Germany!",
  //   image: storyImage,
  //   webpImage: storyWebpImage,
  //   alt: "From Au Pair to Hotel Management in Germany",
  //   name: "Aygerim R.",
  //   title: "From Au Pair to Hotel Management in Germany",
  // }
];

const EducationStories = () => {
  return (
    <section
      className={`${styles.educationStories} wrapperWhite wrapperPadding`}
    >
      <div className="container">
        <h2 className="titleSecondaryH2">
          Success stories of the&nbsp;
          <span className="titlePrimaryH2">students placed abroad</span>
        </h2>

        <div className={styles.educationStories__slideContainer}>
          {storyData.map(
            ({ description, image, webpImage, alt, name, title }, index) => (
              <div key={index} className={styles.educationStories__slide}>
                <p className={styles.educationStories__slideDescription}>
                  {description}
                </p>
                <hr className={styles.educationStories__slideLine} />

                <div className={styles.educationStories__storyContainer}>
                  <div className={styles.educationStories__storyBLock}>
                    <ImageWebp
                      src={image}
                      srcSet={webpImage}
                      alt={alt}
                      className={styles.educationStories__storyImg}
                    />

                    <div className={styles.educationStories__storyInfo}>
                      <span className={styles.educationStories__studientName}>
                        {name}
                      </span>
                      <span className={styles.educationStories__storyTitle}>
                        {title}
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
                    {/* stars */}
                  </div>
                </div>
              </div>
            )
          )}
          {/* /slide */}
        </div>
      </div>
    </section>
  );
};

export default EducationStories;
