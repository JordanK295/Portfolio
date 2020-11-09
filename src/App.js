import './App.css';
import Introduction from "./Components/Introduction"
import Navbar from "./Components/Navbar"
import CardList from "./Components/CardList"
import About from "./Components/About"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Introduction />
      <Navbar />
      <CardList />
      <About />
      <Footer />
    </div>
  );
}

export default App;
