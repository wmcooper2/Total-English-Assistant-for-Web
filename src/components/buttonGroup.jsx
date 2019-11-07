import React from "react";
const GradeBtns = props => {
  return (
    <div className="gradeBtnGroup btn-group col-md-4">
      <button
        onClick={event => {
          props.props.props.click(event.target.id);
        }}
        className={props.classes}
        id="grade1"
      >
        {props.props.props.buttons[0]}
      </button>
      <button
        onClick={event => {
          props.props.props.click(event.target.id);
        }}
        className={props.classes}
        id="grade2"
      >
        {props.props.props.buttons[1]}
      </button>
      <button
        onClick={event => {
          props.props.props.click(event.target.id);
        }}
        className={props.classes}
        id="grade3"
      >
        {props.props.props.buttons[2]}
      </button>
    </div>
  );
};

export default GradeBtns;
