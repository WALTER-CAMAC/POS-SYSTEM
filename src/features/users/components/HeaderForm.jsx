import { Search, SlidersHorizontal } from "lucide-react";
export const HeaderForm = ({ handle, filt }) => {
  return (
    <div className="flex items-center justify-between gap-3 px-4 md:px-5 py-3 bg-(--color-surface) border-b border-(--color-border)">
      {/* Left: title + count badge */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-[13px] font-semibold text-(--color-text-primary)">
          All users
        </span>
      </div>

      {/* Right: search + filter */}
      <div className="flex items-center gap-2 min-w-0">
        <div className="relative">
          <Search
            size={12}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-(--color-text-secondary) opacity-60"
          />
          <input
            className="input pl-8 py-1.5 text-[12px] w-40 sm:w-50"
            type="text"
            placeholder="Search users…"
            onChange={handle}
            value={filt}
          />
        </div>
        <button className="flex items-center gap-1.5 shrink-0 px-2.5 py-1.5 border border-(--color-border) bg-(--color-bg-main) text-(--color-text-secondary) rounded-lg hover:text-(--color-text-primary) hover:shadow-(--shadow-custom) transition-all cursor-pointer text-[12px] font-medium">
          <SlidersHorizontal size={12} strokeWidth={1.8} />
          <span className="hidden sm:inline">Filter</span>
        </button>
      </div>
    </div>
  );
};
