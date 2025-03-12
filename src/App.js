import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import Home from "./components/Home";
import News from "./components/News";
import Quiz from "./components/Quiz";
import Contact from "./components/Contact";
import NewsDetail from "./components/NewsDetail";

const App = () => (
  <Router>
    <AppBar position="static" color="gray">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/news">News</Button>
        <Button color="inherit" component={Link} to="/quiz">Quiz</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </Container>
  </Router>
);

export default App;