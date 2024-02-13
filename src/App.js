import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Overview from "./components/overview/Overview";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Pricing from "./components/pricing/Pricing";
import Locations from "./components/locations/Locations";
import Testimonial from "./components/testimonials/Testimonial";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Overview />
      <About />
      <Features />
      <Pricing />
      <Locations />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
