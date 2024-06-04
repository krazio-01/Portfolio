import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import ProjectDetails from "./pages/Work/details/ProjectDetails";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./pages/404/PageNotFound";
import Transition from "./components/Transition/Transition";
import "./layout.css";

const Layout = () => {
    const location = useLocation();
    const path = location.pathname;
    const lastSegment = path.substring(path.lastIndexOf("/")) || "/";

    return (
        <Transition keyName={lastSegment}>
            <div className="main-layout">
                <Navbar />
                <div className="content-wrapper">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/work/:projectName" element={<ProjectDetails />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Transition>
    );
};

export default Layout;
