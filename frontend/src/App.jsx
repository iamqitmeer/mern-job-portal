import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import FindJobs from "./screens/FindJob";
import ResourcesPage from "./screens/Resources";
import CompaniesPage from "./screens/Companies";
import LoginPage from "./screens/Login";
import Register from "./screens/Register";
import EditProfilePage from "./screens/EditProfile";
import SettingsPage from "./screens/Setting";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/find-job" element={<FindJobs />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
