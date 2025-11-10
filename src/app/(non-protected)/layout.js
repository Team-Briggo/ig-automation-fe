import Header from "@/components/Header";
import Footer from "../../components/Footer";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="bg-salt">
        <Header />
        <div className="pt-32 min-h-screen">{children}</div>
        <Footer />
      </div>
    </html>
  );
}
