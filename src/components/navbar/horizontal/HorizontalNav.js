import "./HorizontalNav.css";

const HorizontalNav = () => {
  return (
    <nav>
      <ul className="horizantal-nav-ul">
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#features">Features</a>
        </li>
        <li className="nav-item">
          <a href="#pricing">Pricing</a>
        </li>
        <li className="nav-item">
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#help">Help</a>
        </li>
      </ul>
    </nav>
  );
};

export default HorizontalNav;
