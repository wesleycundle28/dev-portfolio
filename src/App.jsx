import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/index";
import { Missing, Home, About, MyProjects } from "./pages/index";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*public routes*/}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="myprojects" element={<MyProjects />} />

        {/*catch all*/}
        <Route path="/*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
