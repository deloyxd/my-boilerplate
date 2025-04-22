import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyApplication",
  description: "MyApplication description",
  other: {
    github: "deloyxd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-200 antialiased`}
      >
        <Container>
          <Header title={metadata.title?.toString() || ""} />
          {children}
          <Footer
            title={metadata.title?.toString() || ""}
            description={metadata.description?.toString() || ""}
            github={metadata.other?.github?.toString() || ""}
          />
        </Container>
      </body>
    </html>
  );
}
