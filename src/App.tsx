import "./App.css";
import NavBar from "./components/NavBar";
import ResBar from "./components/ResBar";
import Results from "./components/Results";
import Filter from "./components/Filter";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <ResBar></ResBar>
      <Results></Results>
      <Filter />
    </>
  );
}

export default App;
