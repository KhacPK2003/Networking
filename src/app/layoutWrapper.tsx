"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/TempFooter/Footercial";
import BackToTop from "@/components/BackToTop/BackToTop";
// import Sidebar from "@/components/layouts/Sidebar";
import RightSidebar from "@/components/layouts/RightSidebar";
import SidebarDesktop from "@/components/layouts/SidebarDesktop";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // const isAdminPage = pathname?.startsWith("/dashboardAdmin");
  const hideLayoutRoutes = ["/login", "/register"];

  const isHiddenLayout =
  pathname?.startsWith("/dashboardAdmin") ||
  hideLayoutRoutes.includes(pathname || "");

  if (isHiddenLayout) {
  return <>{children}</>;
}

  // if (isAdminPage) {
  //   return <>{children}</>;
  // }

  return (
    <>
      {/* {!isAdminPage && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <BackToTop />} */}

      <div className="h-screen flex flex-col bg-gray-100 ">
      {/* Header */}
      <Navbar />
      <div className="flex flex-1 ">

      {/* Main Layout */}
      <div className="flex flex-1 w-full mx-auto gap-6 ">
        <div className=" hidden lg:block h-full w-[360px] flex-shrink-0">
          <SidebarDesktop />
        </div>

        <main className="flex-1 min-w-0">
          {children}
        </main>

        <div className="w-[360px] hidden xl:block">
          <RightSidebar />
        </div>
      </div>

      {/* <Footer /> */}
      {/* <BackToTop /> */}
      </div>
    </div>

    </>
  );
}
