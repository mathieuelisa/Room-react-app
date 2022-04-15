import { useState } from "react";
import dataQuestionsAnswers from "../../../data.js";

import "./styles.scss";

function SecondContainer() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className="questions__container">
      {dataQuestionsAnswers.map((element, index) => (
        <>
          <div
            key={index}
            className="questions__container-each"
            onClick={() => toggle(index)}
          >
            <p className="questions__container-questions">
              {element.questions}
            </p>
            <span>
              {clicked === index ? (
                <i class="fa-solid fa-angle-up"></i>
              ) : (
                <i class="fa-solid fa-angle-down"></i>
              )}
            </span>
          </div>

          {clicked === index ? (
            <div className="questions__container-answers">
              <p>{element.answer}</p>
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
}

export default SecondContainer;
