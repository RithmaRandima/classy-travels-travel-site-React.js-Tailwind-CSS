import "./App.css";
import About from "./components/About/About";
import DestinationPicker from "./components/DestinationPicker/DestinationPicker";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import Destination from "./components/Destination/Destination";
import Offers from "./components/Offer/Offer";
import NewsLetterTwo from "./components/NewsLetterTwo/NewsLetterTwo";
import VideoSection from "./components/VideoSection/VideoSection";
import Packages from "./components/Packages/Packages";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Blog from "./components/Blog/Blog";
import Testimonials from "./components/Testimonials/Testimonials";
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
        <About />
        <NewsLetter />
        <Packages />
        <VideoSection />
        <DestinationPicker />
        <Offers />
        <Destination />
        <NewsLetterTwo />
        <Testimonials />
        <Blog />
        <Footer />
      </ShopContext.Provider>
    </div>
  );
}

export default App;
