import Navbar from "@/app/components/Navbar";
import "./globals.css";
import "font-awesome/css/font-awesome.min.css";

export const metadata = {
  title: "جاویدان صنعت",
  description: "تجهیزات تعمیرگاهی-دیاگ-آموزش",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="en" className=" scroll-smooth">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
