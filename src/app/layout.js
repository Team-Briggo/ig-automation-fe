import Header from "@/components/Header";
import { UserProvider } from "@/contexts/UserContext";
import { Outfit } from "next/font/google";
import Footer from "../components/Footer";
import ConfigureAmplifyClient from "../components/client/ConfigureAmplifyClient";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ConfigureAmplifyClient />
        <div className="bg-salt">
          <Header />
          {/* <SideNav /> */}
          <main className="pt-40 min-h-screen">
            <UserProvider>{children}</UserProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Briggo",
};
