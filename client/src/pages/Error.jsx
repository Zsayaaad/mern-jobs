import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-black">
        {/* TopNavBar - Rendered per JSON instruction */}
        <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 w-full bg-white dark:bg-zinc-900 border-b-4 border-black dark:border-white">
          <div className="flex items-center gap-8">
            <span className="text-3xl font-black italic tracking-tighter text-black dark:text-white">
              JOBIFY
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <span
                className="material-symbols-outlined text-zinc-900 dark:text-zinc-100"
                data-icon="dark_mode"
              >
                dark_mode
              </span>
            </button>
            <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <span
                className="material-symbols-outlined text-zinc-900 dark:text-zinc-100"
                data-icon="account_circle"
              >
                account_circle
              </span>
            </button>
          </div>
        </header>

        <main className="min-h-screen p-gutter md:p-xl flex flex-col gap-xl">
          {/* SECTION 1: 404 NOT FOUND (Bento Grid Style) */}
          <section className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Main Error Visual */}
              <div className="md:col-span-8 bg-white border-2 border-black brutalist-shadow-lg p-lg flex flex-col justify-center items-center text-center">
                <div className="mb-lg relative">
                  <h1 className="font-h1 text-[120px] md:text-[200px] leading-none text-black select-none">
                    404
                  </h1>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container border-4 border-black px-4 py-1 rotate-12 brutalist-shadow">
                    <span className="font-mono-label uppercase text-black">
                      Page Not Found
                    </span>
                  </div>
                </div>
                <div className="max-w-md">
                  <h2 className="font-h2 text-black mb-md">
                    THE SYSTEM HAS STALLED.
                  </h2>
                  <p className="font-body text-secondary mb-lg">
                    The destination you requested does not exist in our
                    recruitment database. It might have been moved, deleted, or
                    never existed in this reality.
                  </p>
                  <Link to="/dashboard">
                    <button className="bg-primary-container text-black border-2 border-black px-xl py-md font-mono-label brutalist-shadow active-press uppercase block- flex items-center gap-2 mx-auto">
                      <span
                        className="material-symbols-outlined"
                        data-icon="arrow_back"
                      >
                        arrow_back
                      </span>
                      Back Home
                    </button>
                  </Link>
                </div>
              </div>

              {/* Side Technical Details (Brutalist Info Card) */}
              <div className="md:col-span-4 flex flex-col gap-gutter">
                <div className="bg-zinc-100 border-2 border-black p-md brutalist-shadow">
                  <span className="font-mono-label text-zinc-500 block mb-sm">
                    SYSTEM LOG
                  </span>
                  <div className="font-mono-data text-zinc-800 space-y-1">
                    <p>{"> ERROR_CODE: 0x404_NF"}</p>
                    <p>{"> TIMESTAMP: 2024-05-20T14:22:01Z"}</p>
                    <p>{"> TRACE: /routes/v1/jobs/missing-item"}</p>
                    <p>{"> STATUS: ABORTED"}</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-black p-md brutalist-shadow h-full flex flex-col gap-md">
                  <h3 className="font-h3 text-black">Common Links</h3>
                  <nav className="flex flex-col gap-sm">
                    <a
                      className="flex justify-between items-center p-md bg-white border-2 border-black hover:bg-surface-container-low transition-colors group"
                      href="/allJobs"
                    >
                      <span className="font-mono-label">Active Jobs</span>
                      <span
                        className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                        data-icon="chevron_right"
                      >
                        chevron_right
                      </span>
                    </a>
                    <a
                      className="flex justify-between items-center p-md bg-white border-2 border-black hover:bg-surface-container-low transition-colors group"
                      href="#"
                    >
                      <span className="font-mono-label">Candidate List</span>
                      <span
                        className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                        data-icon="chevron_right"
                      >
                        chevron_right
                      </span>
                    </a>
                    <a
                      className="flex justify-between items-center p-md bg-white border-2 border-black hover:bg-surface-container-low transition-colors group"
                      href="#"
                    >
                      <span className="font-mono-label">Support Hub</span>
                      <span
                        className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                        data-icon="chevron_right"
                      >
                        chevron_right
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </section>

          {/* Spacer Divider */}
          <div className="h-[4px] bg-black w-full my-lg"></div>

          {/* SECTION 2: EMPTY JOBS VIEW (Asymmetric Layout) */}
          <section className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row gap-gutter items-stretch">
              {/* Visual Illustration Side */}
              <div className="md:w-1/2 border-2 border-black bg-zinc-200 brutalist-shadow-lg relative overflow-hidden flex items-center justify-center min-h-[400px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-zinc-300 via-transparent to-transparent opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-48 h-48 bg-white border-4 border-black brutalist-shadow relative flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-[100px] text-zinc-300"
                      data-icon="work_off"
                    >
                      work_off
                    </span>
                    <div className="absolute -bottom-4 -right-4 bg-error text-white border-2 border-black p-2 brutalist-shadow rotate-12">
                      <span
                        className="material-symbols-outlined"
                        data-icon="search_off"
                      >
                        search_off
                      </span>
                    </div>
                  </div>
                  <div className="mt-lg text-center">
                    <span className="font-mono-label text-zinc-600 block">
                      DATABASE STATUS
                    </span>
                    <span className="font-h3 text-black">VACANCY: 100%</span>
                  </div>
                </div>
                {/* Aesthetic grid overlays */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-black"></div>
              </div>

              {/* Content & Action Side */}
              <div className="md:w-1/2 flex flex-col justify-center p-lg md:p-xl bg-white border-2 border-black brutalist-shadow">
                <div className="inline-block bg-primary-container border-2 border-black px-md py-1 self-start mb-md">
                  <span className="font-mono-label text-black uppercase">
                    Inventory Alert
                  </span>
                </div>
                <h2 className="font-h1 text-black mb-md">
                  No Open Jobs Found.
                </h2>
                <p className="font-body text-secondary text-lg mb-xl border-l-4 border-black pl-md">
                  Your recruitment pipeline is currently empty. Start by posting
                  a new opportunity or syncing with your external talent sources
                  to populate this dashboard.
                </p>
                <div className="flex flex-col sm:flex-row gap-md">
                  <Link to="/addJob">
                    <button className="bg-primary-container text-black border-2 border-black px-lg py-md font-mono-label uppercase brutalist-shadow active-press flex items-center justify-center gap-2 flex-1">
                      <span
                        className="material-symbols-outlined"
                        data-icon="add_box"
                      >
                        add_box
                      </span>
                      Add New Job
                    </button>
                  </Link>
                  <button className="bg-white text-black border-2 border-black px-lg py-md font-mono-label uppercase brutalist-shadow active-press flex items-center justify-center gap-2 flex-1">
                    <span
                      className="material-symbols-outlined"
                      data-icon="refresh"
                    >
                      refresh
                    </span>
                    Sync Feed
                  </button>
                </div>
                <div className="mt-xl pt-lg border-t-2 border-zinc-100">
                  <p className="font-mono-label text-zinc-400 mb-sm">
                    Need help getting started?
                  </p>
                  <div className="flex gap-md">
                    <a
                      className="text-black font-bold underline decoration-2 underline-offset-4 hover:text-primary-container transition-colors"
                      href="#"
                    >
                      Import CSV
                    </a>
                    <a
                      className="text-black font-bold underline decoration-2 underline-offset-4 hover:text-primary-container transition-colors"
                      href="#"
                    >
                      Integration Guide
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: RECENT ACTIVITY / CONTEXT (Minimal List) */}
          <section className="max-w-7xl mx-auto w-full bg-black text-white p-lg brutalist-shadow-lg mb-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-md">
              <div className="flex items-center gap-md">
                <div className="w-12 h-12 bg-primary-container border-2 border-white flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-black"
                    data-icon="info"
                  >
                    info
                  </span>
                </div>
                <div>
                  <h3 className="font-mono-label text-primary-container">
                    PRO TIP
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Fill out your company profile to increase candidate match
                    accuracy by 45%.
                  </p>
                </div>
              </div>
              <Link to="/profile">
                <button className="border-2 border-white px-md py-sm font-mono-label uppercase hover:bg-white hover:text-black transition-all">
                  Complete Profile
                </button>
              </Link>
            </div>
          </section>
        </main>

        {/* Footer Decoration */}
        <footer className="w-full border-t-4 border-black p-md bg-zinc-100 flex justify-between items-center">
          <span className="font-mono-data text-black uppercase font-bold">
            © 2024 JOBIFY RECRUITMENT SYSTEMS INC.
          </span>
          <div className="flex gap-md">
            <span className="material-symbols-outlined" data-icon="terminal">
              terminal
            </span>
            <span
              className="material-symbols-outlined"
              data-icon="network_check"
            >
              network_check
            </span>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div>
      <h3>Something Went Wrong</h3>
    </div>
  );
};

export default Error;
