import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../context/DashboardContext";
import links from "../utils/links";

const NavLinks = () => {
  const { isSidebarCollapsed } = useDashboardContext();

  return (
    <nav className="grow px-3 py-4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            end
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-4 font-mono-label uppercase font-bold ${
                isActive
                  ? " bg-primary-container text-on-surface border-2 border-on-surface brutalist-shadow  transition-all active:scale-95 "
                  : " text-on-surface hover:bg-surface-container hover:translate-x-1 transition-transform "
              }`
            }
          >
            <span className="material-symbols-outlined shrink-0">{icon}</span>
            <span className={isSidebarCollapsed ? "lg:hidden" : "block"}>
              {text}
            </span>
          </NavLink>
        );
      })}

      {/* Active Link */}
      {/* <a
        href="/dashboard"
        className="flex items-center gap-4 px-4 py-4 bg-primary-container text-on-surface border-2 border-on-surface brutalist-shadow font-mono-label uppercase font-bold transition-all active:scale-95 group"
      >
        <span className="material-symbols-outlined shrink-0">upload</span>
        <span className={isSidebarCollapsed ? "lg:hidden" : "block"}>
          Add Job
        </span>
      </a> */}

      {/* Inactive Links */}
      {/* <a
        href="/dashboard/allJobs"
        className="flex items-center gap-4 px-4 py-4 text-on-surface hover:bg-surface-container font-mono-label uppercase font-bold hover:translate-x-1 transition-transform group"
      >
        <span className="material-symbols-outlined shrink-0">work</span>
        <span className={isSidebarCollapsed ? "lg:hidden" : "block"}>Jobs</span>
      </a>
      <a
        href="/candidates"
        className="flex items-center gap-4 px-4 py-4 text-on-surface hover:bg-surface-container font-mono-label uppercase font-bold hover:translate-x-1 transition-transform group"
      >
        <span className="material-symbols-outlined shrink-0">group</span>
        <span className={isSidebarCollapsed ? "lg:hidden" : "block"}>
          Candidates
        </span>
      </a>
      <a
        href="/analytics"
        className="flex items-center gap-4 px-4 py-4 text-on-surface hover:bg-surface-container font-mono-label uppercase font-bold hover:translate-x-1 transition-transform group"
      >
        <span className="material-symbols-outlined shrink-0">leaderboard</span>
        <span className={isSidebarCollapsed ? "lg:hidden" : "block"}>
          Analytics
        </span>
      </a>
      <a
        href="/settings"
        className="flex items-center gap-4 px-4 py-4 text-on-surface hover:bg-surface-container font-mono-label uppercase font-bold hover:translate-x-1 transition-transform group"
      >
        <span className="material-symbols-outlined shrink-0">settings</span>
        <span className={isSidebarCollapsed ? "lg:hidden" : "block"}>
          Settings
        </span>
      </a> */}
    </nav>
  );
};

export default NavLinks;
