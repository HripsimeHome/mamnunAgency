import React from "react";
import Backdrop from "../../../layout/Backdrop/Backdrop";
import NewPortalProvider from "../../../../providers/NewPortalProvider";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../../providers/TransitionProvider";

import styles from "./ServicesServicesModal.module.scss";
import Svg from "../../../layout/Svg/Svg";
import { thinCrossIcon } from "../../../../assets/svg";

const ServicesServicesModal = ({ show, onClose, service }) => {
  return (
    <>
      <Backdrop inProp={show} onClose={onClose} />
      <NewPortalProvider>
        <TransitionProvider
          style={TransitionStyleTypes.opacity}
          inProp={show}
          className={styles.servicesServicesModal}
        >
          <div
            className={`thinScrollbar ${styles.servicesServicesModal__wrapper}`}
          >
            <button
              onClick={onClose}
              className={styles.servicesServicesModal__closeBtn}
            >
              <Svg id={thinCrossIcon} />
            </button>
            {service.arrival && service.departure && service.transit && (
              <div className={styles.servicesServicesModal__table}>
                <div className={styles.servicesServicesModal__row}>
                  <p className={styles.servicesServicesModal__cellHeader}>
                    {service.arrivalTitle || "Arrival"}
                  </p>
                  <div className={styles.servicesServicesModal__cell}>
                    {service.arrival}
                  </div>
                </div>
                <div className={styles.servicesServicesModal__row}>
                  <p className={styles.servicesServicesModal__cellHeader}>
                    {service.departureTitle || "Departure"}
                  </p>
                  <div className={styles.servicesServicesModal__cell}>
                    {service.departure}
                  </div>
                </div>
                <div className={styles.servicesServicesModal__row}>
                  <p className={styles.servicesServicesModal__cellHeader}>
                    {service.transitTitle || "Transit / Connection"}
                  </p>
                  <div className={styles.servicesServicesModal__cell}>
                    {service.transit}
                  </div>
                </div>
              </div>
            )}
            {service.benefits && (
              <div className={styles.servicesServicesModal__paragraphBlock}>
                <h4
                  className={styles.servicesServicesModal__paragraphBlockTitle}
                >
                  {service.benefitsTitle ? (
                    <>
                      {service.benefitsTitle[0]}{" "}
                      <span className="textPrimary">
                        {service.benefitsTitle[1]}
                      </span>
                    </>
                  ) : (
                    <>
                      Benefits of using{" "}
                      <span className="textPrimary">{service.title}</span>
                    </>
                  )}
                </h4>
                <div
                  className={styles.servicesServicesModal__paragraphBlockList}
                >
                  {service.benefits.map(([title, text], index) => (
                    <p
                      key={index}
                      className={
                        styles.servicesServicesModal__paragraphBlockText
                      }
                    >
                      <span style={{ fontWeight: 600 }}>{title}:</span> {text}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {service.pricing && (
              <div className={styles.servicesServicesModal__paragraphBlock}>
                <h4
                  className={styles.servicesServicesModal__paragraphBlockTitle}
                >
                  Pricing and booking{" "}
                  <span className="textPrimary">information</span>
                </h4>
                <div
                  className={styles.servicesServicesModal__paragraphBlockList}
                >
                  <p
                    className={styles.servicesServicesModal__paragraphBlockText}
                  >
                    {service.pricing}
                  </p>
                </div>
              </div>
            )}
            {service.options && (
              <div className={styles.servicesServicesModal__paragraphBlock}>
                <h4
                  className={styles.servicesServicesModal__paragraphBlockTitle}
                >
                  Booking Process and{" "}
                  <span className="textPrimary">Options</span>
                </h4>
                <div
                  className={styles.servicesServicesModal__paragraphBlockList}
                >
                  <p
                    className={styles.servicesServicesModal__paragraphBlockText}
                  >
                    {service.options}
                  </p>
                </div>
              </div>
            )}
            {service.features && (
              <div className={styles.servicesServicesModal__paragraphBlock}>
                <h4
                  className={styles.servicesServicesModal__paragraphBlockTitle}
                >
                  Safety and{" "}
                  <span className="textPrimary">Comfort Features</span>
                </h4>
                <div
                  className={styles.servicesServicesModal__paragraphBlockList}
                >
                  <p
                    className={styles.servicesServicesModal__paragraphBlockText}
                  >
                    {service.features}
                  </p>
                </div>
              </div>
            )}
            <div className={styles.servicesServicesModal__paragraphBlock}>
              <h4 className={styles.servicesServicesModal__paragraphBlockTitle}>
                {service.faqsTitle ? (
                  <>
                    {service.faqsTitle[0]}{" "}
                    <span className="textPrimary">{service.faqsTitle[1]}</span>
                  </>
                ) : (
                  <>
                    FAQs Related to{" "}
                    <span className="textPrimary">{service.title}</span>
                  </>
                )}
              </h4>
              <div className={styles.servicesServicesModal__paragraphBlockList}>
                {service.faqs.map(([question, answer], index) => (
                  <div
                    key={index}
                    className={styles.servicesServicesModal__faqItem}
                  >
                    <h6
                      className={styles.servicesServicesModal__faqQuestionText}
                    >
                      {question}
                    </h6>
                    <p
                      className={
                        styles.servicesServicesModal__paragraphBlockText
                      }
                    >
                      {answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TransitionProvider>
      </NewPortalProvider>
    </>
  );
};

export default ServicesServicesModal;
