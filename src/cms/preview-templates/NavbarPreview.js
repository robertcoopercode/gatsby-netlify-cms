import React from "react";
import PropTypes from "prop-types";

import { NavbarTemplate } from "../../components/Navbar";

const NavbarPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <NavbarTemplate data={data} />;
};

NavbarPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default NavbarPreview;
