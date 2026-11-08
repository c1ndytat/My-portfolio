import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cindy.dev",
  description: "Portfolio of Cindy Tat, a second-year Software Engineering student at San José State University.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
