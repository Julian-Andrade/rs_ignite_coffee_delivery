// Components
import { Header } from "../../components/Header";
// Routes
import { Outlet } from "react-router-dom";
// Styles
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
