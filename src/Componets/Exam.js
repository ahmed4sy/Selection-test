import "./../Styles/Exam.css";
export default function Exam({ Exm, oneEx, twoEx, thEx }) {
  return (
    <div className="exam">
      <div className="ps">
        <p className="us">{Exm.title}</p>
        <p>{Exm.artcle}</p>
      </div>

      <div className="inps">
        <div>
          <input type="radio" name="sele" value="{oneEx}" />
          <label>{Exm.sele[0]}</label>
        </div>
        <div>
          <input type="radio" name="sele" value="{oneEx}" />
          <label>{Exm.sele[1]}</label>
        </div>
        <div>
          <input type="radio" name="sele" value="{oneEx}" />
          <label>{Exm.sele[2]}</label>
        </div>
      </div>
    </div>
  );
}
