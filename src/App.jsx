import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { NavBarLink } from "./components/NavBarLink";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBarLink />
          <Routes>{routes}</Routes>
      </BrowserRouter>
    </>
  );
};