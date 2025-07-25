import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";

const TTCommons = localFont({
  src: [
    {
      path: "./fonts/Fontspring-DEMO-tt_commons_pro_thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Fontspring-DEMO-tt_commons_pro_light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Fontspring-DEMO-tt_commons_pro_regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Fontspring-DEMO-tt_commons_pro_medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Fontspring-DEMO-tt_commons_pro_expanded_demibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Fontspring-DEMO-tt_commons_pro_expanded_demibold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Fontspring-DEMO-tt_commons_pro_extrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-ttcommons", // optional: use in Tailwind or CSS
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "wondr by BNI: Atur Keuanganmu, Jadiin Maumu",
  description:
    "Download sekarang dan nikmati kemudahan mulai dari transaksi ini itu, lihat rekap keuanganmu, sampai kembangin portfolio investasimu!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${TTCommons.variable} ${poppins.variable} antialiased relative`}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
