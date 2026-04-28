"use client";
import React from "react";

import Grainient from "./animation/background";

function Background() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Grainient
        color1="#701a7a"
        color2="#0A0A0B"
        color3="#365314"
        timeSpeed={1}
        colorBalance={0}
        warpStrength={2}
        warpFrequency={5}
        warpSpeed={1}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={5}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
        className="absolute top-0 z-0"
      />
    </div>
  );
}

export default Background;
