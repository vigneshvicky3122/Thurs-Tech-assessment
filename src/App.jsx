import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Images from "./Components/Images";
import About from "./Components/About";
import OverView from "./Components/OverView";
import Recent from "./Components/Recent";
import Review from "./Components/Review";

function App() {
  return (
    <>
      <Navbar />
      <Images />
      <About />
      <OverView />
      <Review/>
      <Recent />
      <Footer />
    </>
  );
}

export default App;
