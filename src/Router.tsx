import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Cart } from "./pages/Cart";
import { OrderFinished } from "./pages/OrderFinished";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/finished" element={<OrderFinished/>}/>
      </Route>
    </Routes>
  );
}
