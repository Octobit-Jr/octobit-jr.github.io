import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://octobit-jr.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OctoBit Jr. | Empresa Júnior da USP Ribeirão Preto",
    template: "%s | OctoBit Jr.",
  },
  description:
    "Tecnologia sob medida para o seu negócio, com qualidade USP, para te ajudar a vender mais. Websites, automações e soluções de dados pela OctoBit Jr.",
  keywords: [
    "OctoBit Jr",
    "empresa júnior USP",
    "desenvolvimento de sites",
    "automação de processos",
    "data science",
    "Ribeirão Preto",
  ],
  openGraph: {
    title: "OctoBit Jr. | Empresa Júnior da USP Ribeirão Preto",
    description:
      "Tecnologia sob medida para o seu negócio, com qualidade USP, para te ajudar a vender mais.",
    url: siteUrl,
    siteName: "OctoBit Jr.",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export const viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
