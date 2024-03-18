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

  useEffect(() => {}, []);

  const checkForTabletView = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isTabletView =
      /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
        userAgent
      );
    setIsTablet(isTabletView);
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
