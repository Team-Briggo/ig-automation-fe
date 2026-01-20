import { UserProvider } from "@/contexts/UserContext";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {/* <ConfigureAmplifyClient /> */}
        <div className="bg-salt">
          <main className="min-h-screen">
            <UserProvider>{children}</UserProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Briggo",
};
