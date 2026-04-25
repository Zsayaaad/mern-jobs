import { FormRow } from "../components";
import GoogleIcon from "../assets/icons/GoogleIcon";
import LinkedInIcon from "../assets/icons/LinkedInIcon";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-on-background p-gutter">
      {/* Fixed Header */}
      <header className="fixed top-0 z-50 flex justify-between items-center px-8 py-4 w-full bg-white border-b-4 border-black">
        <Link to="/">
          <div className="text-3xl font-black italic tracking-tighter text-black font-heading">
            JOBIFY
          </div>
        </Link>
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-black cursor-pointer hover:bg-zinc-100 p-2 transition-colors">
            dark_mode
          </span>
        </div>
      </header>

      <main className="w-full max-w-[480px] mt-xl">
        {/* Auth Card */}
        <div className="bg-white border-4 border-black brutalist-shadow p-lg">
          {/* Tab Switcher */}
          <div className="flex border-b-4 border-black mb-lg -mx-lg -mt-lg">
            <button className="flex-1 py-4 text-mono-label uppercase bg-primary-container text-black border-r-4 border-black tracking-widest font-bold">
              Login
            </button>
            <Link
              className="flex-1 py-4 text-mono-label uppercase bg-white text-black hover:bg-zinc-100 transition-colors tracking-widest font-bold text-center"
              to="/register"
            >
              Register
            </Link>
          </div>

          <div className="mb-lg">
            <h1 className="text-h2 text-black mb-xs">Welcome Back.</h1>
            <p className="text-body text-secondary">
              Access your recruiting command center.
            </p>
          </div>

          <form className="space-y-md">
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
                labelText="Password"
                placeholder="********"
                dataIcon="lock"
              />
              <div className="flex justify-end">
                <a
                  className="text-mono-data uppercase text-black underline decoration-2 underline-offset-2 hover:bg-primary-container px-1 transition-colors"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-sm pt-xs">
              <input
                className="w-6 h-6 border-2 border-black !rounded-none text-primary-container focus:ring-0"
                id="remember"
                type="checkbox"
              />
              <label
                className="text-mono-label uppercase text-black cursor-pointer"
                htmlFor="remember"
              >
                Keep me logged in
              </label>
            </div>

            {/* Submit Button */}
            <button
              className="w-full py-5 bg-white border-2 border-black brutalist-shadow-sm active-press hover:bg-primary-container transition-colors mt-lg"
              type="submit"
            >
              <span className="text-h3 text-black uppercase tracking-tighter">
                Submit
              </span>
            </button>
          </form>

          {/* Social Auth */}
          <div className="mt-lg pt-lg border-t-2 border-black flex flex-col gap-md">
            <div className="text-center text-mono-label uppercase text-zinc-500">
              Or continue with
            </div>
            <div className="grid grid-cols-2 gap-md">
              <button className="flex items-center justify-center gap-sm py-3 border-2 border-black bg-white hover:bg-zinc-100 transition-colors text-mono-label uppercase">
                <GoogleIcon />
                Google
              </button>
              <button className="flex items-center justify-center gap-sm py-3 border-2 border-black bg-white hover:bg-zinc-100 transition-colors text-mono-label uppercase">
                <LinkedInIcon />
                LinkedIn
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-lg grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="border-2 border-black bg-surface-container-high p-md brutalist-shadow-sm">
            <div className="text-mono-label uppercase text-black mb-xs">
              Active Users
            </div>
            <div className="text-h2 text-black">12.8k</div>
          </div>
          <div className="border-2 border-black bg-primary-container p-md brutalist-shadow-sm">
            <div className="text-mono-label uppercase text-black mb-xs">
              Jobs Filled
            </div>
            <div className="text-h2 text-black">840+</div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-xl text-center">
          <p className="text-mono-data text-zinc-500 uppercase">
            © 2024 JOBIFY RECRUITMENT TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </main>

      {/* Floating Status Widget */}
      <div className="fixed bottom-gutter right-gutter w-64 hidden lg:block">
        <div className="border-2 border-black bg-white brutalist-shadow-sm p-md">
          <div className="flex items-center gap-sm mb-sm">
            <span className="w-3 h-3 bg-primary-container border border-black !rounded-full"></span>
            <span className="text-mono-label uppercase text-black">
              System Status
            </span>
          </div>
          <div className="text-mono-data text-zinc-600">
            All nodes operational. API latency: 14ms. High-frequency matching
            engine online.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
