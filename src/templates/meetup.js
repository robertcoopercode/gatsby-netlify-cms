import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/meetup.scss";

import HeadshotPlaceholder from "../img/headshot-placeholder.svg";

class MeetupTemplate extends Component {
  render() {
    return (
      <section
        className={`meetup  ${this.props.className && this.props.className}`}
        key={this.props.meetup.rawDate}
      >
        <h2 className="meetup-title">{this.props.meetup.title}</h2>
        <div className="meetup-meta">
          <p className="meetup-metaField  meetup-metaField--date">
            <span className="meetup-label">Date:</span> {this.props.meetup.formattedDate}
          </p>
          <p className="meetup-metaField  meetup-metaField--location">
            <span className="meetup-label">Location:</span> {this.props.meetup.location.name}
          </p>
        </div>
        <div className="meetup-presenters">
          {this.props.meetup.presenters.map(presenter => (
            <div className="meetup-presenter" key={presenter.name}>
              <div className="meetup-presenterImageContainer">
                <img
                  className="meetup-presenterImage"
                  src={presenter.image ? presenter.image : HeadshotPlaceholder}
                  alt={presenter.image ? presenter.name : "Default headshot placeholder"}
                />
                <span className="meetup-presenterName">{presenter.name}</span>
              </div>
              <div className="meetup-presenterInfo">
                {presenter.presentationTitle && (
                  <h3 className="meetup-presenterTitle">{presenter.presentationTitle}</h3>
                )}
                <p className="meetup-presenterText">{presenter.text}</p>
                <ul className="meetup-presenterLinks">
                  {presenter.links &&
                    presenter.links.map((link, index) => (
                      <li key={index} className="meetup-presenterLinkItem">
                        <a className="meetup-presenterLink" href={link.linkURL}>
                          {link.linkText}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

MeetupTemplate.propTypes = {
  meetup: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    presenters: PropTypes.array,
  }),
};

export default MeetupTemplate;
