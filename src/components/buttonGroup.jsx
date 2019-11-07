import React from "react";
const GradeBtns = props => {
  return (
    <div className="gradeBtnGroup btn-group col-md-4" role="selectGrade">
      <button onClick={props.onClick} className={props.classes}>
        1
      </button>
      <button className={props.classes}>2</button>
      <button className={props.classes}>3</button>
    </div>
  );
};

export default GradeBtns;
