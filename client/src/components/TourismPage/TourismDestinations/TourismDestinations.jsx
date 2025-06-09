import styles from "./TourismDestinations.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import {  
  samarkandImage, 
  samarkandWebpImage,

  bukharaImage,
  bukharaWebpImage,

  khivaImage,
  khivaWebpImage,

  tashkentImage,
  tashkentWebpImage,

  nukusImage, 
  nukusWebpImage,

  chimganImage, 
  chimganWebpImage,
  
} from "../../../assets/images";

 

const destinationsData = [
  {
    img: samarkandImage,
    webpImg: samarkandWebpImage,
    title: "Samarkand",
    description:      
    <>The jewel of the Silk Road, <strong>Samarkand</strong> is famous for its breathtaking architectural wonders. Visit the <strong>Registan Square, Gur-e-Amir Mausoleum</strong>, and the iconic <strong>Shah-i-Zinda complex</strong>. Samarkand is also known for its rich crafts, including <strong>silk paper</strong> production and <strong>carpet weaving</strong>. The city’s <strong>Samarkand bread</strong> is a must-try, and you can witness the ancient art of <strong>calligraphy</strong> here.
    </>
  },
  {
    img: bukharaImage,
    webpImg: bukharaWebpImage,
    alt: "Samarkand",
    title: "Bukhara",
    description: "Step back in time in Bukhara, an ancient city steeped in history. The Bukhara Ark (fortress), Bolo Haouz Mosque, and Ismail Samani Mausoleum are essential landmarks. Bukhara is the birthplace of miniature painting, and its master artisans still create stunning works that capture the city’s essence. Also, don’t miss the famous Nadir Divan-Beghi Khanqah and its mesmerizing tile work."
  },
  
  {
    img: khivaImage,
    webpImg: khivaWebpImage,
    alt: "Bukhara",
    title: "Khiva",
    description: "A preserved oasis city, Khiva feels like stepping into a living museum. Wander through the Itchan Kala (the walled inner city) and marvel at the Kalta Minor Minaret and Juma Mosque. Khiva is renowned for its ceramics, and you can visit local workshops where these traditional crafts are still made by hand. Explore the Karakum Desert and Kyzylkum Desert, where you can take part in camel rides or enjoy stargazing by night."
  },
  
  {
    img: tashkentImage,
    webpImg: tashkentWebpImage,
    alt: "Tashkent",
    title: "Tashkent",
    description: "The capital city, Tashkent, offers a mix of modernity and ancient history. Visit the Khast Imam Complex, which houses the ancient Uthman Quran, one of the oldest copies of the Quran in the world. The Chorsu Bazaar is an excellent place to experience local life and taste delicious Uzbek street food. Don’t miss a stroll in the city’s Amir Timur Square, and enjoy the blend of Soviet-era architecture with modern buildings."
  },
  
  {
    img: nukusImage,
    webpImg: nukusWebpImage,
    alt: "Nukus & the Savitsky Museum",
    title: "Nukus & the Savitsky Museum",
    description: "In Nukus, you will find the Savitsky Museum, home to one of the largest collections of Russian avant-garde art outside of Russia. This lesser-known destination offers an off-the-beaten-path experience of Uzbekistan’s rich art and cultural history."
  },
  
  {
    img: chimganImage,
    webpImg: chimganWebpImage,
    alt: "Chimgan Mountains & Charvak Reservoir",
    title: "Chimgan Mountains & Charvak Reservoir",
    description: "For nature lovers and adventurers, the Chimgan Mountains offer excellent hiking, trekking, and skiing in the winter months. The nearby Charvak Reservoir is a perfect spot for water activities like boating, fishing, and relaxing by the shore."
  }  
]


const TourismDestinations = () => {
  return (        
    <section className={`${styles.tourismDestinations} wrapperWhite`}>
      <div className="container">  
        <h2 className="titleBlackh2">Popular Destinations and Attractions&nbsp;           
          <span className="titlePurpleh2">in Uzbekistan         
          </span>
        </h2>  
        <p className={styles.tourismDestinations__introText}>
          We also offer exclusive travel tips, local secrets, and off-the-beaten-path experiences available only on request. Let us show you the hidden gems of Uzbekistan — places that even many locals don’t know!          
        </p>

         <div className={styles.tourismDestinations__container}>
          {destinationsData.map(({ img, webpImg, alt, title, description }, index) => (
          <div className={styles.tourismDestinations__card} key={index}>            
            <ImageWebp 
              src={img} 
              srcSet={webpImg}
              alt={alt}                
              className={styles.tourismDestinations__img} 
            />

            <div className={styles.tourismDestinations__cardTest}>
              <h4 className={styles.tourismDestinations__title}>  
                {title}
              </h4> 
              <p className={styles.tourismDestinations__description}>
                {description}
              </p>
            </div>           
          </div> // card          
          ))}     
                 
         </div>
         {/* /container */}

         <h4 className={styles.tourismDestinations__welcomeText}>
          Welcome to Uzbekistan!
         </h4>
      </div>       
    </section>  
  );
};

export default TourismDestinations; 