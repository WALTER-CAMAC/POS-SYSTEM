import { Menu, Bell, MessageSquare, ChevronDown } from "lucide-react";
export const Header = ({ user }) => {
  return (
    <header className="h-14 shrink-0 flex items-center justify-between px-4 md:px-5 border-b border-(--color-border) bg-(--color-bg-main)">
      {/* Left: hamburger (mobile only) + date */}
      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button className="p-1.5 rounded-lg hover:bg-(--color-surface) text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors cursor-pointer md:hidden">
          <Menu size={18} strokeWidth={1.8} />
        </button>

        {/* Date — hidden on small mobile, visible md+ */}
        <span className="hidden sm:inline text-[13px] text-(--color-text-secondary)">
          October 26, 2024 | 10:30 AM
        </span>
      </div>

      {/* Right: icon actions + profile */}
      <div className="flex items-center gap-1.5">
        {/* Bell */}
        <button className="p-2 rounded-lg hover:bg-(--color-surface) text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors cursor-pointer">
          <Bell size={17} strokeWidth={1.8} />
        </button>

        {/* Message */}
        <button className="p-2 rounded-lg hover:bg-(--color-surface) text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors cursor-pointer relative">
          <MessageSquare size={17} strokeWidth={1.8} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500" />
        </button>

        {/* Profile chip */}
        <div className="flex items-center gap-2 pl-2 ml-0.5 border-l border-(--color-border) cursor-pointer">
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="Devoryn"
            className="w-7 h-7 rounded-full border border-(--color-border) object-cover"
          />
          <span className="hidden sm:inline text-[13px] font-medium text-(--color-text-primary)">
            {user?.name || user?.username || "Admin"}
          </span>
          <ChevronDown
            size={14}
            className="hidden sm:inline text-(--color-text-secondary)"
          />
        </div>
      </div>
    </header>
  );
};
