import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConfigureAmplifyClient from "../components/client/ConfigureAmplifyClient";
import { UserProvider } from "@/contexts/UserContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConfigureAmplifyClient />
        <div className="flex overflow-hidden flex-col min-h-screen">
          <Header />
          <main className="flex-1">
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
