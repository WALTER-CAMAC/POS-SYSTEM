import { UserPlus } from "lucide-react";
export const HeaderUsers = ({ toggle }) => {
  return (
    <div className="flex items-center justify-between gap-3 mb-4 min-w-0">
      <h1 className="m-0 text-[20px] md:text-[22px] tracking-tight font-semibold shrink-0">
        Users
      </h1>
      <button
        onClick={toggle}
        className="btn-primary mb-0 w-auto shrink-0 px-3 py-1.5 gap-1.5 text-[13px]"
      >
        <UserPlus size={13} strokeWidth={2} className="shrink-0" />
        <span className="hidden sm:inline">Add user</span>
      </button>
    </div>
  );
};
