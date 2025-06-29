import { useEffect, useRef, useState } from "react";

export const useLazy = (threshold, statement = true, backState = false) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const onLazyLoad = function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting && statement) {
      setIsInView(true);
    } else if (backState) {
      setIsInView(false);
    }
  };

  useEffect(() => {
    const menuObserver = new IntersectionObserver(onLazyLoad, {
      root: null,
      threshold: threshold ? threshold : 0.1,
    });
    if (ref.current) menuObserver.observe(ref.current);
    // eslint-disable-next-line
  }, [statement]);

  return { isInView, ref };
};
