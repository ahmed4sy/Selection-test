import "./../Styles/PopUp.css";
export default function PopUp({ Shpop, setShpop }) {
  return (
    <div className={Shpop}>
      <div id="opc"></div>
      <div className="form">
        <div className="exam">
          <div className="ps">
            <input type="text" className="us" />
            <textarea></textarea>
          </div>

          <div className="inps">
            <div>
              <input type="radio" name="sele" value="{oneEx}" />
              <input type="text" />
            </div>
            <div>
              <input type="radio" name="sele" value="{oneEx}" />
              <input type="text" />
            </div>
            <div>
              <input type="radio" name="sele" value="{oneEx}" />
              <input type="text" />
            </div>
          </div>
        </div>
        <button onClick={() => setShpop("hide")}>Send</button>
      </div>
    </div>
  );
}
