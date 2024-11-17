import { ReactNode, useEffect, useState } from "react";
import "../src/app/globals.css";

interface AnimatedPopupProps {
  animationType: "bounce" | "popup" | string;
  children: ReactNode;
}

export default function AnimatedPopup({animationType, children} : AnimatedPopupProps) {
  
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

 
