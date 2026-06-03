import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Хакатон BuildX — 3 дня, 6 направлений, рабочие прототипы",
  description:
    "Внутренний корпоративный хакатон BuildX: 3 дня, команды по 3–5 человек, 6 индустриальных направлений, денежный приз и поддержка проекта.",
  applicationName: "BuildX",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    title: "Хакатон BuildX",
    description:
      "За 3 дня собираем рабочие прототипы продуктовых идей. 6 направлений. Команды 3–5 человек.",
    siteName: "BuildX",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Хакатон BuildX",
    description: "За 3 дня собираем рабочие прототипы продуктовых идей.",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
