import { Button } from "@mui/material";
import React, { useState } from "react";
import Popover from "@mui/material/Popover";
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
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "comment-box-popover" : undefined;

  const formatDateAndTime = (dateAndTime) => {
    const [datePart, timePart] = dateAndTime.split(" ");
    return { datePart, timePart };
  };
  if (!anchorEl) {
    return (
      <div className="pop-over">
        <Button onClick={handleClick} variant="contained">
          Open Comment Section
        </Button>
      </div>
    );
  }
  return (
    <Popover
      id={id}
      open={open}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={{ bottom: 0, right: 0 }}
      PaperProps={{
        style: {
          position: "fixed",
          bottom: 2,
          right: 2,
        },
      }}
    >
      <div className="main-container">
        <div className="heading">
          <h3>Comment</h3>
          <button className="heading__cross-icon" onClick={handleClose}>
            X
          </button>
        </div>
        <hr />
        <div className="cmnt-section">
          <h4>Add Comment</h4>
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
          <h4>Earlier Comments ({data.length ? data.length : 0})</h4>
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
    </Popover>
  );
};

export default CommentBox;
