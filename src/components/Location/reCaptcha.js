import React, { useState, useEffect } from "react";
const handleLoaded = (_) => {
  window.grecaptcha.ready((_) => {
    window.grecaptcha
      .execute("6LfTTIcaAAAAAGQDA__sAkZNZadGNeQCmld4Cpvz", {
        action: "submit",
      })
      .then((token) => {
        // ...
      });
  });
};

const ReCaptcha = () => {
  useEffect(() => {
    // Add reCaptcha
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=6LfTTIcaAAAAAGQDA__sAkZNZadGNeQCmld4Cpvz";
    script.addEventListener("load", handleLoaded);
    document.body.appendChild(script);
  }, []);
  return (
    <div
      className="g-recaptcha"
      data-sitekey="6LfTTIcaAAAAAGQDA__sAkZNZadGNeQCmld4Cpvz_"
      data-size="invisible"
    ></div>
  );
};

export default ReCaptcha;