import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 w-full bg-white dark:bg-zinc-900 border-b-4 border-black dark:border-white">
        <div className="text-3xl font-black italic tracking-tighter text-black dark:text-white uppercase">
          JOBIFY
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="font-mono-label text-mono-label text-black dark:text-white underline decoration-4 underline-offset-4 uppercase"
            href="#"
          >
            Home
          </a>
          <a
            className="font-mono-label text-mono-label text-zinc-600 dark:text-zinc-400 hover:text-black transition-colors uppercase"
            href="#"
          >
            Features
          </a>
          <a
            className="font-mono-label text-mono-label text-zinc-600 dark:text-zinc-400 hover:text-black transition-colors uppercase"
            href="#"
          >
            Careers
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-zinc-100 transition-colors">
            <span className="material-symbols-outlined" data-icon="dark_mode">
              dark_mode
            </span>
          </button>
          <button className="p-2 hover:bg-zinc-100 transition-colors">
            <span
              className="material-symbols-outlined"
              data-icon="account_circle"
            >
              account_circle
            </span>
          </button>
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto px-container-margin py-xl">
        {/* Hero Section */}
        <section className="grid grid-cols-12 gap-gutter mb-xl items-center">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="font-h1 text-[64px] leading-none md:text-[80px] mb-lg uppercase">
              JOB TRACKING
              <br />
              <span className="bg-primary-container px-4 border-4 border-black inline-block brutalist-shadow-lg transform -rotate-1">
                FOR THE BRAVE
              </span>
            </h1>
            <p className="font-body text-h3 mb-lg max-w-xl">
              The raw, high-performance command center for recruitment
              professionals and obsessive job seekers. No fluff. Just results.
            </p>
            <div className="flex flex-wrap gap-md">
              <Link to="/login">
                <button className="bg-primary-container text-black font-mono-label text-mono-label px-lg py-md border-4 border-black brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase font-bold">
                  GET STARTED
                </button>
              </Link>
              <Link to="dashboard">
                <button className="bg-white text-black font-mono-label text-mono-label px-lg py-md border-4 border-black brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase font-bold">
                  VIEW DEMO
                </button>
              </Link>
            </div>
          </div>

          {/* Illustration / Bento Style Job Cards */}
          <div className="col-span-12 lg:col-span-5 relative h-[500px] mt-lg lg:mt-0">
            <div className="absolute top-0 right-0 w-72 bg-white border-4 border-black p-md brutalist-shadow-lg z-30 transform rotate-3">
              <div className="flex justify-between items-start mb-sm">
                <span className="font-mono-label text-mono-label bg-black text-white px-xs uppercase">
                  Pending
                </span>
                <span className="material-symbols-outlined">more_vert</span>
              </div>
              <h3 className="font-h3 text-h3 mb-xs">Senior UI Designer</h3>
              <p className="font-mono-data text-mono-data uppercase mb-md">
                Berlin, DE • $120k
              </p>
              <div className="h-2 w-full bg-secondary-container border-2 border-black">
                <div className="h-full bg-primary-container w-2/3 border-r-2 border-black"></div>
              </div>
            </div>

            <div className="absolute top-32 left-0 w-80 bg-primary-container border-4 border-black p-md brutalist-shadow-lg z-20 transform -rotate-2">
              <div className="flex justify-between items-start mb-sm">
                <span className="font-mono-label text-mono-label bg-black text-white px-xs uppercase">
                  Interview
                </span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <h3 className="font-h3 text-h3 mb-xs">Lead Developer</h3>
              <p className="font-mono-data text-mono-data uppercase mb-md">
                Remote • $160k
              </p>
              <img
                alt="Team member"
                className="w-full h-32 object-cover border-2 border-black grayscale mb-xs"
                data-alt="Modern professional workspace with a diverse team collaborating in a bright high-tech office environment"
                src="/image.png"
              />
            </div>

            <div className="absolute bottom-0 right-10 w-64 bg-zinc-900 text-white border-4 border-black p-md brutalist-shadow-lg z-10 transform rotate-1">
              <span className="font-mono-label text-mono-label bg-primary-container text-black px-xs uppercase mb-sm inline-block">
                Urgent
              </span>
              <h3 className="font-h3 text-h3 mb-xs">Product Lead</h3>
              <p className="font-mono-data text-mono-data uppercase">
                London, UK
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-xl">
          <div className="flex items-center gap-md mb-xl">
            <div className="h-1 bg-black flex-grow"></div>
            <h2 className="font-h2 text-h2 uppercase shrink-0">
              CORE CAPABILITIES
            </h2>
            <div className="h-1 bg-black flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Benefit 1: Track */}
            <div className="bg-white border-4 border-black p-lg brutalist-shadow hover:bg-surface-container-low transition-colors group">
              <div className="w-16 h-16 bg-black text-primary-container flex items-center justify-center mb-lg border-2 border-black group-hover:bg-primary-container group-hover:text-black transition-colors">
                <span
                  className="material-symbols-outlined text-4xl"
                  data-icon="location_searching"
                >
                  location_searching
                </span>
              </div>
              <h3 className="font-h3 text-h3 mb-md uppercase font-black">
                TRACK
              </h3>
              <p className="font-body text-body mb-lg">
                Zero-friction application tracking. Every application, every
                stage, every interaction logged in a high-speed database
                designed for volume.
              </p>
              <div className="flex items-center gap-2 font-mono-label text-mono-label font-bold border-t-2 border-black pt-md uppercase">
                Real-time logging{" "}
                <span className="material-symbols-outlined">bolt</span>
              </div>
            </div>

            {/* Benefit 2: Analyze */}
            <div className="bg-white border-4 border-black p-lg brutalist-shadow hover:bg-surface-container-low transition-colors group">
              <div className="w-16 h-16 bg-black text-primary-container flex items-center justify-center mb-lg border-2 border-black group-hover:bg-primary-container group-hover:text-black transition-colors">
                <span
                  className="material-symbols-outlined text-4xl"
                  data-icon="leaderboard"
                >
                  leaderboard
                </span>
              </div>
              <h3 className="font-h3 text-h3 mb-md uppercase font-black">
                ANALYZE
              </h3>
              <p className="font-body text-body mb-lg">
                Turn your search into data. Conversion rates, response
                timelines, and salary benchmarks visualized through a brutalist
                analytics dashboard.
              </p>
              <div className="flex items-center gap-2 font-mono-label text-mono-label font-bold border-t-2 border-black pt-md uppercase">
                Deep metrics{" "}
                <span className="material-symbols-outlined">
                  data_exploration
                </span>
              </div>
            </div>

            {/* Benefit 3: Manage */}
            <div className="bg-white border-4 border-black p-lg brutalist-shadow hover:bg-surface-container-low transition-colors group">
              <div className="w-16 h-16 bg-black text-primary-container flex items-center justify-center mb-lg border-2 border-black group-hover:bg-primary-container group-hover:text-black transition-colors">
                <span
                  className="material-symbols-outlined text-4xl"
                  data-icon="grid_view"
                >
                  grid_view
                </span>
              </div>
              <h3 className="font-h3 text-h3 mb-md uppercase font-black">
                MANAGE
              </h3>
              <p className="font-body text-body mb-lg">
                Organize your pipeline with surgical precision. Drag-and-drop
                interfaces that feel like a high-performance OS, not a
                spreadsheet.
              </p>
              <div className="flex items-center gap-2 font-mono-label text-mono-label font-bold border-t-2 border-black pt-md uppercase">
                Workflow control{" "}
                <span className="material-symbols-outlined">
                  settings_input_component
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Content Section / Social Proof */}
        <section className="mt-xl grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-4 bg-zinc-900 text-white p-lg brutalist-shadow-lg border-4 border-black">
            <h2 className="font-h2 text-h2 mb-md uppercase">98%</h2>
            <p className="font-mono-label text-mono-label uppercase text-primary-container mb-lg">
              Efficiency Boost
            </p>
            <p className="font-body text-body text-zinc-400">
              Our users report a significant reduction in administrative
              overhead during the first month of migration to Jobify.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 bg-primary-container p-lg brutalist-shadow-lg border-4 border-black flex flex-col md:flex-row items-center gap-lg">
            <div className="flex-grow">
              <h2 className="font-h2 text-h2 mb-sm uppercase">
                READY TO EXECUTE?
              </h2>
              <p className="font-body text-h3 mb-0 uppercase">
                Join 15,000+ top-tier professionals.
              </p>
            </div>
            <Link to="/login">
              <button className="bg-white text-black font-mono-label text-mono-label px-xl py-lg border-4 border-black brutalist-shadow-lg hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all uppercase font-black text-xl shrink-0">
                START TRACKING
              </button>
            </Link>
          </div>
        </section>

        {/* Feature Grid (Modern Brutalism) */}
        <section className="py-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="p-md border-2 border-black bg-white flex flex-col gap-sm">
            <span
              className="material-symbols-outlined text-primary"
              data-icon="encrypted"
            >
              encrypted
            </span>
            <h4 className="font-h3 text-body font-black uppercase">
              Secure data
            </h4>
          </div>
          <div className="p-md border-2 border-black bg-white flex flex-col gap-sm">
            <span
              className="material-symbols-outlined text-primary"
              data-icon="cloud_sync"
            >
              cloud_sync
            </span>
            <h4 className="font-h3 text-body font-black uppercase">
              Live Sync
            </h4>
          </div>
          <div className="p-md border-2 border-black bg-white flex flex-col gap-sm">
            <span
              className="material-symbols-outlined text-primary"
              data-icon="api"
            >
              api
            </span>
            <h4 className="font-h3 text-body font-black uppercase">Open API</h4>
          </div>
          <div className="p-md border-2 border-black bg-white flex flex-col gap-sm">
            <span
              className="material-symbols-outlined text-primary"
              data-icon="mail"
            >
              mail
            </span>
            <h4 className="font-h3 text-body font-black uppercase">Alerts</h4>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-black py-xl px-container-margin">
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-4">
            <div className="text-3xl font-black italic tracking-tighter text-black uppercase mb-md">
              JOBIFY
            </div>
            <p className="font-mono-label text-mono-label uppercase mb-lg">
              Built for the relentless seeker.
            </p>
            <div className="flex gap-md">
              <span className="material-symbols-outlined p-2 border-2 border-black brutalist-shadow">
                share
              </span>
              <span className="material-symbols-outlined p-2 border-2 border-black brutalist-shadow">
                alternate_email
              </span>
              <span className="material-symbols-outlined p-2 border-2 border-black brutalist-shadow">
                rss_feed
              </span>
            </div>
          </div>
          <div className="col-span-6 md:col-span-4 flex flex-col gap-sm">
            <h5 className="font-mono-label font-black uppercase mb-sm">
              Navigation
            </h5>
            <a className="hover:underline" href="#">
              Dashboard
            </a>
            <a className="hover:underline" href="#">
              Job Board
            </a>
            <a className="hover:underline" href="#">
              Analytics
            </a>
            <a className="hover:underline" href="#">
              Pricing
            </a>
          </div>
          <div className="col-span-6 md:col-span-4 flex flex-col gap-sm">
            <h5 className="font-mono-label font-black uppercase mb-sm">
              Legal
            </h5>
            <a className="hover:underline" href="#">
              Privacy Policy
            </a>
            <a className="hover:underline" href="#">
              Terms of Service
            </a>
            <a className="hover:underline" href="#">
              Security Protocols
            </a>
            <a className="hover:underline" href="#">
              API Docs
            </a>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-xl pt-lg border-t-2 border-zinc-200 flex justify-between items-center font-mono-data uppercase">
          <span>© 2026 JOBIFY CORE SYSTEM</span>
          <span>v1.0</span>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
