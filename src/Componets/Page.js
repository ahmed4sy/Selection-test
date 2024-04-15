import "./../Styles/Page.css";
export default function Page({ setShpop, children }) {
  return (
    <div className="page">
      <h1>Selection Exam</h1>
      <button
        className="cre"
        onClick={() => {
          setShpop("");
        }}
      >
        +
      </button>
      {children}
    </div>
  );
}
