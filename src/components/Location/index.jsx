import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container, ImageBackground } from "./style";

const Location = (props) => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    if (window.innerWidth < 767) {
      setDevice("mobile");
    }
  }, []);
  console.log("device", device);

  return (
    <Container id="contact">
      <ImageBackground>
        {device === "mobile" ? (
          <Image
            layout={"fill"}
            src="/location_mobile.png"
            className="background"
          />
        ) : (
          <Image layout={"fill"} src="/location_web.png" className="background" />
        )}
      </ImageBackground>
    </Container>
  );
};

export default Location;
