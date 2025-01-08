import Logo from "./Logo";
import PropTypes from "prop-types";

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      {" "}
      <Logo />
      {children}
    </nav>
  );
}
NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};
export default NavBar;
