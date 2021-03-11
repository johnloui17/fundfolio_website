import {useState, useEffect} from 'react';
import App from '../components/App'
import Home from '../components/Home'
import About from '../components/About'
import OurWay from '../components/OurWay'
import OurProduct from '../components/OurProduct'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Partners from '../components/Partners'

export default function HomePage() {
  const [transparent, setTransparent] = useState(true)
  const [activeTab, setActiveTab] = useState("home")
  useEffect(()=>{
    function watchScroll() {
      window.addEventListener("scroll", onScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    }; 
  })

  const onScroll = () => {
    const homeOffset = 0;
    const aboutOffset = document.getElementById("about").offsetTop;
    const ourWayOffset = document.getElementById("our-way").offsetTop;
    const productsOffset = document.getElementById("products").offsetTop;
    const contactOffset = document.getElementById("contact").offsetTop;
    if(window.pageYOffset >= (window.innerHeight/2)){
      setTransparent(false)
    }
    else{
      setTransparent(true)
    }
    if(window.pageYOffset < window.innerHeight){
      setActiveTab('home')
    }
    else if(window.pageYOffset >= aboutOffset && window.pageYOffset < ourWayOffset ){
      setActiveTab('about')
    }
    else if(window.pageYOffset >= ourWayOffset && window.pageYOffset < productsOffset ){
      setActiveTab('our-way')
    }
    else if(window.pageYOffset >= productsOffset && window.pageYOffset < contactOffset ){
      setActiveTab('products')
    }
    else if(window.pageYOffset >= contactOffset ){
      setActiveTab('contact')
    }
  }
  return (
    <App transparent={transparent} activeTab={activeTab}>
      <Home/>
      <About onView={activeTab==='about'}/>
      <OurWay/>
      <OurProduct/>
      <Partners/>
      <Contact/>
      <Footer/>
    </App>
  )
}
