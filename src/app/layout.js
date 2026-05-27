import "./globals.css";

import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";

export const metadata = {
  title: "FIXORA",
  description: "Smart Technology Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}