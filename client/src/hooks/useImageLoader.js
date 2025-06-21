import { useEffect, useState } from "react";

export const useImageLoader = (webpImg, shouldLoad = true) => {
  const [loading, setLoading] = useState(shouldLoad);

  const preloadImages = (webpImg) => {
    const img = new Image();
    img.src = webpImg;
    img.onload = () => {
      setLoading(false);
    };
  };

  useEffect(() => {
    if (!webpImg || !shouldLoad) return;
    setLoading(true);

    preloadImages(webpImg);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading;
};
