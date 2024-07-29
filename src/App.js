import "./App.css";
import Service from "./components/Service/Service";
import DestinationPicker from "./components/DestinationPicker/DestinationPicker";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import Package from "./components/Package/Package";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import VideoSection from "./components/VideoSection/VideoSection";
import AboutUs from "./components/AboutUs/AboutUs";
import Blog from "./components/Blog/Blog";
import Testimonials from "./components/Testimonials/Testimonials";
import Destinations from "./components/Destinations/Destinations";
import { createContext, useState } from "react";

export const ShopContext = createContext(null);

function App() {
  const [sideBar, setSideBar] = useState(false);
  const [navStatus, setNavStatus] = useState("home");

  return (
    <div className="App">
      <ShopContext.Provider
        value={{ sideBar, setSideBar, navStatus, setNavStatus }}
      >
        <TopBar />
        <Navbar />
        <Hero />
        <Service />
        <AboutUs />
        <VideoSection />
        <DestinationPicker />
        <Package />
        <Destinations />
        <NewsLetter />
        <Blog />
        <Testimonials />
        <Footer />
      </ShopContext.Provider>
    </div>
  );
}

export default App;
