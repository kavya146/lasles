import "./Footer.css";
import icon from "./icon.svg";
import fb from "./fblogo.svg";
import insta from "./instalogo.svg";
import twitter from "./twitterlogo.svg";

const HelpLeft = () => {
  return (
    <div>
      <div className="lasles-helpleft">
        <div className="footer-logo">
          <a href="#">
            <img src={icon}></img>
          </a>
        </div>
        <p className="helpfooter-p">
          LaslesVPN is a private virtual network that<br></br> has unique
          features and has high security.
        </p>

        <div className="social-icon">
          <a href="https://www.facebook.com/">
            <img src={fb}></img>
          </a>
          <a href="https://Twitter.com/">
            <img src={twitter}></img>
          </a>
          <a href="https://www.Instagram.com/">
            <img src={insta}></img>
          </a>
          <p>© 2020 LaslesVPN</p>
        </div>
      </div>
    </div>
  );
};

export default HelpLeft;
