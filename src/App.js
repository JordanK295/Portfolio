import './App.css';
import { BrowserRouter } from "react-router-dom"
import Helmet from "react-helmet"
import Introduction from "./Components/Introduction"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import About from "./Components/About"
import Footer from "./Components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
          <link rel="manifest" href="/site.webmanifest"></link>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>
          <meta name="msapplication-TileColor" content="#da532c"></meta>
          <meta name="theme-color" content="#ffffff"></meta>
        </Helmet>
        <Introduction />
        <Navbar />
        <Projects />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
