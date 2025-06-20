import { animated, useTransition } from "react-spring";

export const TransitionStyleTypes = {
  import: "import",
  opacity: "opacity",
  height: "height",
  rotateX: "rotateX",
  left: "left",
  right: "right",
  translateX: "translateX",
};

const TransitionProvider = ({
  style,
  inProp,
  className,
  duration,
  height,
  children,
  top,
}) => {
  const transDuration = duration ? duration : 300;

  const styles = {
    opacity: {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    },
    height: {
      from: { maxHeight: "0px" },
      enter: { maxHeight: `${height}px` || "165px" },
      leave: { maxHeight: "0px" },
    },
    rotateX: {
      from: { transform: "rotateX(90deg)" },
      enter: { transform: "rotateX(0deg)" },
      leave: { transform: "rotateX(90deg)" },
    },

    left: {
      from: { transform: "translateX(100%)", opacity: 0 },
      enter: { transform: "translateX(0%)", opacity: 1 },
      leave: { transform: "translateX(-100%)", opacity: 0 },
    },
    right: {
      from: { right: "-450px" },
      enter: { right: "0" },
      leave: { right: "-450px" },
    },
    top: {
      from: { top: "-50px" },
      enter: { top: top || "70px" },
      leave: { top: "-50px" },
    },
    translateX: {
      from: { translateX: "100%" },
      enter: { translateX: "0%" },
      leave: { translateX: "100%" },
    },
  };

  const transition = useTransition(inProp, {
    ...styles[style],
    config: { duration: transDuration },
  });

  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div style={style} className={className ? className : ""}>
            {children}
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default TransitionProvider;
