import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Banner,
  Title,
  SemiTitle,
  CloseButton,
} from "./SecBannerStyles";

const SecBanner = ({ label, setShowPopUp }) => {
  const [showBanner, setShowBanner] = useState(true);

  const handleDismiss = () => {
    setShowPopUp(false);
    setShowBanner(false);
  };

  return (
    <Wrapper style={{ display: showBanner ? "block" : "" }}>
      <Banner style={label.style ? label.style : { height: "65%" }}>
        <Title>{label.title}</Title>
        <SemiTitle>{label.text}</SemiTitle>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <CloseButton onClick={handleDismiss}>אישור</CloseButton>
        </div>
      </Banner>
    </Wrapper>
  );
};

export default SecBanner;