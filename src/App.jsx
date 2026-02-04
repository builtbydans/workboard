import { Routes, Route, NavLink } from "react-router-dom";
import Tasks from "./components/Tasks";
import Dashboard from "./components/Dashboard";
import Onboarding from "./components/Onboarding";

const navLinkClasses = ({ isActive }) =>
  `px-4 py-2 rounded-md text-sm font-medium transition
   ${
     isActive
       ? "bg-slate-900 text-white"
       : "bg-slate-100 text-slate-700 hover:bg-slate-200"
   }`;

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* NAV */}
      <nav className="flex gap-3 mb-6">
        <NavLink to="/dashboard" className={navLinkClasses}>
          Dashboard
        </NavLink>
        <NavLink to="/tasks" className={navLinkClasses}>
          Tasks
        </NavLink>
        <NavLink to="/onboarding" className={navLinkClasses}>
          Onboarding
        </NavLink>
      </nav>

      {/* ROUTES */}
      <div className="bg-white rounded-lg shadow p-6">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
