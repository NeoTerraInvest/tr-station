import { Outlet } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
// import Footer from "../components/layout/Footer";

export const meta: MetaFunction = () => [
  { title: "Shop" },
  { name: "description", content: "Shop Layout" },
];

export default function ShopLayout() {
  return (
    <div className="min-h-screen">
      <header className="text-2xl font-semibold min-h-[5rem] bg-white">
        <div className="container h-full flex items-center">
          <img
            src="https://api-seapt-cdn-344342163.imgix.net/images/tr/tr-logo.png"
            alt="logo"
            className="w-20 h-20"
          />
          <div className="py-2">
            <h1 className="text-2xl font-bold text-background-primary">TR</h1>
            <span className="text-sub-1">TRANSFER STATION</span>
          </div>
        </div>
        {/* <div className="flex gap-4 py-4">
          <Link to="/">홈</Link>
          <Link to="/">상품</Link>
        </div> */}
      </header>

      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
