import React from "react";
import { animated, useTransition } from "react-spring";

export const TransitionStyleTypes = {
  opacity: "opacity",
  right: "right",
  left: "left",
  leftToRight: "leftToRight",
  top: "top",
  bottom: "bottom",
  zoomIn: "zoomIn",
  height: "height",
};

const TransitionProvider = ({
  style,
  inProp,
  className,
  duration,
  delay,
  children,
  isPicture,
  height,
}) => {
  const transDuration = duration ? duration : 500;
  const styles = {
    [TransitionStyleTypes.opacity]: {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    },
    [TransitionStyleTypes.right]: {
      from: { opacity: 0, translateX: "60px" },
      enter: { opacity: 1, translateX: "0%" },
      leave: { opacity: 0, translateX: "60px" },
    },
    [TransitionStyleTypes.left]: {
      from: { opacity: 0, translateX: "-60px" },
      enter: { opacity: 1, translateX: "0%" },
      leave: { opacity: 0, translateX: "-60px" },
    },
    [TransitionStyleTypes.leftToRight]: {
      from: { opacity: 0, translateX: "100%" },
      enter: { opacity: 1, translateX: "0%" },
      leave: { opacity: 0, translateX: "-100%" },
    },
    [TransitionStyleTypes.top]: {
      from: { opacity: 0, translateY: "-60px" },
      enter: { opacity: 1, translateY: "0%" },
      leave: { opacity: 0, translateY: "-60px" },
    },
    [TransitionStyleTypes.bottom]: {
      from: { opacity: 0, translateY: "60px" },
      enter: { opacity: 1, translateY: "0%" },
      leave: { opacity: 0, translateY: "60px" },
    },
    [TransitionStyleTypes.zoomIn]: {
      from: { opacity: 0, scale: "0" },
      enter: { opacity: 1, scale: "1" },
      leave: { opacity: 0, scale: "0" },
    },
    height: {
      from: { maxHeight: "0px" },
      enter: { maxHeight: height ? `${height}px` : "165px" },
      leave: { maxHeight: "0px" },
    },
  };

  const transition = useTransition(inProp, {
    ...styles[style],
    trail: delay || 0,
    config: { duration: transDuration },
  });

  const Wrapper = isPicture ? animated.picture : animated.div;

  return (
    <>
      {transition((style, item) =>
        item ? (
          <Wrapper style={style} className={className ? className : ""}>
            {children}
          </Wrapper>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default TransitionProvider;
