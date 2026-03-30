"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, Bell, MessageCircle, House, MonitorStop, Store, UsersRound, Gamepad2, Search, TableOfContents } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import airbnbLogo from "../shared/assets/image/airbnb-1.png";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useAuthStore } from "@/store/auth";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
// import Sidebar from "./layouts/Sidebar";
import SidebarMobile from "./layouts/SidebarMobile";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // dùng để check trang hiện tại
  const { userId, setUserId, setRole } = useAuthStore();
  const { data } = useUserProfile(userId ?? undefined);
  const userProfile = data?.data;
  const { role } = useAuthStore();

  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasToken(!!token);
  }, [userId]);

  // Danh sách menu
  const menuItems = [
    { label: "Home", href: "/", icon: <House /> },
    { label: "Rooms", href: "/rooms", icon: <MonitorStop /> },
    { label: "Blog", href: "/blog", icon: <Store />},
    { label: "Contact", href: "/contact", icon: <UsersRound />},
    { label: "Games", href: "/games", icon: <Gamepad2 />},
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#242526] border-b border-border py-4">
      <div className="flex items-center gap-4 w-full mx-auto justify-between pr-4 pl-10 lg:pl-10">
        <Sheet>
        <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
        >
          <TableOfContents className="w-6 h-6 text-white" />
        </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-0 w-[320px] bg-black border-none flex flex-col"
        >
            <SheetTitle className="sr-only">Menu</SheetTitle>
          <div className="flex-1 overflow-y-auto">
          <SidebarMobile />
          </div>
        </SheetContent>
        </Sheet>
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center gap-2 cursor-pointer select-none text-2xl self-center font-bold"
        >
          <Image
            src={airbnbLogo}
            alt="Airbnb logo"
            className="object-contain mr-2"
            width={32}
            height={32}
          />
           <div className="hidden md:flex w-[240px] h-[40px]  items-center gap-2 rounded-full bg-[#3A3B3C] px-4">
            <Search className="w-4 h-4 shrink-0 text-[#B0B3B8]" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-[#B0B3B8]"
            />
           </div>
          </div>
        <div>

        {/* Menu navigation */}
        <ul className="items-stretch hidden gap-6 pr-35 lg:flex ">
          {menuItems.map(({ icon, href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={label} className="flex">
                <Link
                  href={href}
                  className={`flex items-center px-4 font-normal transition cursor-pointer ${
                    isActive
                      ? "font-bold text-primary-nav"
                      : "text-muted-foreground hover:text-[#FE6B6E]"
                  }`}
                >
                  {icon}
                </Link>
              </li>
            );
          })}
        </ul>
        </div>
        
        {/* Các nút bên phải */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="group rounded-full relative">
            <Bell className="h-5 w-5 text-white group-hover:text-black transition-colors" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-white  text-xs">
              93
            </Badge>
          </Button>

          <Button variant="ghost" size="icon" className="group rounded-full">
            <MessageCircle className="h-5 w-5 text-white group-hover:text-black transition-colors" />
          </Button>

          {/* Avatar + Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-1 cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={
                      userProfile?.avatar ? `${userProfile?.avatar}` : undefined
                    }
                    alt="User avatar"
                  />
                  <AvatarFallback className="bg-gray-500 text-white text-lg font-semibold">
                    {userProfile?.name?.trim()?.charAt(0).toUpperCase() || "?"}
                  </AvatarFallback>
                </Avatar>
                <ChevronDown className="h-4 w-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {!hasToken ? (
                <>
                  <DropdownMenuItem onClick={() => router.push("/login")}>
                    Login
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/register")}>
                    Register
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => router.push(`/profile/${userId}`)}
                    className="cursor-pointer"
                  >
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => router.push("/dashboard/edit")}
                    className="cursor-pointer"
                  >
                    Manage
                  </DropdownMenuItem>
                  {role === "admin" && (
                    <DropdownMenuItem
                      onClick={() => router.push("/dashboardAdmin")}
                      className="cursor-pointer"
                    >
                      To Page Admin
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("refreshToken");
                      setUserId(null);
                      setRole(null);
                      setHasToken(false);
                      router.replace("/login");
                    }}
                    className="cursor-pointer"
                  >
                    Đăng xuất
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
    
  );
}
