import Header from "@/components/Header";
import Footer from "../../components/Footer";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="pt-28 min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
