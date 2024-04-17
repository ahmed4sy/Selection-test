import { useState } from "react";
import "./../Styles/Exam.css";
export default function Exam({ Exm, Key }) {
  let [On, setOn] = useState(false);
  let [Show, setShow] = useState("exam");
  return (
    <div className={Show}>
      <div className="ps">
        <button
          onClick={() => {
            let nsk = JSON.parse(localStorage.getItem("Exp"));
            nsk.splice(Key - 1, 1);
            localStorage.setItem("Exp", JSON.stringify(nsk));
            setShow("hide");
          }}
        >
          X
        </button>
        <p className="us">{Exm.title}</p>
        <p>{Exm.artcle}</p>
      </div>

      <div className="inps">
        <div>
          <input
            type="radio"
            id="1Ex"
            name="sele"
            value="1Ex"
            onChange={() => {
              setOn(true);
            }}
          />
          <label
            htmlFor="1Ex"
            className={On ? (Exm.this[0] ? "green" : "red") : ""}
          >
            {Exm.sele[0]}
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="2Ex"
            name="sele"
            onChange={() => {
              setOn(true);
            }}
            value="2Ex"
          />
          <label
            htmlFor="2Ex"
            className={On ? (Exm.this[1] ? "green" : "red") : ""}
          >
            {Exm.sele[1]}
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="3Ex"
            name="sele"
            value="3Ex"
            onChange={() => {
              setOn(true);
            }}
          />
          <label
            htmlFor="3Ex"
            className={On ? (Exm.this[2] ? "green" : "red") : ""}
          >
            {Exm.sele[2]}
          </label>
        </div>
      </div>
    </div>
  );
}
