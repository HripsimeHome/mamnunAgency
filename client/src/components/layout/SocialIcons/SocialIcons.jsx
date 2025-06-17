import styles from "./SocialIcons.module.scss";
import Svg from "../../layout/Svg/Svg";

import {
  youtubeIcon,
  linkedInIcon,
  facebookIcon,
  instagramIcon,
  telegramIcon, 
} from "../../../assets/svg"; 
 
const socialIconsData = [
  {
    icon: youtubeIcon,       
    alt: "YouTube",    
    title: "",
    link: "https://youtube.com/@mamnunagency?si=nbS2rhZMimU_iyJP", 
  }, 

  {
    icon: linkedInIcon,       
    alt: "LinkedIn",     
    link: "https://www.linkedin.com/posts/mamnun-agency_internationaleducation-travel-educationagency-activity-7296309658208653315--Gdi?utm_source=share&utm_medium=member_android&rcm=ACoAAECGuLcBS5-TA8HIIsE57k1Lm_2ly88mfZM", 
  }, 

  {
    icon: facebookIcon,       
    alt: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61572399132304",     
  }, 

  {
    icon: instagramIcon,       
    alt: "Instagram",
    link: "https://www.instagram.com/mamnunagency?igsh=bzk0dGt4anhqbTlw",     
  }, 

  {
    icon: telegramIcon,       
    alt: "Telegram",
    link: "https://t.me/mamnuneducation",     
  }, 
]

function SocialIcons() {
  return (
    <div className={styles.socialIcons}>     
      {socialIconsData.map(({ icon, alt, link }, index) => (
      <a 
        key={index} 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={alt}
      >
      <Svg 
        id={icon}             
        alt={alt}                
        className={styles.socialIcons__icon} 
      />
      </a>
    ))}
  </div>
  )
}

export default SocialIcons;
