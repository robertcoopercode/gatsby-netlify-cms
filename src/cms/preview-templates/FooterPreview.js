import React from "react";
import PropTypes from "prop-types";

import { FooterTemplate } from "../../components/Footer";

const FooterPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <FooterTemplate data={data} />;
};

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FooterPreview;
