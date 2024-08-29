import Navbar from "../General/Navbar/Navbar";
import Home from "../General/Homebody/Home";
import Details from "../General/Details/Details";
import ContactUs from "../General/ContactUs/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LostItem from "../Lost/LostItem";
import LostForm from "../Lost/LostForm";
import FoundForm from "../Found/FoundForm";
import FoundItem from "../Found/FoundItem";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details" element={<Details />}>
            {" "}
          </Route>
          <Route path="/contact" element={<ContactUs />}></Route>

          <Route path="/lost" element={<LostItem />}></Route>
          <Route path="/reportlost" element={<LostForm />}></Route>
          <Route path="/found" element={<FoundItem />}></Route>
          <Route path="/reportfound" element={<FoundForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
