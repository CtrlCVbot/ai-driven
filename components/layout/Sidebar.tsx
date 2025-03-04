"use client"
import Link from "next/link";
import {
  HomeIcon,
  ListIcon,
  Package2Icon,
  LineChartIcon,
  MapIcon,
  UserIcon,
  Settings2Icon,
  TruckIcon,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="hidden w-[240px] flex-col bg-[#171717] text-gray-300 lg:flex">
      <div className="p-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-white">
          <TruckIcon className="h-5 w-5" />
          <span>와이엘피(본사)</span>
        </Link>
      </div>
      <div className="px-2 py-2 text-xs font-medium text-gray-400">MANAGE</div>
      <nav className="flex-1 space-y-1 px-2">
        {[ 
          { icon: HomeIcon, label: "메인", href: "/" },
          { icon: ListIcon, label: "화물 조회", href: "/list", active: true },
          { icon: Package2Icon, label: "화물 등록", href: "./cargo", active: true },
          { icon: LineChartIcon, label: "통계", href: "#" },
          { icon: MapIcon, label: "정산", href: "#" },
          { icon: UserIcon, label: "주소록", href: "#" },
          { icon: Settings2Icon, label: "환경설정", href: "#" },
        ].map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
              item.active ? "bg-[#404040] text-white" : "hover:bg-[#262626] hover:text-white"
            }`}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
} 