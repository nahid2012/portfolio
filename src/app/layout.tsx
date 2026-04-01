import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nahid Shah | Full Stack Developer",
  description: "Full Stack Developer specializing in MERN Stack and DevOps. Building modern web applications.",
  keywords: ["Full Stack Developer", "MERN Stack", "DevOps", "React", "Node.js", "Next.js"],
  authors: [{ name: "Nahid Shah" }],
  creator: "Nahid Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nahidshah.me",
    title: "Nahid Shah | Full Stack Developer",
    description: "Full Stack Developer specializing in MERN Stack and DevOps.",
    siteName: "Nahid Shah Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-navy text-white antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
