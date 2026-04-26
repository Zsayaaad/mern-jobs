import { useDashboardContext } from "../context/DashboardContext";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  const { isSidebarCollapsed, isMobileSidebarOpen, toggleSidebar } =
    useDashboardContext();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen flex flex-col border-r-4 border-on-surface z-50 bg-surface-container-lowest transition-all duration-300 ease-in-out
        ${isSidebarCollapsed ? "lg:w-20 w-[18rem]" : "w-[18rem]"}
        ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
    >
      <div className="p-6 border-b-4 border-on-surface flex items-center justify-between overflow-hidden shrink-0 h-28">
        <div className={isSidebarCollapsed ? "lg:hidden" : "block"}>
          <h1 className="text-xl font-black text-on-surface font-h1 whitespace-nowrap tracking-tighter">
            JOBIFY ADMIN
          </h1>
          <p className="font-mono-label text-[10px] uppercase text-secondary whitespace-nowrap tracking-wider">
            Recruitment Hub
          </p>
        </div>

        {/* Mobile Close Button */}
        <button
          className={`lg:hidden p-2 hover:bg-surface-variant border-2 border-on-surface brutalist-shadow brutalist-active`}
          onClick={toggleSidebar}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <NavLinks />

      <div className="p-3 mt-auto border-t-4 border-on-surface bg-surface">
        <button
          className={`w-full bg-on-surface text-surface-container-lowest py-4 border-2 border-on-surface brutalist-shadow font-mono-label uppercase font-bold mb-4 flex items-center justify-center gap-2 transition-all brutalist-hover brutalist-active`}
        >
          <span className="material-symbols-outlined">add</span>
          <span className={isSidebarCollapsed ? "lg:hidden" : "block"}>
            Post Job
          </span>
        </button>
        <a
          href="/logout"
          className="flex items-center gap-4 px-4 py-3 text-on-surface hover:bg-surface-variant font-mono-label uppercase font-bold transition-transform group"
        >
          <span className="material-symbols-outlined shrink-0">logout</span>
          <span className={isSidebarCollapsed ? "lg:hidden" : "block"}>
            Logout
          </span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
