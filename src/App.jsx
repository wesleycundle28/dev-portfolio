import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/index";
import { Missing } from "./pages/index";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*public routes*/}

        {/*catch all*/}
        <Route path="/*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
