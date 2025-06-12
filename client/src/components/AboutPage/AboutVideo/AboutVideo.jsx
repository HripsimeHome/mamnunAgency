import styles from "./AboutVideo.module.scss";

const AboutVideo = () => {
  return (
    <section className={`${styles.aboutVideo} wrapperBlack`}>
      <div className="container">   
        
      {/* <video width="1052" height="562" controls autoPlay muted loop>
          <source src="../../../assets/videos/about/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        <div className={styles.aboutVideo__video}> 
          <video width="1052" height="562" controls autoPlay muted loop>
            <source src="/videos/about/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.aboutVideo__text}> 
          We are also a premier travel agency dedicated to providing unique travel packages and exceptional services. Our expertise extends beyond education, as we offer VIP passenger ground handling with Fast Track assistance at airports, ensuring a seamless travel experience for our clients.       
          </p> 
        </div> 
      </div>    
    </section>  
  );
};

export default AboutVideo; 