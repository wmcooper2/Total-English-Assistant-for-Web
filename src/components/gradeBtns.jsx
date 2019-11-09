import React from "react";

const GradeBtn = props => {
  const { handleClick, btnID, text } = props;
  /*const gradeColor = "grade" + btnID + "Color";*/
  return (
    <div
      className={"btn btn-primary"}
      onClick={event => {
        handleClick(event.target.id);
      }}
      id={btnID}
    >
      {text}
    </div>
  );
};

const GradeBtns = props => {
  const { buttons, handleClick } = props;
  let grades = [];
  for (let btn in buttons) {
    let grade = buttons[btn].grade;
    grades.push(
      <GradeBtn
        btnID={grade}
        text={grade}
        key={grade}
        handleClick={handleClick}
      />
    );
  }

  return <div className="btn-group col-md-4">{grades}</div>;
};

export default GradeBtns;
