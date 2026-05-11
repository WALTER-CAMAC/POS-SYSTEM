import { Edit, Trash2 } from "lucide-react";
import serviceUser from "../../../services/serviceUser";

export const Table = ({ filt, delet, toggle }) => {
  const deleteUser = (id) => {
    if (window.confirm("deseas eliminar a este usuario?")) {
      serviceUser.deleteUser(id).then(() => {
        delet(id);
      }).catch(error => {
        console.error("Error deleting user:", error);
      });
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-150">
        <thead>
          <tr className="border-b border-(--color-border) text-(--color-text-secondary) text-[11px] uppercase tracking-wider">
            <th className="py-3 px-4 md:px-5 font-semibold">User</th>
            <th className="py-3 px-3 md:px-4 font-semibold hidden sm:table-cell">
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {filt.map((val) => (
            <tr
              key={val.id}
              className="group border-b border-(--color-border) last:border-0 hover:bg-(--color-surface) transition-colors"
            >
              <td className="py-3 px-4 md:px-5">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-(--color-accent-bg) flex items-center justify-center text-(--color-accent) font-bold text-lg">
                    {val.name[0].toUpperCase()}
                  </div>
                  <span className="font-medium text-[13px] md:text-[14px] text-(--color-text-primary)">
                    {val.name}
                  </span>
                </div>
              </td>

              <td className="py-3 px-3 md:px-4 hidden sm:table-cell">
                <span className="text-[12px] md:text-[13px] font-mono text-(--color-text-secondary) bg-(--color-code-bg) px-2 py-0.5 rounded group-hover:text-(--color-text-primary) transition-colors">
                  {val.number}
                </span>
              </td>

              <td className="py-3 px-3 md:px-4 text-right">
                <div className="flex justify-end items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => toggle(val.id)}
                    className="p-1.5 rounded-md text-(--color-text-secondary) hover:text-(--color-accent) hover:bg-(--color-accent-bg) transition-colors cursor-pointer"
                  >
                    <Edit size={14} strokeWidth={2} />
                  </button>
                  <button
                    onClick={() => deleteUser(val.id)}
                    className="p-1.5 rounded-md text-(--color-text-secondary) hover:text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
                  >
                    <Trash2 size={14} strokeWidth={2} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
