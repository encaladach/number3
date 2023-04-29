/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.quearySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "dog", "snake", "rat", "rabbit"];
  let action = ["took my", "threw my", "yelled at my", "stole my, bit my"];
  let possetion = ["homework", "toe", "bike", "car"];
  let where = ["on the street", "in the park", "in my house"];

  let proIndx = 0;
  Math.floor(Math.random() * pronoun.length);
  let subjIndx = 0;
  Math.floor(Math.random() * subject.length);
  let actionIndx = 0;
  Math.floor(Math.random() * action.length);
  let possetionIndx = 0;
  Math.floor(Math.random() * possetion.length);
  let whereIndx = 0;
  Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndx] +
    " " +
    possetion[possetionIndx] +
    " " +
    where[whereIndx]
  );
};
