import type { Metadata } from "next";
import { Space_Mono, Inter, Dancing_Script, Instrument_Serif, Sora } from "next/font/google";
import "./globals.css";
import "./neural.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

/** Variable Sora 100–800 — required for font-variation-settings 'wght' fractional weights. */
const sora = Sora({
  subsets: ["latin"],
  display: "block",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Exam Rescue — AI-Powered Personalized Exam Planner",
  description: "Tell us what you've prepared, what you've left, and how much time you have. Exam Rescue creates your personalized path to your best possible score.",
  keywords: "exam planner, study schedule, CBSE, Class 10, personalized study plan, exam preparation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${spaceMono.variable} ${inter.variable} ${dancingScript.variable} ${instrumentSerif.variable} ${sora.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
