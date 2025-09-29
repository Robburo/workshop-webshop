import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Nova workshop",
  description: "Website to buy products and join a workshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Sidebar />
          <div className="content">
            <Header/>
            <main>{children}</main>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
