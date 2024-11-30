import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Cars from "./views/cars/Cars";
import Motorcycle from "./views/Motorcycle/Motorcycle";
import AddMotor from "./views/Motorcycle/AddMotor";
import Customers from "./views/Customers";
import AddCar from "./views/cars/AddCar";

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
          <Route path="addCar" element={<AddCar />} />
          <Route path="motorcycle" element={<Motorcycle />} />
          <Route path="addMotor" element={<AddMotor />} />
          <Route path="customers" element={<Customers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
