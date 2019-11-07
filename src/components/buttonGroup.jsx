import React from "react";
const GradeBtns = props => {
  return (
    <div className="gradeBtnGroup btn-group col-md-4">
      <button onClick={props.props.props.click} className={props.classes}>
        {props.props.props.buttons[0]}
      </button>
      <button onClick={props.props.props.click} className={props.classes}>
        {props.props.props.buttons[1]}
      </button>
      <button onClick={props.props.props.click} className={props.classes}>
        {props.props.props.buttons[2]}
      </button>
    </div>
  );
};

export default GradeBtns;
