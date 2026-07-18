"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "總覽", href: "/", icon: "⌂" },
  { label: "活動管理", href: "/events", icon: "◆" },
  { label: "財務管理", href: "/finance", icon: "$" },
  { label: "聯絡人", href: "/contacts", icon: "◎" },
  { label: "行事曆", href: "/calendar", icon: "□" },
  { label: "檔案管理", href: "/files", icon: "▤" },
  { label: "系統設定", href: "/settings", icon: "⚙" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-60 flex-col border-r border-white/10 bg-[#0b0d10]/95 px-4 py-5 backdrop-blur-xl">
      <div className="flex items-center gap-3 px-2">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-black text-black">
          Y6
        </div>

        <div className="leading-tight">
          <div className="font-semibold text-white">Yu6iao</div>
          <div className="text-xs text-[#8d96a5]">活動管理系統</div>
        </div>
      </div>

      <nav className="mt-8 flex flex-col gap-1">
        {menu.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex h-11 items-center gap-3 rounded-xl px-3 text-sm transition",
                isActive
                  ? "bg-white/10 font-medium text-white"
                  : "text-[#8d96a5] hover:bg-white/5 hover:text-white",
              ].join(" ")}
            >
              <span className="grid h-6 w-6 place-items-center text-sm">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex items-center gap-3 rounded-xl px-2 py-3">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-sm font-semibold text-white">
          許
        </div>

        <div className="leading-tight">
          <div className="text-sm font-medium text-white">阿許</div>
          <div className="text-xs text-[#8d96a5]">Organizer</div>
        </div>
      </div>
    </aside>
  );
}