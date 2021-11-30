import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./components/Contact/Contact";
import Banner2 from "./components/Banner2/Banner2";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/projectDetails/:projectId">
            <ProjectDetails></ProjectDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
