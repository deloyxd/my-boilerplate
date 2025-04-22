import { geistSans, geistMono } from "@/config/font";
import "./globals.css";
import Container from "@/components/container";
import Footer from "@/components/footer";
import {
  siteMetadata,
  getMetadataTitle,
  getMetadataDescription,
  getMetadataGithub,
} from "@/config/metadata";

export const metadata = siteMetadata;

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
          {children}
          <Footer
            title={getMetadataTitle()}
            description={getMetadataDescription()}
            github={getMetadataGithub()}
          />
        </Container>
      </body>
    </html>
  );
}
