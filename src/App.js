import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Introduction from "./Components/Introduction"
import Navbar from "./Components/Navbar"
import CardList from "./Components/CardList"
import About from "./Components/About"
import Footer from "./Components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Introduction />
        <Navbar />
        <CardList />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
