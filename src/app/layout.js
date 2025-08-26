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
        <div>
          {/* <Header /> */}
          <main>
            <UserProvider>{children}</UserProvider>
          </main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Briggo",
};
