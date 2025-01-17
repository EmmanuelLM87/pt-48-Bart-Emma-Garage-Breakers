import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Main } from "./pages/main";
import { Reception } from "./pages/reception";
import { Garage } from "./pages/garage";
import { Login } from "./pages/login";
import { AboutUs } from "./pages/presentacion"
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Modal } from "./component/modal";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Login />} path="/" />
                        <Route element={<Main />} path="/main" />
                        <Route element={<Reception />} path="/reception" />
                        <Route element={<Garage />} path="/garage" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<AboutUs />} path="/AboutUs" />
                    </Routes>

                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
