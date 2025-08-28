import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import BootstrapNav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

function Nav() {
  const { signed, setSigned } = useContext(LoginContext);
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <Image
              width={"200px"}
              src="https://clarusway.com/wp-content/uploads/2022/12/clarusway-logo-black.png"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <BootstrapNav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>

            {signed ? (
              <Link
                className="nav-link"
                to="/login"
                onClick={() => setSigned(false)}
              >
                Logout
              </Link>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
