import React from 'react';
import { connect } from 'react-redux';
import './single-email.css';

export function SingleEmail(props) {
  return (
    <div className="single-email">
      <div className="single-email-headers">
        <h2 className="single-email-title">{props.title}</h2>
        <div className="single-email-from">
          <strong>From: </strong>
          {props.from}
        </div>
        <div className="single-email-to">
          <strong>To: </strong>
          {props.to}
        </div>
      </div>
      <div className="single-email-content">{props.content}</div>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  // Get the IDs from props params
  const folderId = props.match.params.folderId;
  const emailId = props.match.params.emailId;

  return state[folderId].emails[emailId];
};

export default connect(mapStateToProps)(SingleEmail);
