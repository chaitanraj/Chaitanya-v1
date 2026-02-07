import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Chaitanya Raj | Full Stack AI Software Engineer",
  description: "Full Stack Developer specializing in MERN, PERN, and AI/ML. Building scalable web applications with clean code and powerful backend logic.",
  keywords: ["Full Stack Developer", "React", "Node.js", "AI", "MERN", "PERN", "Portfolio"],
  authors: [{ name: "Chaitanya Raj" }],
  openGraph: {
    title: "Chaitanya Raj | Full Stack AI Software Engineer",
    description: "Full Stack Developer specializing in MERN, PERN, and AI/ML.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {/* Main Layout Container */}
        <div className="layout-wrapper">
          {/* Left Side Panel with Grid Pattern */}
          <div className="side-panel side-panel-left">
            <div className="side-grid-pattern"></div>
          </div>

          {/* Main Content Area (60%) */}
          <div className="main-content-wrapper">
            {/* Background effects inside main content */}
            <div className="mesh-gradient" />
            <div className="glow-blob-pink" />
            {children}
          </div>

          {/* Right Side Panel with Grid Pattern */}
          <div className="side-panel side-panel-right">
            <div className="side-grid-pattern"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
