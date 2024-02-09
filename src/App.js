import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Overview from "./components/overview/Overview";

function App() {
  return (
    <div>
      <Header />
      <Overview />
    </div>
  );
}

export default App;
