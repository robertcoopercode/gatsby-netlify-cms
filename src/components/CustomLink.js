import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

export const CustomLink = ({ linkType, linkURL, children, className = "" }) => {
  if (linkType === "internal") {
    return (
      <Link className={className} to={linkURL}>
        {children}
      </Link>
    );
  } else {
    return (
      <a className={className} href={linkURL}>
        {children}
      </a>
    );
  }
};

CustomLink.propTypes = {
  linkType: PropTypes.string,
};

export default CustomLink;
