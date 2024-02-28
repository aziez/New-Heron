import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Rotation from "./components/Rotation/Rotation";

const OrientationComponent = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");

    const handleOrientationChange = (event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsPortrait(event.matches);
    };

    setIsPortrait(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return (
    <React.StrictMode>{isPortrait ? <Rotation /> : <App />}</React.StrictMode>
  );
};

ReactDOM.render(<OrientationComponent />, document.getElementById("root"));
