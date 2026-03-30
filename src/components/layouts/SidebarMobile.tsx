"use client";

import { Bookmark, CircleArrowDown, CircleHelp, CircleUserRound, Clapperboard, Clock, CreditCard, FileText, Flag, Heart, HeartHandshake, ImagePlay, Link, Lock, Newspaper, Plus, Shield, SmartphoneCharging, Store, TriangleAlert, UserRound, Users } from "lucide-react";
import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



export default function SidebarMobile() {
    
    const items  = [
     { icon: Users, label: "Nhóm", color: "#1877F2" },
    { icon: Clock, label: "Kỷ niệm",color: "#1877F2" },
    { icon: Bookmark, label: "Đã lưu",color: "#A222F3" },
    { icon: Clapperboard, label: "Thước phim",color: "#F56565" },
    { icon: Store, label: "Marketplace",color: "#1877F2" },
    { icon: UserRound, label: "Bạn bè",color: "#38B2AC" },
    { icon: Newspaper, label: "Bảng feed",color: "#1877F2" },
    { icon: Heart, label: "Hẹn hò", color: "#E53E3E" },
  ];

  const accordionItems = [
  {
    value: "help",
    trigger: "Trợ giúp và hổ trợ",
    items: [
      { icon: CircleHelp, label: "Trợ lý hỗ trợ Meta AI" },
      { icon: HeartHandshake, label: "Ủng hộ" },
      { icon: TriangleAlert, label: "Báo cáo vấn đề" },
      { icon: Shield, label: "An toàn" },
      { icon: FileText, label: "Điều khoản và chính sách" },
    ],
  },
  {
    value: "privacy",
    trigger: "Cài đặt quyền riêng tư",
    items: [
      { icon: CircleUserRound , label: "Cài đặt" },
      { icon: Lock , label: "Trung tâm quyền riêng tư" },
      { icon: Link , label: "lịch sử liên kết" },
      { icon: SmartphoneCharging , label: "Yêu cầu từ thiết bị" },
      { icon: ImagePlay , label: "Hoạt động mới đây với quảng cáo" },
      { icon: CreditCard , label: "Đơn đặt hàng và thanh toán" },
    ],
  },
  {
  value: "professional",
  trigger: "Quyền truy cập chuyên nghiệp",
  card: {
    title: "Sự hiện diện công khai",
    description: "Nhận các công cụ hỗ trợ bạn phát triển trên Facebook",
    image: "https://i.pravatar.cc/150?img=12"
  }
},
  {
    value: "Meta",
    trigger: "Cũng từ Meta",
    items: [
      { icon: CircleHelp, label: "Vibes",color: "#A222F3"},
      { icon: HeartHandshake, label: "Meta AI" },
      { icon: TriangleAlert, label: "Edits" },
      { icon: Shield, label: "Threads" },
      { icon: FileText, label: "Instagram" },
      { icon: FileText, label: "WhatsApp" },
    ],
  },
]

  return (
    <>
    <div className="flex flex-col px-4 pt-10 pb-60"> 
        <Card className="rounded-lg bg-[#6F6F70]"> 
            <div className="flex items-center justify-between px-5 pt-5 border-b border-white pb-4">
                <div className="flex items-center gap-3 ">
                    <Image
                        src="https://i.pravatar.cc/150?img=3"
                        alt="avatar"
                        width={30}
                        height={30}
                        className="rounded-full "
                        />
                        <span className="text-white">Khắc Phạm</span>
                </div>
                <div>
                    <CircleArrowDown className="text-white"/>
                </div>
            </div>
            <div className="flex items-center gap-2 px-5 pb-3">
                <div>
                    <Plus />
                </div>
                <div>
                    <span className="text-white">Tạo trang Facebook</span>
                </div>
            </div>
        </Card>
        <div className="mt-4">
            <div>
                <h3 className="text-white">Lối tắt của bạn</h3>
            </div>
            <div className="flex flex-col items-start">
                <Card className="relative w-[80px] h-[80px] bg-black flex items-center justify-center">
                    <Image
                        src="https://i.pravatar.cc/150?img=3"
                        alt="avatar"
                        width={50}
                        height={50}
                        className="rounded-lg"/>
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <span className="text-red-700 text-xl font-bold"><Flag/></span>
                    </div>  
                </Card>
                <span className="text-white mt-2 ml-2">Khắc Phạm</span>
            </div>
        </div>
        <div className="mt-4">
            <div className="grid grid-cols-2 gap-3">
                {items.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-[#151617] border rounded-xl shadow-sm hover:bg-gray-50 cursor-pointer"
                    >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg ">
                        <Icon 
                        className="w-5 h-5"
                        style={{ color: item.color }} 
                        />
                    </div>
                    <span className="text-sm font-medium text-[#E6E7E8]">
                        {item.label}
                    </span>
                    </div>
                );
                })}
            </div>
            <div className="mt-3">
                <Button variant="outline" className="w-full bg-[#151617] border border-gray-500 text-white ">
                    Xem thêm
                </Button>
            </div>
        </div>
        <div className="mt-4">
            <Accordion
                type="multiple"
                className="max-w-lg"
                defaultValue={["notifications"]}
                >
                {accordionItems.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="text-white">{item.trigger}</AccordionTrigger>
                    <AccordionContent className="text-white space-y-2">
                        {item.card &&(
                            <Card className="overflow-hidden bg-[#151617] border-none rounded-xl w-[200px] h-[200px]">
                                <div className="relative w-full h-1/2">
                                    <Image
                                    src={item.card.image}
                                    alt="professional"
                                    fill
                                    className="object-cover"
                                    />
                                </div>
                                <a href='#' className="relative h-1/2 px-3 pt-2 pb-3">                                                                                                                                                                                                                                                            
                                    <div className="absolute -top-5 left-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                                    <Users className="w-5 h-5 text-blue-500"/>
                                    </div>

                                    <div className="mt-4">
                                    <p className="text-sm font-semibold text-white">
                                        {item.card.title}
                                    </p>

                                    <p className="text-xs text-gray-400">
                                        {item.card.description}
                                    </p>
                                    </div>
                                </a>
                            </Card>
                        )}
                        {item.items?.map((sub, index) => {
                        const Icon = sub.icon;

                        return (
                            <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-[#151617] rounded-xl hover:bg-[#2A2B2C] cursor-pointer"
                            >
                            <Icon className="w-5 h-5 text-gray-300" style={{ color: sub.color }}  />
                            <span className="text-white text-sm">
                                {sub.label}
                            </span>
                            </div>
                        );
                        })}
                    </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
         <div className="mt-4">
                <Button variant="outline" className="w-full bg-[#151617] border border-gray-500 text-white ">
                    Đăng xuất
                </Button>
            </div>
    </div>

    </>
  );
}
