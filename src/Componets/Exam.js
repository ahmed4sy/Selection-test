export default function Exam(params) {
  return (
    <div>
      <input type="radio" name="sele" value="{oneEx}" />
      <label for="{oneEx}">{oneEx}</label>
      <br>
        <input type="radio" name="sele" value="{twoEx}" />
        <label for="{twoEx}">{twoEx}</label>
      </br>
      <input type="radio" name="sele" value="{thEx}" />
      <label for="{thEx}">{thEx}</label>
    </div>
  );
}
