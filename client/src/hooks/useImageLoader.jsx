import { useEffect, useState } from "react";

export const useImageLoader = ( image, webpImg, shouldLoad = true) => {
  const [loading, setLoading] = useState(shouldLoad);

  const preloadImages = ( image, webpImg) => {
    const img = new Image();
    img.src = webpImg;
    img.onload = () => {
      setLoading(false);
    };
  };

  useEffect(() => {
    if (!webpImg || !image || !shouldLoad) return;
    setLoading(true);

    preloadImages(webpImg, image);
    
    
  }, []);

  return loading;
};
