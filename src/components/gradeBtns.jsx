import React from "react";

const GradeBtn = props => {
  const { gradeClick, btnID, className, text } = props;
  return (
    <button
      className={className}
      onClick={event => {
        gradeClick(event.target.id);
      }}
      id={"grade" + btnID}
    >
      {text}
    </button>
  );
};

const GradeBtns = props => {
  const { buttons, classes, gradeClick } = props;

  let grades = [];
  for (let btn of buttons) {
    grades.push(
      <GradeBtn
        btnID={btn}
        className={classes}
        text={btn}
        key={btn}
        gradeClick={gradeClick}
      />
    );
  }

  return <div className="gradeBtnGroup btn-group col-md-4">{grades}</div>;
};

export default GradeBtns;
