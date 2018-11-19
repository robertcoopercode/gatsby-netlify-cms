import React from "react";
import PropTypes from "prop-types";
import { PastMeetupsPageTemplate } from "../../templates/past-meetups-page";

const PastMeetupsPagePreview = ({ entry, widgetFor }) => {
  return (
    <PastMeetupsPageTemplate
      title={entry.getIn(["data", "title"])}
      content={entry.getIn(["data", "body"])}
      bodyIsMarkdown={true}
    />
  );
};

PastMeetupsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PastMeetupsPagePreview;
