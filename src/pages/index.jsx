import { useState, useEffect } from "react";
import App from "../components/App";
import Home from "../components/Home";
import About from "../components/About";
import OurWay from "../components/OurWay";
import OurProduct from "../components/OurProduct";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import { Loader } from "../components/Loader";
import debounce from "lodash.debounce";
export default function HomePage() {
  const [transparent, setTransparent] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [isLoading, setLoading] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  // let aboutOffset;
  // let ourWayOffset;
  // let productsOffset;
  // let partnersOffset;
  // let contactOffset;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2500);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  var checkScrollSpeed = (function (settings) {
    settings = settings || {};

    var lastPos,
      newPos,
      timer,
      delta,
      delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function () {
      newPos = window.scrollY;
      if (lastPos != null) {
        // && newPos < maxScroll
        delta = newPos - lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
  })();
  const gotoNextPage = (direction) => {
    // setIsScrolling(true);

    const aboutOffset = document.getElementById("about").offsetTop;
    const ourWayOffset = document.getElementById("our-way").offsetTop;
    const productsOffset = document.getElementById("products").offsetTop;
    const productsOffsetMob =
      document.getElementById("products").offsetTop * 1.75;
    const partnersOffset = document.getElementById("partners").offsetTop;
    const contactOffset = document.getElementById("contact").offsetTop;

    if (window.innerWidth > 1023) {
      if (direction === "down") {
        let offSet;
        if (window.pageYOffset < window.innerHeight) {
          window.scrollTo(0, aboutOffset);
        } else if (
          window.pageYOffset > aboutOffset &&
          window.pageYOffset < ourWayOffset
        ) {
          window.scrollTo(0, ourWayOffset);
          offSet = aboutOffset;
          // console.log(ourWayOffset);
        } else if (
          window.pageYOffset > ourWayOffset &&
          window.pageYOffset < productsOffset-70
        ) {
          window.scrollTo(0, productsOffset);
          offSet = productsOffset;
        } else if (
          window.pageYOffset > productsOffset - 70 &&
          window.pageYOffset < partnersOffset - 70
        ) {
          window.scrollTo(0, partnersOffset);
        } else if (
          window.pageYOffset > partnersOffset - 70 &&
          window.pageYOffset < contactOffset - 70
        ) {
          // console.log("scroll1");
          window.scrollTo(0, contactOffset);
        } else if (window.pageYOffset > contactOffset - 70) {
        }
      } else {
        if (window.pageYOffset < aboutOffset) {
          // console.log("scroll2");
          window.scrollTo(0, 0);
        } else if (
          window.pageYOffset > aboutOffset + 20 &&
          window.pageYOffset < ourWayOffset
        ) {
          // console.log("scroll3");
          window.scrollTo(0, aboutOffset);
        } else if (
          window.pageYOffset > ourWayOffset - 50 &&
          window.pageYOffset < productsOffset
        ) {
          window.scrollTo(0, ourWayOffset);
        } else if (
          window.pageYOffset > productsOffset &&
          window.pageYOffset < partnersOffset
        ) {
          window.scrollTo(0, productsOffset);
        } else if (
          window.pageYOffset > partnersOffset &&
          window.pageYOffset < contactOffset + 30
        ) {
          window.scrollTo(0, partnersOffset);
        }
      }
    }
    // console.log(offSet);
    // setIsScrolling(false);
    // return offSet;
  };
  const onScroll = (event) => {
    
    event.preventDefault();
    const homeOffset = 0;
    const aboutOffset = document.getElementById("about").offsetTop - 10;
    const ourWayOffset = document.getElementById("our-way").offsetTop - 10;
    const productsOffset = document.getElementById("products").offsetTop - 10;
    const partnersOffset = document.getElementById("partners").offsetTop - 10;
    const contactOffset = document.getElementById("contact").offsetTop - 10;
    if (!isScrolling) {
      if (document.body.getBoundingClientRect().top > scrollPos) {
        // console.log("up");
        gotoNextPage("up");
      } else {
        // console.log("down");
        gotoNextPage("down");
      }
      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
    setScrollPos(document.body.getBoundingClientRect().top);
    if (window.pageYOffset >= window.innerHeight / 2) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
    if (window.pageYOffset < window.innerHeight) {
      setActiveTab("home");
      // console.log("home");
    } else if (
      window.pageYOffset > aboutOffset &&
      window.pageYOffset < ourWayOffset
    ) {
      setActiveTab("about");
      // console.log("about");
    } else if (
      window.pageYOffset > ourWayOffset &&
      window.pageYOffset < productsOffset
    ) {
      setActiveTab("our-way");
      // console.log("our-way");
    } else if (
      window.pageYOffset > productsOffset &&
      window.pageYOffset < partnersOffset
    ) {
      setActiveTab("products");
      // console.log("products");
    } else if (
      window.pageYOffset > partnersOffset &&
      window.pageYOffset < contactOffset
    ) {
      setActiveTab("partners");
      // console.log("partners");
    } else if (window.pageYOffset > contactOffset) {
      setActiveTab("contact");
      // console.log("contact");
    }
  };
  return (
    <>
        <>
          <App
            transparent={transparent}
            activeTab={activeTab}
            setIsScrolling={setIsScrolling}
          >
            <Home setIsScrolling={setIsScrolling}/>
            <About onView={activeTab === "about"} />
            <OurWay />
            <OurProduct />
            <Partners />
            <Contact />
            <Footer />
            </App>
            {isLoading ? <Loader /> : null}
        </>
    </>
  );
}
