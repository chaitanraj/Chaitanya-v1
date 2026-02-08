import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SideGrid from "@/components/SideGrid";
import PipesBackground from "@/components/PipesBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import InitialLoadGate from "@/components/InitialLoadGate";

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
  title: "Hey, Chaitanya this side !",
  description: "Full Stack Developer specializing in MERN, PERN, and AI/ML. Building scalable web applications with clean code and powerful backend logic.",
  keywords: ["Full Stack Developer", "React", "Node.js", "AI", "MERN", "PERN", "Portfolio"],
  authors: [{ name: "Chaitanya Raj" }],
  openGraph: {
    title: "Chaitanya Raj | Full Stack AI Software Engineer",
    description: "Full Stack Developer specializing in MERN, PERN, and AI/ML.",
    type: "website",
  },
  icons:{
    icon:"/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>
          <InitialLoadGate>
            {/* Main Layout Container */}
            <div className="layout-wrapper">
              {/* Side Panels - Easy to toggle on/off */}
              <SideGrid enabled={true} showOrbs={false} showAnimatedLines={true} />

              {/* Main Content Area (50%) */}
              <div className="main-content-wrapper">
                <PipesBackground />
                <div className="mesh-gradient" />
                <div className="glow-blob-pink" />
                <div className="main-content-noise-shield" />
                <div className="main-content-inner">{children}</div>
              </div>
            </div>
          </InitialLoadGate>
        </ThemeProvider>
      </body>
    </html>
  );
}
