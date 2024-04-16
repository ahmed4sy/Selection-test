import { useState } from "react";
import "./../Styles/PopUp.css";

export default function PopUp({ Shpop, Exm, setExm, setShpop }) {
  let [Idp, setIdp] = useState(2);
  let [Get, setGet] = useState({
    id: 0,
    title: "",
    artcle: "",
    sele: ["", "", ""],
    this: [false, false, false],
  });
  return (
    <div className={Shpop}>
      <div id="opc"></div>
      <div className="form">
        <div className="exam">
          <div className="ps">
            <input
              type="text"
              className="us"
              placeholder="Title"
              value={Get.title}
              onChange={(e) =>
                setGet({ ...Get, id: Idp, title: e.target.value })
              }
            />
            <textarea
              placeholder="artcle.."
              value={Get.artcle}
              onChange={(e) => setGet({ ...Get, artcle: e.target.value })}
            ></textarea>
          </div>

          <div className="inps">
            <div>
              <input
                type="radio"
                className="radio"
                name="sele"
                value="{oneEx}"
              />
              <input
                type="text"
                placeholder="1Ex"
                value={Get.sele[0]}
                onChange={(e) => {
                  let hook = { ...Get };
                  hook.sele[0] = e.target.value;
                  setGet(hook);
                }}
              />
            </div>
            <div>
              <input
                type="radio"
                className="radio"
                name="sele"
                value="{oneEx}"
              />
              <input
                type="text"
                placeholder="2Ex"
                value={Get.sele[1]}
                onChange={(e) => {
                  let hook = { ...Get };
                  hook.sele[1] = e.target.value;
                  setGet(hook);
                }}
              />
            </div>
            <div>
              <input
                type="radio"
                className="radio"
                name="sele"
                value="{oneEx}"
              />
              <input
                type="text"
                placeholder="3Ex"
                value={Get.sele[2]}
                onChange={(e) => {
                  let hook = { ...Get };
                  hook.sele[2] = e.target.value;
                  setGet(hook);
                }}
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setExm([...Exm, Get]);
            setIdp((id) => {
              return id + 1;
            });
            setGet({
              id: 0,
              title: "",
              artcle: "",
              sele: ["", "", ""],
              this: [false, false, false],
            });
            setShpop("hide");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
