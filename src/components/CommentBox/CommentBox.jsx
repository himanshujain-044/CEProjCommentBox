import { Button } from "@mui/material";
import React from "react";
import "./CommentBox.scss";

const CommentSection = ({ text, dateTimePart }) => {
  return (
    <div className="cmnt-msg__cmnt-msg-text">
      <p className="cmnt-msg__cmnt-msg-text--text">{text}</p>
      <p className="cmnt-msg__cmnt-msg-text--date-time-wrapper">
        <span className="cmnt-msg__cmnt-msg-text--date-and-time">
          {dateTimePart.datePart}
        </span>
        <span className="cmnt-msg__cmnt-msg-text--date-and-time">
          {dateTimePart.timePart}
        </span>
      </p>
    </div>
  );
};
const CommentBox = ({ data }) => {
  const formatDateAndTime = (dateAndTime) => {
    const [datePart, timePart] = dateAndTime.split(" ");
    return { datePart, timePart };
  };

  return (
    <div className="comment-box-container">
      <div className="cmnt-heading">
        <span>Comment</span>
        <button className="cmnt-heading__cross-icon">X</button>
      </div>
      <hr />
      <div className="cmnt-section">
        <span>Add Comment</span>
        <textarea id="text-area" placeholder="start typing..." />
        <div className="cmnt-section__action-btns">
          <Button
            variant="contained"
            className="cmnt-section__action-btns--cancel-btn"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className="cmnt-section__action-btns--save-btn"
          >
            Save
          </Button>
        </div>
      </div>
      <hr />
      <div className="cmnt-msg">
        <span>Earlier Comments ({data.length ? data.length : 0})</span>
        <div className="cmnt-msg__comments-cont">
          {data.length &&
            data.map((item) => (
              <CommentSection
                key={item.id}
                text={item.comment}
                dateTimePart={formatDateAndTime(item.dateAndTime)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
