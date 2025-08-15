import "./globals.css";
import ConfigureAmplifyClient from "../components/client/ConfigureAmplifyClient";
import { UserProvider } from "@/contexts/UserContext";

export const metadata = {
  title: "Salt & Pepper App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConfigureAmplifyClient />
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
