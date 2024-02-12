import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Overview from "./components/overview/Overview";
import About from "./components/about/About";
import Features from "./components/features/Features";

function App() {
  return (
    <div>
      <Header />
      <Overview />
      <About />
      <Features />
    </div>
  );
}

export default App;
