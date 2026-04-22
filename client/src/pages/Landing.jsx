const Landing = () => {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 w-full bg-white dark:bg-zinc-900 border-b-4 border-black dark:border-white">
        {/* Logo */}
        <div className="text-3xl font-black italic tracking-tighter text-black dark:text-white uppercase">
          JOBIFY
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#"
            className="font-mono-label text-mono-label text-black dark:text-white underline decoration-4 underline-offset-4 uppercase"
          >
            Home
          </a>
          <a
            href="#"
            className="font-mono-label text-mono-label text-zinc-600 dark:text-zinc-400 hover:text-black transition-colors uppercase"
          >
            Features
          </a>
          <a
            href="#"
            className="font-mono-label text-mono-label text-zinc-600 dark:text-zinc-400 hover:text-black transition-colors uppercase"
          >
            Careers
          </a>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-zinc-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="outline"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-zinc-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>

      <main className="app-container py-12 lg:py-20 space-y-24">
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter">
              JOB TRACKING
              <br />
              <span className="inline-block bg-neon text-black px-4 py-2 border-2 border-black shadow-brutal">
                FOR THE BRAVE
              </span>
            </h2>

            <p className="text-lg leading-relaxed max-w-xl font-black text-ink">
              The raw, high-performance command center for recruitment
              professionals and obsessive job seekers. No fluff. Just results.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-8 py-3.5 bg-neon border-2 border-black text-black font-bold tracking-widest hover:translate-x-[2px] hover:translate-y-[2px] shadow-brutal hover:shadow-compressed transition-all duration-150 active:translate-x-[4px] active:translate-y-[4px]">
                GET STARTED
              </button>
              <button className="px-8 py-3.5 bg-white border-2 border-black text-black font-bold tracking-widest hover:translate-x-[2px] hover:translate-y-[2px] shadow-brutal hover:shadow-compressed transition-all duration-100">
                VIEW DEMO
              </button>
            </div>
          </div> */}

          {/* FLOATING JOB CARDS VISUAL */}
          <div className="relative h-[420px] w-full hidden lg:block select-none">
            {/* Card 1: Pending */}
            {/* <div className="absolute top-0 right-0 w-64 bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 z-10 rotate-2">
              <div className="flex justify-between items-start mb-3">
                <span className="font-space text-[11px] font-medium bg-black text-white px-2 py-0.5">
                  PENDING
                </span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="5" r="2" />
                  <circle cx="12" cy="19" r="2" />
                </svg>
              </div>
              <h3 className="font-bold text-lg leading-tight">
                Senior UI Designer
              </h3>
              <p className="font-space text-[11px] mt-1 text-gray-600">
                BERLIN, DE • $120K
              </p>
              <div className="mt-4 h-1.5 bg-gray-200">
                <div className="h-full w-2/5 bg-neon"></div>
              </div>
            </div> */}

            {/* Card 2: Interview */}
            {/* <div className="absolute top-16 left-2 w-64 bg-neon border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 z-20 -rotate-1">
              <span className="font-space text-[11px] font-medium bg-black text-neon px-2 py-0.5">
                INTERVIEW
              </span>
              <h3 className="font-bold text-lg mt-3">Lead Developer</h3>
              <p className="font-space text-[11px] mt-1 opacity-70">
                REMOTE • $160K
              </p>
              <div className="mt-4 h-28 bg-[#1a1c1c] border-2 border-black flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div> */}

            {/* Card 3: Urgent */}
            {/* <div className="absolute top-40 right-12 w-60 bg-[#1B1B1B] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 z-30 rotate-3">
              <span className="font-space text-[11px] font-medium bg-neon text-black px-2 py-0.5">
                URGENT
              </span>
              <h3 className="font-bold text-lg mt-3 text-white">
                Product Lead
              </h3>
              <p className="font-space text-[11px] mt-1 text-gray-400">
                LONDON, UK
              </p>
            </div> */}
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        {/* <section>
          <div className="flex items-center justify-center gap-4 mb-14">
            <div className="h-0.5 flex-1 bg-black"></div>
            <h2 className="font-space text-xl font-black tracking-[0.2em] uppercase">
              CORE CAPABILITIES
            </h2>
            <div className="h-0.5 flex-1 bg-black"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "TRACK",
                desc: "Zero-friction application tracking. Every application, every stage, every interaction logged in a high-speed database designed for volume.",
                meta: "REAL-TIME LOGGING ⚡",
              },
              {
                title: "ANALYZE",
                desc: "Turn your search into data. Conversion rates, response timelines, and salary benchmarks visualized through a brutalist analytics dashboard.",
                meta: "DEEP METRICS 📊",
              },
              {
                title: "MANAGE",
                desc: "Organize your pipeline with surgical precision. Drag-and-drop interfaces that feel like a high-performance OS, not a spreadsheet.",
                meta: "WORKFLOW CONTROL ⛶",
              },
            ].map((cap, i) => (
              <div
                key={i}
                className="bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col group hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <div className="w-10 h-10 bg-neon border-2 border-black mb-6 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeWidth="3"
                      d="M12 6v6l4 2"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
                <p className="text-sm leading-relaxed mb-6 grow">{cap.desc}</p>

                <div className="pt-4 border-t-2 border-black flex justify-between items-center">
                  <span className="font-space text-[11px] font-medium tracking-widest">
                    {cap.meta}
                  </span>
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* STATS & CTA GRID */}
        <section className="grid md:grid-cols-3 gap-6">
          {/* Dark Stat Box */}
          {/* <div className="bg-black border-2 border-black text-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-black mb-1">98%</h3>
              <p className="font-space text-[11px] font-medium tracking-widest text-neon mb-4">
                EFFICIENCY BOOST
              </p>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our users report a significant reduction in administrative
              overhead during the first month of migration to Jobify.
            </p>
          </div> */}

          {/* Neon CTA Box */}
          {/* <div className="md:col-span-2 bg-neon border-2 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-black mb-2">
              READY TO EXECUTE?
            </h3>
            <p className="font-space text-sm tracking-[0.15em] mb-8">
              JOIN 15,000+ TOP-TIER PROFESSIONALS.
            </p>
            <button className="self-start px-8 py-4 bg-white border-2 border-black text-black font-bold tracking-widest hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150">
              START TRACKING
            </button>
          </div> */}
        </section>

        {/* FEATURE BADGES */}
        {/* <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🔒", text: "SECURE DATA" },
            { icon: "🔄", text: "LIVE SYNC" },
            { icon: "⚙️", text: "OPEN API" },
            { icon: "📧", text: "ALERTS" },
          ].map((badge, i) => (
            <div
              key={i}
              className="bg-white border-2 border-black p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors cursor-default"
            >
              <div className="w-8 h-8 border border-black flex items-center justify-center shrink-0 text-sm">
                {badge.icon}
              </div>
              <span className="font-space text-[11px] font-bold tracking-widest">
                {badge.text}
              </span>
            </div>
          ))}
        </section> */}
      </main>

      {/* FOOTER */}
      {/* <footer className="border-t-2 border-black bg-white mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <h4 className="text-xl font-black mb-4">JOBIFY</h4>
              <p className="font-space text-[11px] mb-6">
                BUILT FOR THE RELENTLESS SEEKER.
              </p>
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <button
                    key={i}
                    className="w-8 h-8 bg-white border border-black flex items-center justify-center hover:bg-neon transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="square"
                        strokeWidth="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {[
              {
                title: "NAVIGATION",
                links: ["Dashboard", "Job Board", "Analytics", "Pricing"],
              },
              {
                title: "LEGAL",
                links: [
                  "Privacy Policy",
                  "Terms of Service",
                  "Security Protocols",
                  "API Docs",
                ],
              },
            ].map((col, i) => (
              <div key={i}>
                <h5 className="font-space text-[11px] font-bold tracking-[0.15em] mb-4">
                  {col.title}
                </h5>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm hover:underline hover:text-[#006e16] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#dadada] flex flex-col md:flex-row justify-between items-center gap-4 font-space text-[11px] text-gray-600">
            <p>© 2024 JOBIFY CORE SYSTEM</p>
            <p>v2.04.1-STABLE</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Landing;
