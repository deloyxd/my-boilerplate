import Header from "@/components/header";
import { siteMetadata, getMetadataTitle } from "@/config/metadata";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header title={getMetadataTitle()} />
      {children}
    </>
  );
}
