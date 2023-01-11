// React Router Dom
import { Routes, Route } from "react-router-dom";
// Layout Default
import { DefaultLayout } from "../layouts/Default";
// Componentes
import { HomePage } from "../pages/Home";
import { CheckoutPage } from "../pages/Checkout";
import { SuccessPage } from "../pages/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    </Routes>
  );
}
