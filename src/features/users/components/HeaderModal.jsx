import React from "react";
import { X, UserPlus } from "lucide-react";
export const HeaderModal = ({ toggle }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-(--color-border) bg-(--color-surface)">
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-(--color-accent-bg) border border-(--color-accent-border)">
          <UserPlus
            size={12}
            strokeWidth={2.2}
            className="text-(--color-accent)"
          />
        </span>
        <span
          id="modal-add-title"
          className="text-[13px] font-semibold text-(--color-text-primary) tracking-tight"
        >
          Add user
        </span>
      </div>

      <button
        type="button"
        onClick={toggle}
        className="flex items-center justify-center w-6 h-6 rounded-md text-(--color-text-secondary) hover:bg-(--color-border) hover:text-(--color-text-primary) transition-colors cursor-pointer"
      >
        <X size={13} strokeWidth={2} />
      </button>
    </div>
  );
};
