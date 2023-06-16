import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./index.css";

function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, image, job, text } = people[index];
  const checkSize = (number) => {
    if (number < 0) {
      return people.length - 1;
    }
    if (number > people.length - 1) {
      return 0;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex(() => {
      let newIndex = index - 1;
      return checkSize(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex(() => {
      let newIndex = index + 1;
      return checkSize(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    console.log(randomNumber);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    // setIndex(checkSize(randomNumber));
    setIndex(() => {
      return checkSize(randomNumber);
    });
  };
  return (
    <article className="review" key={id}>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        {" "}
        Suprise Me
      </button>
    </article>
  );
}

export default Review;
