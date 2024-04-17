import Page from "./Componets/Page";
import Exam from "./Componets/Exam";
import PopUp from "./Componets/PopUp";
import ShowCon from "./Componets/ShowCon";
import "./Styles/App.css";
import { useState } from "react";
function loadExp() {
  if (localStorage.getItem("Exp") !== "null") {
    return JSON.parse(localStorage.getItem("Exp"));
  }
  return [
    {
      id: 1,
      title: "Ahmed",
      artcle: "How old am i?",
      sele: ["17", "17.5", "18"],
      this: [false, true, false],
    },
  ];
}
function saveExp(data) {
  localStorage.setItem("Exp", JSON.stringify(data));
}
function App() {
  let [Exples, setExples] = useState(loadExp);

  let [Shpop, setShpop] = useState("hide");

  const EXS = Exples.map((exp) => {
    return <Exam Exm={exp} Key={exp.id} key={exp.id} />;
  });
  saveExp(Exples);

  return (
    <div className="App">
      <header>
        <PopUp
          act={false}
          Shpop={Shpop}
          setShpop={setShpop}
          Exm={Exples}
          setExm={setExples}
        />
        <Page Shpop={Shpop} setShpop={setShpop}>
          <ShowCon>{EXS}</ShowCon>
        </Page>
      </header>
    </div>
  );
}

export default App;
