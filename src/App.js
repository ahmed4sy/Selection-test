import Page from "./Componets/Page";
import Exam from "./Componets/Exam";
import PopUp from "./Componets/PopUp";
import ShowCon from "./Componets/ShowCon";
import "./Styles/App.css";
import { useState } from "react";
function App() {
  let [Exples, setExples] = useState([
    {
      id: 1,
      title: "User",
      artcle: "Examssskr r rr",
      sele: ["one con", "two con", "th con"],
      this: [false, true, false],
    },
  ]);
  let [Shpop, setShpop] = useState("hide");

  const EXS = Exples.map((exp) => {
    return <Exam Exm={exp} key={exp.id} />;
  });
  console.log(Exples);
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
