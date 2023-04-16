import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <Nav>
          <NavLink to="/" className="nav-link">
            会員登録
          </NavLink>
          <NavLink to="/" className="nav-link">
            運営会社
          </NavLink>
          <NavLink to="/" className="nav-link">
            利用規約
          </NavLink>
          <NavLink to="/" className="nav-link">
            個人情報の取扱について
          </NavLink>
          <NavLink to="/" className="nav-link">
            特定商取引法に基づく表記
          </NavLink>
          <NavLink to="/" className="nav-link">
            お問い合わせ
          </NavLink>
        </Nav>
      </Container>
    </div>
  );
};

export default Footer;
