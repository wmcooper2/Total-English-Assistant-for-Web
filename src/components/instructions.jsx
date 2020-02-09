import React from "react";

const Instructions = props => {
  return (
    <div className="instructions">
      <h5>Instructions</h5>
      <p>
        Input an English word that you want to look up. A list of 10 likely
        results will appear with the most likely at the very top. If you don't
        see your word, then it likely is not in any of the 3 books, or you
        mispelled beyond what the simple search can handle. Each result has a
        page number with a color. The color corresponds to the grade level
        (book) where the word first appears. Multi-word pronouns like "United
        Nations" are supported (if they appear in the book).
      </p>
    </div>
  );
};

export default Instructions;
