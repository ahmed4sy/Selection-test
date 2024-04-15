import Page from "./Componets/Page";
import Exam from "./Componets/Exam";
import PopUp from "./Componets/PopUp";
import ShowCon from "./Componets/ShowCon";
import "./Styles/App.css";
import { useState } from "react";
function App() {
  let [Shpop, setShpop] = useState("hide");
  let [Exm, setExm] = useState(["Examble", ["one con", "two con", "th con"]]);
  return (
    <div className="App">
      <header>
        <PopUp act={false} Shpop={Shpop} setShpop={setShpop} setExm={setExm} />
        <Page Shpop={Shpop} setShpop={setShpop}>
          <ShowCon>
            <Exam Exm={Exm} />
          </ShowCon>
        </Page>
      </header>
    </div>
  );
}

export default App;
