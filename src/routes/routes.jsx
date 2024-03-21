import { Route } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { HomePage } from "../pages/HomePage";
import { ExamplesPage } from "../pages/ExamplesPage";

export const routes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/examples" element={<ExamplesPage />} />
  </>
);