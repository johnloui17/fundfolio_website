import React, { useState, useEffect } from "react";

const getImageDimension = (imageType, dimensionType) => {
  let deviceWidth = 0;
  let dimension = 0;
  useEffect(() => {
    deviceWidth = window.innerWidth;
    console.log(deviceWidth);
  }, [deviceWidth]);
  if (imageType === "logo") {
    if (dimensionType === "width") {
      if (deviceWidth > 1920) {
        console.log("less",deviceWidth);
        dimension = 114;
      }
    } else {
      if (deviceWidth > 1920) {
        dimension = 20;
      }
    }
  } else {
  }
  return dimension;
};

export default getImageDimension;
