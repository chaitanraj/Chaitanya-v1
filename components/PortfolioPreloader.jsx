"use client";

export default function PortfolioPreloader({ className = "" }) {
  const screenClassName = `preloader-screen ${className}`.trim();

  return (
    <div className={screenClassName} role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="preloader-gradient-overlay" />
      <div className="preloader-grid-overlay" />

      <div className="preloader-center-glow" />

      <div className="preloader-content">
        <div className="preloader-status-line">
          <div className="preloader-spinner-wrap" aria-hidden="true">
            <svg
              className="preloader-spinner-svg"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="preloader-loader-gradient" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ff7a18" />
                  <stop offset="50%" stopColor="#ff4d6d" />
                  <stop offset="100%" stopColor="#c918ff" />
                </linearGradient>
              </defs>
              <circle className="preloader-spinner-track" cx="24" cy="24" r="18" strokeWidth="3.2" />
              <circle
                className="preloader-spinner-indicator"
                cx="24"
                cy="24"
                r="18"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="preloader-main-text">
            Hold on... <span className="preloader-name-gradient">Summoning</span> Chaitanya.
          </p>
        </div>

        <p className="preloader-subtext">Loading portfolio assets...</p>
      </div>
    </div>
  );
}
