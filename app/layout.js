import Navbar from "@/app/components/Navbar";
import "./globals.css";
import "font-awesome/css/font-awesome.min.css";

export const metadata = {
  title: "جاویدان صنعت",
  description: "تجهیزات تعمیرگاهی-دیاگ-آموزش",
};

export default async function RootLayout({ children }) {
  const partsRes = await fetch(
    `${process.env.BACKEND_URL}/products/parts_classification/`
  );
  const parts = await partsRes.json();

  const servicesRes = await fetch(
    `${process.env.BACKEND_URL}/products/services_classification/`
  );
  const services = await servicesRes.json();

  const classesRes = await fetch(
    `${process.env.BACKEND_URL}/products/classes_classification/`
  );
  const classes = await classesRes.json();
  return (
    <html dir="rtl" lang="en" className=" scroll-smooth">
      <body>
        <Navbar parts={parts} services={services} classes={classes} />
        {children}
      </body>
    </html>
  );
}
