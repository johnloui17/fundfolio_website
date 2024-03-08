import { useEffect, useState } from "react";
import About from "../components/About";
import App from "../components/App";
import Footer from "../components/Footer";
import Home from "../components/Home";
import { Loader } from "../components/Loader";
import Location from "../components/Location";
export default function HomePage() {
  const [transparent, setTransparent] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [isLoading, setLoading] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  let ourWayOffset;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2500);
    checkForTabletView();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  useEffect(() => {}, []);

  const checkForTabletView = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isTabletView =
      /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
        userAgent
      );
    setIsTablet(isTabletView);
  };

  const gotoNextPage = (direction) => {
    // setIsScrolling(true);

    const aboutOffset = document.getElementById("about").offsetTop;

    const contactOffset = document.getElementById("contact").offsetTop;

    if (window.innerWidth > 1024 && !isTablet) {
      if (direction === "down") {
        let offSet;
        if (window.scrollY < window.innerHeight) {
          window.scrollTo(0, aboutOffset);
        } else if (
          window.scrollY > aboutOffset &&
          window.scrollY < contactOffset
        ) {
          window.scrollTo(0, contactOffset);
          offSet = aboutOffset;

        }
      } else {
        if (window.scrollY < aboutOffset) {
          // console.log("scroll2");
          window.scrollTo(0, 0);
        } else if (
          window.scrollY > aboutOffset + 20 &&
          window.scrollY < contactOffset
        ) {
          // console.log("scroll3");
          window.scrollTo(0, aboutOffset);
        } else if (
          window.scrollY > contactOffset -20 &&
          window.scrollY < contactOffset
        ) {
          window.scrollTo(0, contactOffset);
        }
      }
    }
  };
  const onScroll = (event) => {
    event.preventDefault();
    const homeOffset = 0;
    const aboutOffset = document.getElementById("about").offsetTop - 10;

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
    if (window.scrollY >= window.innerHeight / 2) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
    if (window.scrollY < window.innerHeight) {
      setActiveTab("home");
    } else if (window.scrollY > aboutOffset && window.scrollY < contactOffset) {
      setActiveTab("about");
    } else if (window.scrollY > contactOffset) {
      setActiveTab("contact");
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
          <Home setIsScrolling={setIsScrolling} />
          <About />

          <Location />
          <Footer />
        </App>
        {isLoading ? <Loader /> : null}
      </>
    </>
  );
}
