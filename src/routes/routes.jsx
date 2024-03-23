import { Route } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { HomePage } from "../pages/HomePage";
import { ExamplesPage } from "../pages/ExamplesPage";
import { CityInfoPage } from "../pages/CityInfoPage";

export const routes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/examples" element={<ExamplesPage />} />
    {/* Dynamic routes */}
    <Route path="/city/:city" element={<CityInfoPage />} />

  </>
);