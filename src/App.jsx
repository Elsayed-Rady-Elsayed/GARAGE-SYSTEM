import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Cars from "./views/Cars";
import Motorcycle from "./views/Motorcycle";
import Customers from "./views/Customers";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="*"
          element={
            <div>
              <h2>404 page not found</h2>
            </div>
          }
        />
        <Route path="/" element={<Home />}>
          <Route path="cars" element={<Cars />} />
          <Route path="motorcycle" element={<Motorcycle />} />
          <Route path="customers" element={<Customers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
