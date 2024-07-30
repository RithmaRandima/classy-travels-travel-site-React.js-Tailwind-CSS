import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import AboutUs from "./components/AboutUs/AboutUs";
import VideoSection from "./components/VideoSection/VideoSection";
import DestinationPicker from "./components/DestinationPicker/DestinationPicker";
import Package from "./components/Package/Package";
import Destinations from "./components/Destinations/Destinations";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Blog from "./components/Blog/Blog";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
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
