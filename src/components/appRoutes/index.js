import { Route, Routes } from "react-router-dom";

import Dashboard from '../../features/dashboard';
import Destinations from '../../features/destinations';
import Counter from '../../features/counter';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />}></Route>
      <Route exact path="/destinations" element={<Destinations />}></Route>
      <Route exact path="/counter" element={<Counter />}></Route>
    </Routes>
  );
}
export default AppRoutes;
