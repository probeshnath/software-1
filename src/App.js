import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Commenications from "./components/Commenications";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Solutions />
      <Commenications />
    </div>
  );
}

export default App;
