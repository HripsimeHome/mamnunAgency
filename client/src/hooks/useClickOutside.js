import { useEffect } from "react";

export const useClickOutSide = (refs, onCloseState) => {
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      const el = e.target;
      const isRef = refs.every(
        (value) => value.current && !value.current.contains(el)
      );

      if (isRef) {
        onCloseState();
      }
    };
    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
