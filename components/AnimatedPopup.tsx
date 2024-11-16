import { useEffect, useState } from "react";
import "../src/app/globals.css";

export default function AnimatedPopup({animationType, children}:any) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  const animationClass =
      animationType === "bounce" ? "bounce" : "popup";

  return (
    <div>
      {showAnimation && <div className={animationClass}>{children}</div>}
    </div>
  );
}

 
