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

  return (
    <Container id="contact">
      <ImageBackground style={{ margin: 0 }}>
        {device === "mobile" ? (
          <Image
            style={{ margin: "0" }}
            layout={"fill"}
            src="/location_mobile.png"
            className="background"
          />
        ) : (
          <Image
            style={{ margin: 0 }}
            layout={"fill"}
            src="/locationWeb.png"
            className="background"
          />
        )}
      </ImageBackground>
    </Container>
  );
};

export default Location;
