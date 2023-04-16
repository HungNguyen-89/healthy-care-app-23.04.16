import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logoApp from "../assets/logo.svg";
import iconMemo from "../assets/icon_memo.svg";
import iconChallenge from "../assets/icon_challenge.svg";
import iconInfo from "../assets/icon_info.svg";
import CurtainMenu from "./CurtainMenu";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar bg="light" expand="lg" className="header-container">
        <Container>
          <NavLink to="/" className="navbar-brand">
            <img
              src={logoApp}
              style={{ cursor: "pointer" }}
              alt="Healthy Application logo"
            />
          </NavLink>

          <Navbar.Collapse id="basic-navbar-nav">
            {
              <>
                <Nav className="me-auto header-navbar">
                  <NavLink to="/my-record" className="nav-link">
                    <img style={{ cursor: "pointer" }} src={iconMemo} alt="" />
                    自分の記録
                  </NavLink>
                  <NavLink to="/challenge" className="nav-link">
                    <img
                      style={{ cursor: "pointer" }}
                      src={iconChallenge}
                      alt=""
                    />
                    チャレンジ
                  </NavLink>
                  <NavLink to="/infomation" className="nav-link">
                    <img style={{ cursor: "pointer" }} src={iconInfo} alt="" />
                    お知らせ
                  </NavLink>
                </Nav>
                <Nav>
                  <CurtainMenu />
                </Nav>
              </>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
