export default function Page({ children }) {
  return (
    <div>
      <h1>Selection Exam</h1>
      <hr />
      <button>Create</button>
      {children}
    </div>
  );
}
