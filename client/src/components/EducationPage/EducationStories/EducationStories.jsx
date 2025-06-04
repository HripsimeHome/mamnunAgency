import styles from "./EducationStories.module.scss";

const EducationStories = () => {
  return (
   <section className={`${styles.educationStories} wrapperWhite`}>
    <div className="container">
      <h2 className="titleBlackh2">Success stories of the&nbsp;          
        <span className="titlePurpleh2">students placed abroad             
        </span>
      </h2>  

      <div className={styles.educationStories__cardContainer}> 
         <div className={styles.educationStories__card}> 
          <p>
            As I navigated the challenge of choosing the right destination for my academic journey, my focus was primarily on my passion for football. MAMNUN Agency played a crucial role in helping me identify the best educational path for my future. Applying to study in Warsaw turned out to be one of the best decisions of my life. Not only am I pursuing my diploma, which is a significant step towards my career, but I also have the incredible opportunity to play for one of the top football teams in Poland. Thanks to MAMNUN, I am successfully balancing my education and my love for the game!
          </p>

         </div>
        
      </div>


      
       
    </div>      
   </section>  
  );
};

export default EducationStories;