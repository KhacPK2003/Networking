"use client";

import { Ellipsis, Gift, Search } from "lucide-react";
import Image from "next/image"
import { Button } from "../ui/button";
const contacts = [
  { 
    id: 1, 
    name: "Meta AI", 
    img: "https://i.pravatar.cc/150?u=meta_ai", 
    status: "online", 
    isBlueTick: true 
  },
  { 
    id: 2, 
    name: "Vân Nguyễn", 
    img: "https://i.pravatar.cc/150?u=van_nguyen", 
    time: "30 phút" 
  },
  { 
    id: 3, 
    name: "Nguyễn Minh Huy", 
    img: "https://i.pravatar.cc/150?u=minh_huy" 
  },
  { 
    id: 4, 
    name: "Hà My", 
    img: "https://i.pravatar.cc/150?u=ha_my" 
  },
  { 
    id: 5, 
    name: "Nguyễn Tấn Khôi", 
    img: "https://i.pravatar.cc/150?u=tan_khoi", 
    time: "1 giờ" 
  },
  { 
    id: 6, 
    name: "Việt Trung", 
    img: "https://i.pravatar.cc/150?u=viet_trung", 
    status: "online" 
  },
];

const friendRequests = [
  {
    id: 1,
    name: "Nguyễn Văn B",
    avatar: "https://i.pravatar.cc/150?img=3",
    followers: 881,
    time: "5 ngày",
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
    avatar: "https://i.pravatar.cc/150?img=5",
    followers: 320,
    time: "2 ngày",
  },
];

export default function RightSidebar() {
  return (
    <div className=" bg-[#0F1112] h-screen overflow-y-auto">
      <div className="flex-col w-full p-4 space-y-5">

        <div className=" border-b border-white pb-3">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[#B0B3B8] text-lg font-bold">Lời mời kết bạn</span>
            <button className="ml-2 text-sm text-blue-500">Xem tất cả</button>
          </div>
          
          <div className="flex flex-col gap-3">
            {friendRequests.map((friend) => (
          <a key={friend.id} href="#" className="">
            <div className="flex mt-3">
            <div className="w-[60px] h-[60px] flex-shrink-0">
              <Image
                  src={friend.avatar}
                  alt="avatar"
                  width={60}
                  height={60}
                  className="w-full h-full rounded-full object-cover"
                />
            </div>
            <div className="w-full  ml-4">
              <div className="flex justify-between text-white">
                <span className="text-[18px] font-bold">{friend.name}</span>
                <span className="font-thin">{friend.time}</span>
              </div>
              <div>
                <span className="text-white font-thin">Có {friend.followers} người theo dõi</span>
              </div>
              <div className="flex space-x-2 mt-2">
                <Button size="sm" className="mr-2 w-[120px] h-[36px] bg-[#0866FF] text-white hover:bg-[#0866FF]/90">
                  Chấp nhận
                </Button>
                <Button size="sm" className="w-[120px] h-[36px] bg-[#FFFFFF1A] text-white hover:bg-[#FFFFFF1A]/90">
                  Xóa
                </Button>
              </div>
            </div>
            </div>
          </a>
          ))}
          </div>
        </div>

        <div className=" border-b border-white pb-3" >
          <span className="text-[#B0B3B8] text-lg font-bold">Sinh nhật</span>
          <div className="flex items-center gap-3 mt-3">
            <Gift className="text-white"/>
            <span className="text-white">Hôm nay là sinh nhật của <span className="font-bold">Khắc</span></span>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <div className="flex justify-between p-4">
          <span className="text-[#B0B3B8] text-lg font-bold">Người liên hệ</span>
          <div className="flex space-x-2 text-white">
            <Search />
            <Ellipsis />
          </div>
        </div>
        <div>
          <ul className="px-2 pd-4">
            {contacts.map((user)=>(
              <li key={user.id} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-zinc-800 cursor-pointer transition-colors duration-200">
                <div className="relative w-[36px] h-[36px]">
                  <Image
                    src={user.img}
                    alt={user.name}
                    width={36}
                    height={36}
                    className="w-full h-full rounded-full object-cover"
                  />
                  {user.status === "online" && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0F1112] rounded-full"></span>
                  )}
                </div>
                {/* Name + time */}
                <div className="flex flex-col">
                  <span className="text-white text-sm font-medium">{user.name}</span>

                  {user.time && (
                    <span className="text-xs text-green-400">{user.time}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
