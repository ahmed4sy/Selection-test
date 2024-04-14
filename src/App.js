import Page from "./Componets/Page";
import PopUp from "./Componets/Exam";
import Exam from "./Componets/PopUp";
import ShowCon from "./Componets/ShowCon";
import "./Styles/App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page>
          <ShowCon>
            <Exam />
          </ShowCon>
          <PopUp act={false} />
        </Page>
      </header>
    </div>
  );
}

export default App;
