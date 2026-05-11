import React, { useState } from "react";
import {
  Home,
  Users,
  BarChart2,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
const nav = [
  { icon: Home, label: "Dashboard" },
  { icon: Users, label: "Users", active: true },
  { icon: BarChart2, label: "Analytics" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

export const Sidebar = ({ user, handleLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <aside
      className={[
        "shrink-0 flex flex-col justify-between border-r border-(--color-border) bg-(--color-bg-main) transition-transform duration-300",
        "fixed inset-y-0 left-0 z-40 w-52.5",
        sidebarOpen ? "translate-x-0" : "-translate-x-full",
        "md:static md:translate-x-0 md:w-16",
        "lg:w-52.5",
      ].join(" ")}
    >
      <div>
        <div className="flex flex-col items-center gap-2 py-5 border-b border-(--color-border)">
          <div className="w-10 h-10 rounded-xl bg-(--color-accent-bg) border border-(--color-accent-border) flex items-center justify-center text-(--color-accent) font-bold text-lg">
            A
          </div>
          <span className="text-[11px] font-bold tracking-[0.16em] text-(--color-text-secondary) uppercase md:hidden lg:block">
            Admin Panel
          </span>
        </div>

        {/* --- EL ERROR ESTABA AQUÍ --- */}
        <nav className="flex flex-col gap-px px-2 py-4">
          {nav.map(({ icon: Icon, label, active }) => (
            <a
              key={label}
              href="#"
              title={label}
              onClick={() => setSidebarOpen(false)}
              className={[
                "flex items-center gap-3 px-2 py-2.5 rounded-lg text-[14px] font-medium transition-colors no-underline",
                "md:justify-center lg:justify-start md:px-2 lg:px-3",
                active
                  ? "bg-(--color-accent-bg) text-(--color-accent) border border-(--color-accent-border)"
                  : "text-(--color-text-secondary) hover:bg-(--color-surface) hover:text-(--color-text-primary)",
              ].join(" ")}
            >
              {/* Ahora 'Icon' existe y empieza con mayúscula para que React lo reconozca como componente */}
              <Icon
                size={17}
                strokeWidth={active ? 2.5 : 1.8}
                className="shrink-0"
              />
              <span className="md:hidden lg:inline">{label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Perfil y Logout */}
      <div className="flex flex-col gap-1 px-2 pb-4 pt-4 border-t border-(--color-border)">
        <div className="flex items-center gap-3 px-2 py-2.5 rounded-lg bg-(--color-surface) md:justify-center lg:justify-start">
          <div className="relative shrink-0">
            <img
              src="https://i.pravatar.cc/150?img=11"
              alt="Devoryn"
              className="w-7 h-7 rounded-full border border-(--color-border) object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border-2 border-(--color-surface)" />
          </div>
          <span className="text-[13px] font-medium text-(--color-text-primary) md:hidden lg:inline">
            {user?.name || user?.username || "Admin"}
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-[14px] text-(--color-text-secondary) hover:bg-(--color-surface) hover:text-(--color-text-primary) transition-colors no-underline md:justify-center lg:justify-start w-full cursor-pointer border-none bg-transparent"
        >
          <LogOut size={16} strokeWidth={1.8} className="shrink-0" />
          <span className="md:hidden lg:inline">Logout</span>
        </button>
      </div>
    </aside>
  );
};
