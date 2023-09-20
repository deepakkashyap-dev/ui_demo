import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import AllUser from '../components/AllUser';
import Application from '../components/Application';
import CompanyProfile from '../components/CompanyProfile';
import Follower from '../components/Follower';
import Job from '../components/Job';
import MyAccount from '../components/MyAccount';
import MyInventary from '../components/MyInventory';
import Events from '../components/Events';
import Packages from '../components/Packages';
import Blogs from '../components/Blogs';

const ProjectRoutes = (props) => (
    <Routes>
        {/* <Route exact from="/" element={redirect("/dashboard")} /> */}
        <Route exact path="/" element={ <Navigate to="/dashboard" /> } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/job" element={<Job />} />
        <Route path="/applicaton" element={<Application />} />
        <Route path="/follower" element={<Follower />} />
        <Route path="/inventory" element={<MyInventary />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/all-user" element={<AllUser />} />
        <Route path="/my-account" element={<MyAccount />} />

        <Route path="/package" element={<Packages />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blogs />} />
    </Routes>
);
export default ProjectRoutes;


