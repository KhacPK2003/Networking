"use client";

import { BookImage, Bookmark, BookOpen, Boxes, Calendar1, Circle, CircleChevronDown, CircleChevronUp, CreditCard, DatabaseZap, Dice4, Film, Gamepad2, Gift, Handshake, MessageCircleMore, Radio, Store } from "lucide-react";
import Image from "next/image"
import { useState } from "react";
import SidebarFooter from "./SidebarFooter";


export default function SidebarDesktop() {

  const [showMore, setShowMore] = useState(false);
  const [showShortcutMore, setShowShortcutMore] = useState(false);

  const defaultItems = [
  { icon: Circle, label: "Meta AI" },
  { icon: Handshake, label: "Bạn bè" },
  { icon: DatabaseZap, label: "Kỷ niệm" },
  { icon: Bookmark, label: "Đã lưu" },
  { icon: Boxes, label: "Nhóm" },
  { icon: Film, label: "Thước phim" },
  { icon: Store, label: "Marketing" },
  ];

  const defaultAvatar = [
    { label: "Khắc Phạm", avatar: true, src: "/favicon.ico" },
  ];

  const moreItems = [
    { icon: Gamepad2, label: "Chơi game" },
    { icon: CreditCard , label: "Đơn đặt hàng và thanh toán" },
    { icon: BookImage , label: "Sự kiện" },
    { icon: Gift  , label: "Sinh nhật" },
    { icon: Radio  , label: "Hoạt động gần đây" },
    { icon: MessageCircleMore , label: "Messages" },
    { icon: BookOpen , label: "Trang" },
    { icon: Dice4  , label: "Video chơi game" },
  ];

 const shortcuts = [
  {
    name: "CỘNG ĐỒNG TỰ HỌC PIANO",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "IT Jobs - Tuyển Dụng IT - Việc làm CNTT - AI engineer",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Mua Bán, Thanh Lý Đàn Piano, Organ, Nhạc Cụ Giá Rẻ",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Tiến Lên Miền Nam",
    avatar: "https://i.pravatar.cc/150?img=18",
  },
  {
    name: "Kiến Thức kỳ quái này đã được tiếp thu!",
    avatar: "https://i.pravatar.cc/150?img=47",
  },

  
];

  return (
    <div className="h-screen bg-black p-4 overflow-y-auto scrollbar-hide">
      <ul className="w-75 text-white p-4 space-y-1">
        {defaultAvatar.map((item1, index) => (
          <li key={index} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-zinc-800 cursor-pointer transition-colors duration-200">
            <Image
              src="https://i.pravatar.cc/150?img=3"
              alt="avatar"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span>{item1.label}</span>
          </li>
        ))}
        {defaultItems.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-zinc-800 cursor-pointer transition-colors duration-200"
        >
          <item.icon className="w-6 h-6" />
          <span>{item.label}</span>
        </li>
      ))}
      {/* button Xem thêm */}
      <div className="border-b border-zinc-700 pb-2">
       <div className={`overflow-hidden transition-all duration-300 ${showMore? "max-h-96" : "max-h-0"}`}>
          {moreItems.map((item, index) =>(
            <li key={index}
            className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-zinc-800 cursor-pointer">
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </li>
          ))}
        </div>
         <li 
      onClick={() => setShowMore(!showMore)} 
      className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-zinc-800 cursor-pointer"
      >
        {showMore ? (
          <CircleChevronUp className="w-6 h-6" />
        ): (
          <CircleChevronDown className="w-6 h-6" />
        )}
        <span>{showMore ? "Ẩn bớt" : "Xem thêm"}</span>
      </li>
      </div>
      </ul>

      <div className="flex flex-col w-full ">
        <div className="flex justify-between">
          <p className="text-white">Lối tắt của bạn</p>
          <p className="text-white">Chỉnh sửa</p>
        </div>

        <ul className="w-[300px] text-white p-4 space-y-1">
        
        {shortcuts.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-zinc-800 cursor-pointer transition-colors duration-200"
        >
          <Image
            src={item.avatar}
            alt={item.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span>{item.name}</span>
        </li>
      ))}
      </ul>
      </div>
      <div className="pt-4 pb-13">
        <SidebarFooter />
      </div>
    </div>
  );
}
