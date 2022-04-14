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
        <div
          key={index}
          className="questions__container-each"
          onClick={() => toggle(index)}
        >
          <p>{element.questions}</p>
          {clicked === index ? (
            <div className="questions__container-answers">
              <p>{element.answer}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default SecondContainer;
