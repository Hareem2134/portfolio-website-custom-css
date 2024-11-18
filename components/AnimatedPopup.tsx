import { ReactNode, useEffect, useState } from "react";
import "../src/app/globals.css";

interface AnimatedPopupProps {
  animationType: string;
  children: ReactNode;
}

export default function AnimatedPopup({animationType, children} : AnimatedPopupProps) {
  
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  const animationClass =
      animationType === "popup"
      ? "popup"
      : animationType === "tracking"
      ? "tracking-in-expand-fwd-bottom"
      : animationType === "focus"
      ? "text-focus-in"
      : "";

      return <div className={showAnimation ? animationClass : ""}>{children}</div>;
                                                                                                                                                                                                                                                                                                                                                          
}