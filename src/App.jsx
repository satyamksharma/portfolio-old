import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Skills = lazy(() => import("./pages/skills/Skills"));
const Projects = lazy(() => import("./pages/projects/Projects"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const NotFound = lazy(() => import("./pages/notfound/PageNotFound"));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate to='/home' />}
                    />
                    <Route
                        path='/home'
                        element={<Home />}
                    />
                    <Route
                        path='/about'
                        element={<About />}
                    />
                    <Route
                        path='/skills'
                        element={<Skills />}
                    />
                    <Route
                        path='/projects'
                        element={<Projects />}
                    />
                    <Route
                        path='/contact'
                        element={<Contact />}
                    />
                    <Route
                        path='*'
                        element={<NotFound />}
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
