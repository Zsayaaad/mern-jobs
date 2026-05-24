import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";

const AuthHeader = () => {
  return (
    <header className="fixed top-0 z-50 flex justify-between items-center px-8 py-4 w-full bg-surface-container-lowest border-b-4 border-on-background">
      <Link to="/">
        <div className="text-3xl font-black italic tracking-tighter text-on-background font-heading">
          JOBIFY
        </div>
      </Link>
      <ThemeToggle />
    </header>
  );
};

export default AuthHeader;
