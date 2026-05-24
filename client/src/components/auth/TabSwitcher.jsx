import { Link } from "react-router-dom";

const TabSwitcher = ({ activeTab }) => {
  const isLogin = activeTab === "login";

  const commonStyles =
    "flex-1 py-4 text-mono-label uppercase tracking-widest font-bold text-center transition-colors";
  // Styles applied when a tab is active (Button)
  const activeStyles = "bg-primary-container text-black";
  // Styles applied when a tab is inactive (Link)
  const inactiveStyles =
    "bg-surface-container-lowest text-on-background hover:bg-surface-container";

  return (
    <div className="flex border-b-4 border-on-background mb-lg -mx-lg -mt-lg">
      {/* Login Tab */}
      {isLogin ? (
        <button
          className={`${commonStyles} ${activeStyles} border-r-4 border-on-background`}
        >
          Login
        </button>
      ) : (
        <Link to="/login" className={`${commonStyles} ${inactiveStyles}`}>
          Login
        </Link>
      )}

      {/* Register Tab */}
      {!isLogin ? (
        <button
          className={`${commonStyles} ${activeStyles} border-l-4 border-on-background`}
        >
          Register
        </button>
      ) : (
        <Link to="/register" className={`${commonStyles} ${inactiveStyles}`}>
          Register
        </Link>
      )}
    </div>
  );
};

export default TabSwitcher;
