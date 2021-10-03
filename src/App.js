import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllTeams from "./components/AllTeams/AllTeams";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <AllTeams></AllTeams>
      <Footer></Footer>
    </div>
  );
}
export default App;
