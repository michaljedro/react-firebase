import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/Global";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import AddArticle from "./pages/AddArticle";
import Login from "./pages/Login";
import Form from "./pages/Form";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#4161B0FF",
    footer: "#003333",
  },
  mobile: "768px",
};
function App() {
  const [logout, setLogout] = useState(true);
  const [value, setValue] = useState(true);
  const handleLogout = () => {
    console.log(logout);
    setLogout(!logout);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {value ? (
        <Form logout={handleLogout} />
      ) : (
        <Router>
          <Navigation />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/addArticle" element={<AddArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Form />} />
          </Routes>
        </Router>
      )}
      {/* <Form /> */}
      {/* <Login>Sing Up</Login> */}
      {/* <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/addArticle" element={<AddArticle />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router> */}
    </ThemeProvider>
  );
}

export default App;
