import "./../Styles/Exam.css";
export default function Exam({ Exm, oneEx, twoEx, thEx }) {
  return (
    <div className="exam">
      <div className="ps">
        <p className="us">User</p>
        <p>{Exm[0]}</p>
      </div>

      <div className="inps">
        <div>
          <input type="radio" name="sele" value="{oneEx}" />
          <label>{Exm[1][0]}</label>
        </div>
        <div>
          <input type="radio" name="sele" value="{oneEx}" />
          <label>{Exm[1][1]}</label>
        </div>
        <div>
          <input type="radio" name="sele" value="{oneEx}" />
          <label>{Exm[1][2]}</label>
        </div>
      </div>
    </div>
  );
}
