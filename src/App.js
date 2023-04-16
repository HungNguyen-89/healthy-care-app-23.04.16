import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./components/HomePage";
import MyRecord from "./components/MyRecord";
import Challenge from "./components/Challenge";
import Infomation from "./components/Infomation";
import Footer from "./components/Footer";
import ColumnPage from "./components/ColumnPage";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-record" element={<MyRecord />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/infomation" element={<Infomation />} />
          <Route path="/column-page" element={<ColumnPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
