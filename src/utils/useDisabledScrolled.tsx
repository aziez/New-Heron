import { useEffect } from "react";

const useDisableBodyScroll = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = ""; // Reset overflow style when unmounting
    };
  }, []);
};

export default useDisableBodyScroll;
