import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import ThemeToggle from "./components/ThemeToggle";
import github from "@/public/github.svg";
import linkedin from "@/public/linkedin.svg";
import instagram from "@/public/instagram.svg";
import email from "@/public/mail.svg";
import spotify from "@/public/spotify.svg";

export const metadata: Metadata = {
  title: "Vihaan Patel",
  description: "",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📻</text></svg>",
  },
};

function Header () {
  return (
    <div className="header">
      <div className="title">
        <h1>Vihaan Patel</h1>
      </div>
      <ThemeToggle />
      <nav>
        <p>
          <Link href="/">home</Link>
          {/* <a href="https://vihaanpatel.bearblog.dev/">blog</a> */}
          <Link href="/blog">blog</Link>
          <Link href="/works">works</Link>
          <Link href="/timeline">timeline</Link>
          <Link href="/music">music</Link>
        </p>
      </nav>
    </div>
  );
}

function Footer () {
  return (
    <div className="footer">
      <div className="socials">
        <Link href="https://github.com/Vihaan004"><Image src={github} alt="github"/></Link>
        <Link href="https://www.linkedin.com/in/vihaanpatel/"><Image src={linkedin} alt="linkedin"/></Link>
        <Link href="mailto:vihaan004@gmail.com"><Image src={email} alt="email"/></Link>
        <Link href="https://www.instagram.com/vihaan.004/"><Image src={instagram} alt="instagram"/></Link>
        <Link href="https://open.spotify.com/user/n7edezqm12qvmml7mktlo0iry?si=d7425dcc63f84239"><Image src={spotify} alt="spotify"/></Link>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const theme = sessionStorage.getItem('theme');
    if (theme === 'light' || theme === 'dark') {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    }
  } catch {}
})();`,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
