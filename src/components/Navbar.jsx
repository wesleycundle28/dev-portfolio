import React, { useState } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarAnchor,
  Logo,
  OpenLinksButton,
  NavbarAnchorExtended,
} from "../styles/Navbar.style";

export const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const nav = () => {
    setExtendNavbar((curr) => !curr);
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarAnchor href="#about"> About</NavbarAnchor>
            <NavbarAnchor href="#skills"> Skills</NavbarAnchor>
            <NavbarAnchor href="#myprojects"> My Projects</NavbarAnchor>
            <OpenLinksButton onClick={nav}>
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo href="https://github.com/wesleycundle28" target={"_blank"}>
            <FaGithubAlt />
          </Logo>
          <Logo
            href="https://www.linkedin.com/in/wesley-cundle-19719b50/"
            target={"_blank"}
          >
            <FaLinkedinIn />
          </Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarAnchorExtended href="#about" onClick={nav}>
            About
          </NavbarAnchorExtended>
          <NavbarAnchorExtended href="#skills" onClick={nav}>
            Skills
          </NavbarAnchorExtended>
          <NavbarAnchorExtended href="#myprojects" onClick={nav}>
            My Projects
          </NavbarAnchorExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
