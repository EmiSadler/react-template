import React, { useEffect, useRef, useState } from "react";
import mojs from "@mojs/core";

const AnimatedButton = () => {
  const buttonRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!buttonRef.current) return;

    const scaleCurve = mojs.easing.path(
      "M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0"
    );

    const timeline = new mojs.Timeline();

    const burst1 = new mojs.Burst({
      parent: buttonRef.current,
      radius: { 0: 100 },
      angle: { 0: 45 },
      y: -10,
      count: 10,
      children: {
        shape: "circle",
        radius: 30,
        fill: ["yellow", "green"],
        strokeWidth: 15,
        duration: 500,
      },
    });

    const scaleAnimation = new mojs.Tween({
      duration: 900,
      onUpdate: (progress) => {
        const scaleProgress = scaleCurve(progress);
        buttonRef.current.style.transform = `scale3d(${scaleProgress}, ${scaleProgress}, 1)`;
      },
    });

    const burst2 = new mojs.Burst({
      parent: buttonRef.current,
      radius: { 0: 100 },
      angle: { 0: -45 },
      y: -10,
      count: 10,
      children: {
        shape: "circle",
        radius: 30,
        fill: ["white", "blue"],
        strokeWidth: 15,
        duration: 400,
      },
    });

    timeline.add(burst1, scaleAnimation, burst2);

    buttonRef.current.addEventListener("click", () => {
      if (!active) {
        timeline.play();
        setActive(true);
      } else {
        setActive(false);
      }
    });

    return () => {
      buttonRef.current.removeEventListener("click", () => {});
    };
  }, [active]);

  return (
    <button ref={buttonRef} id="heartButton" className={`button ${active ? "active" : ""}`}>
    </button>
  );
};

export default AnimatedButton;
