import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../images/loading.json";
import { Container } from "../styles/components/loading";

export default function Loading() {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Container>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </Container>
    </>
  );
}
