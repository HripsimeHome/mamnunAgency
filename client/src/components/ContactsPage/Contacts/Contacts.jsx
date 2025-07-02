import styles from "./Contacts.module.scss";
import { phone, email, address } from "../../../constants/contacts";
import MainBtn from "../../layout/MainBtn/MainBtn.jsx";
import SocialIcons from "../../layout/SocialIcons/SocialIcons";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import MainInput from "../../layout/MainInput/MainInput";

import {
  phoneImage,
  phoneWebpImage,
  emailImage,
  emailWebpImage,
  locationImage,
  locationWebpImage,
} from "../../../assets/images";
import Select from "../../layout/Select/Select.jsx";
import { useFormValue } from "../../../hooks/useFormValue";
import { useDispatch, useSelector } from "react-redux";
import {
  sendContactMail,
  setContactError,
} from "../../../store/slices/constactsSlice.js";
import { useState } from "react";
import { openTooltip } from "../../../store/slices/UISlice.js";

const assistanceOptions = [
  {
    value: "Partner",
    name: "Partner",
  },
  {
    value: "Student",
    name: "Student",
  },
  {
    value: "Parent",
    name: "Parent",
  },
  {
    value: "Traveler",
    name: "Traveler",
  },
];

const contactInfoData = [
  {
    image: phoneImage,
    webpImage: phoneWebpImage,
    title: "Phone:",
    text: phone,
  },

  {
    image: emailImage,
    webpImage: emailWebpImage,
    title: "Email:",
    text: email,
  },

  {
    image: locationImage,
    webpImage: locationWebpImage,
    title: "Address:",
    text: address,
  },
];

const telegramOptions = ["Student", "Parent"];

const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.contacts.contactError);
  const { onChange, onChangeSelect, formData, getError } = useFormValue(
    {
      fullName: "",
      contactNumber: "",
      needAssistanceAs: "",
      email: "",
      telegramLink: "",
      message: "",
    },
    setContactError,
    error
  );
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await dispatch(sendContactMail(formData)).unwrap();
      dispatch(openTooltip("Form submitted successfully."));
    } catch (error) {
      dispatch(openTooltip("Failed to submit."));
    }
    setLoading(false);
  };

  return (
    <section className={`${styles.contacts} wrapperWhite wrapperPadding`}>
      <div className="container">
        <h2 className={`${styles.contacts__sectionTtitle} titlePrimaryH2`}>
          Write&nbsp;
          <span className="titleSecondaryH2">to us</span>
        </h2>
        <div className={styles.contacts__container}>
          <form onSubmit={onSubmit} className={styles.contacts__form}>
            <div className={styles.contacts__formCol}>
              <MainInput
                disabled={loading}
                value={formData.fullName}
                isInvalid={getError("fullName")}
                name="fullName"
                onChange={onChange}
                placeholder="Full name:"
              />
              <MainInput
                disabled={loading}
                value={formData.contactNumber}
                isInvalid={getError("contactNumber")}
                name="contactNumber"
                onChange={onChange}
                placeholder="Phone number:"
              />
            </div>
            <Select
              options={assistanceOptions}
              onChange={(val) => onChangeSelect("needAssistanceAs", val)}
              selectedValue={formData.needAssistanceAs}
              disabled={loading}
              isInvalid={getError("needAssistanceAs")}
              name="needAssistanceAs"
              placeholder="Need assistance as a..."
            />
            {!telegramOptions.includes(formData.needAssistanceAs) ? (
              <MainInput
                disabled={loading}
                value={formData.email}
                isInvalid={getError("email")}
                name="email"
                onChange={onChange}
                placeholder="Email:"
              />
            ) : (
              <MainInput
                disabled={loading}
                value={formData.telegramLink}
                isInvalid={getError("telegramLink")}
                name="telegramLink"
                onChange={onChange}
                placeholder="Telegram link:"
              />
            )}
            <MainInput
              isTextArea
              className={styles.contacts__textArea}
              disabled={loading}
              value={formData.message}
              isInvalid={getError("message")}
              name="message"
              onChange={onChange}
              placeholder="Message:"
            />
            <MainBtn disabled={loading} className={styles.authWrapper__btn}>
              {loading ? "Sending..." : "Send"}
            </MainBtn>
          </form>
          <div className={styles.contacts__info}>
            {contactInfoData.map(({ image, webpImage, title, text }, index) => (
              <div key={index} className={styles.contacts__contactItem}>
                <ImageWebp
                  src={image}
                  srcSet={webpImage}
                  alt={title}
                  className={styles.contacts__icon}
                />
                <span className={styles.contacts__title}>{title}</span>
                <span className={styles.contacts__text}>{text}</span>
              </div>
            ))}
          </div>

          <SocialIcons className={styles.contacts__socialIcons} />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
