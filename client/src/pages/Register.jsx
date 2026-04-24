import { FormRow } from "../components";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface overflow-x-hidden">
      <main className="grow pt-24 pb-12 px-4 md:px-lg relative overflow-hidden">
        {/* Decorative Brutalist Elements */}
        <div className="pointer-events-none absolute top-20 right-[-5%] z-0 h-64 w-64 border-4 border-black bg-primary-container opacity-50 brutalist-shadow-neon animate-float-tilt-right"></div>
        <div
          className="pointer-events-none absolute bottom-20 left-[-5%] z-0 h-40 w-80 border-4 border-black bg-white opacity-50 brutalist-shadow-neon animate-float-tilt-left"
          style={{ animationDelay: "-3s" }}
        ></div>
        {/* <div className="pointer-events-none absolute top-1/2 left-10 z-0 hidden h-24 w-24 border-8 border-black opacity-20 xl:block"></div> */}

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative z-10">
          {/* Left Section: Why Join */}
          <div className="hidden lg:flex flex-col gap-lg">
            <div className="bg-black text-white p-8 border-4 border-black brutalist-shadow-neon relative transform -rotate-2">
              <h2 className="text-h2 uppercase mb-md leading-none">
                Why Join{" "}
                <span className="text-primary-container italic">Jobify?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 bg-primary-container text-black border-2 border-black p-1 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div>
                    <p className="text-h3 uppercase tracking-tighter">
                      Track Applications in Real-time
                    </p>
                    <p className="text-mono-label opacity-80 uppercase text-xs">
                      Never wonder about your status again. Live updates for
                      every move.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 bg-white text-black border-2 border-black p-1 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">groups</span>
                  </div>
                  <div>
                    <p className="text-h3 uppercase tracking-tighter">
                      Direct Access to Top Talent
                    </p>
                    <p className="text-mono-label opacity-80 uppercase text-xs">
                      Connect with recruiters from the world's most aggressive
                      startups.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 bg-primary-container text-black border-2 border-black p-1 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <div>
                    <p className="text-h3 uppercase tracking-tighter">
                      Data-Driven Insights
                    </p>
                    <p className="text-mono-label opacity-80 uppercase text-xs">
                      Optimize your profile with proprietary performance
                      metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 bg-white border-4 border-black p-4 brutalist-shadow-sm rotate-1">
                <p className="font-black text-4xl italic">12k+</p>
                <p className="text-mono-label text-[10px] uppercase font-bold">
                  Active High-Voltage Jobs
                </p>
              </div>
              <div className="flex-1 bg-primary-container border-4 border-black p-4 brutalist-shadow-sm -rotate-2">
                <p className="font-black text-4xl italic">4.9s</p>
                <p className="text-mono-label text-[10px] uppercase font-bold">
                  Avg Response Time
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Registration Form */}
          <div className="max-w-[500px] w-full bg-white border-4 border-black p-8 md:p-lg brutalist-shadow mx-auto">
            <div className="mb-lg">
              <h1 className="text-h2 uppercase tracking-tighter mb-sm leading-none">
                Create
                <br />
                Account
              </h1>
              <p className="text-mono-label uppercase text-secondary font-bold">
                Initiate protocol
              </p>
            </div>

            <form className="space-y-md">
              {/* Name Field */}
              <FormRow
                type="text"
                name="name"
                labelText="Full Name"
                placeholder="JOHN DOE"
                dataIcon="person"
              />
              {/* Email Field */}
              <FormRow
                type="email"
                name="email"
                labelText="Email Address"
                placeholder="USER@JOBIFY.COM"
                dataIcon="mail"
              />
              {/* Password Field */}
              <div className="space-y-xs">
                <FormRow
                  type="password"
                  name="password"
                  labelText="Security Key"
                  placeholder="********"
                  dataIcon="lock"
                />
                {/* Password Strength */}
                <div className="pt-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-mono-label text-[10px] uppercase font-black">
                      Strength Rating
                    </span>
                    <span className="text-mono-label text-[10px] uppercase font-black text-primary">
                      High Performance
                    </span>
                  </div>
                  <div className="w-full h-4 bg-zinc-200 border-2 border-black flex">
                    <div className="w-1/4 bg-primary-container border-r-2 border-black h-full"></div>
                    <div className="w-1/4 bg-primary-container border-r-2 border-black h-full"></div>
                    <div className="w-1/4 bg-primary-container border-r-2 border-black h-full"></div>
                    <div className="w-1/4 bg-white h-full"></div>
                  </div>
                </div>
              </div>

              {/* Register Button */}
              <div className="pt-md">
                <button
                  className="w-full bg-primary-container border-4 border-black py-5 text-h3 text-xl uppercase tracking-tighter brutalist-shadow-sm active-press-lg transition-all duration-75 flex items-center justify-center gap-2 hover:scale-[1.02]"
                  type="submit"
                >
                  Launch Profile
                  <span
                    className="material-symbols-outlined"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="relative my-lg">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-4 border-black"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-black">
                <span className="bg-white px-4 text-mono-label">
                  Oauth Overrides
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-md">
              <button className="flex items-center justify-center gap-2 border-4 border-black py-4 text-mono-label font-black text-xs brutalist-shadow-sm active-press hover:bg-zinc-100 transition-all">
                <span className="material-symbols-outlined " data-icon="google">
                  google
                </span>
              </button>
              <button className="flex items-center justify-center gap-2 border-4 border-black py-4 text-mono-label font-black text-xs brutalist-shadow-sm active-press hover:bg-zinc-100 transition-all">
                <span className="material-symbols-outlined" data-icon="link">
                  link
                </span>
                LINKEDIN
              </button>
            </div>

            <div className="mt-lg text-center">
              <p className="text-mono-label uppercase text-xs font-bold">
                Profile exists?
                <a
                  className="text-primary underline font-black hover:text-black transition-colors decoration-4 underline-offset-4"
                  href="#"
                >
                  {" "}
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-black w-full border-t-4 border-black dark:border-white mt-auto z-20">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-10 w-full gap-4 max-w-[1440px] mx-auto">
          <div className="text-xl font-black text-black dark:text-white uppercase font-heading tracking-tighter">
            JOBIFY
          </div>
          <p className="font-bold uppercase text-xs font-heading text-black dark:text-white">
            © 2026 JOBIFY - BUILT FOR PERFORMANCE
          </p>
          <div className="flex gap-6">
            <a
              className="font-bold uppercase text-xs font-heading text-black dark:text-white hover:skew-x-2 hover:text-primary-container transition-transform duration-100"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-bold uppercase text-xs font-heading text-black dark:text-white hover:skew-x-2 hover:text-primary-container transition-transform duration-100"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-bold uppercase text-xs font-heading text-black dark:text-white hover:skew-x-2 hover:text-primary-container transition-transform duration-100"
              href="#"
            >
              Contact Support
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Decorative Element (Bottom Left) */}
      <div className="fixed bottom-10 left-10 hidden xl:flex flex-col gap-4 z-30">
        <div className="border-4 border-black bg-white p-4 brutalist-shadow-sm -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
          <p className="text-mono-label text-[10px] font-black uppercase">
            Active Nodes: 12,402
          </p>
        </div>
        <div className="border-4 border-black bg-primary-container p-4 brutalist-shadow-sm rotate-2 hover:-rotate-2 transition-transform cursor-pointer">
          <p className="text-mono-label text-[10px] font-black uppercase">
            Sync Complete
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
