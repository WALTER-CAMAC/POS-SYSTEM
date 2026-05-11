import { X, Save } from "lucide-react";
import { useState } from "react";
import serviceUser from "../../../services/serviceUser";

export const ModalEditUser = ({ toggle, data, modify }) => {
  const [modifyName, setmodifyName] = useState(data.name);
  const [modifyNumber, setmodifyNumber] = useState(data.number);
  console.log(data);
  const hanldeIputName = (event) => {
    setmodifyName(event.target.value);
  };
  const handleInputNumber = (event) => {
    setmodifyNumber(event.target.value);
  };
  const modifyUser = (event) => {
    event.preventDefault();
    const newUser = {
      name: modifyName,
      number: modifyNumber,
    };

    if (window.confirm("¿Estás seguro que quieres modificar este usuario?")) {
      serviceUser.putUser(data.id, newUser).then((response) => {
        modify(response);
        toggle(); // Cierra el modal
      }).catch(error => {
        console.error("Error al modificar usuario:", error);
      });
    }
  };
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
        onClick={toggle}
      />

      {/* Modal wrapper */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-edit-title"
        onClick={toggle}
      >
        <form
          onSubmit={modifyUser}
          className="w-full max-w-100 rounded-xl border border-(--color-border) bg-(--color-bg-main) flex flex-col shadow-[0_20px_40px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.08)] font-sans"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ══ HEADER ══ */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-(--color-border) bg-(--color-surface)">
            <div className="flex items-center gap-2">
              {/* Avatar mini */}
              <div className="w-10 h-10 shrink-0 rounded-full bg-(--color-accent-bg) flex items-center justify-center text-(--color-accent) font-bold text-lg">
                {/* {val.name[0].toUpperCase()} */}
              </div>
              <span
                id="modal-edit-title"
                className="text-[13px] font-semibold text-(--color-text-primary) tracking-tight"
              >
                Edit User
              </span>
              <span
                id="modal-edit-title"
                className="text-[13px] font-semibold text-(--color-text-primary) tracking-tight"
              >
                {/* Edit · {user.name} */}
              </span>
            </div>

            <button
              type="button"
              onClick={toggle}
              className="flex items-center justify-center w-6 h-6 rounded-md text-(--color-text-secondary) hover:bg-(--color-border) hover:text-(--color-text-primary) transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={13} strokeWidth={2} />
            </button>
          </div>

          {/* ══ BODY ══ */}
          <div className="flex flex-col gap-3 px-4 py-4">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="edit-name"
                className="text-[12px] font-medium text-(--color-text-secondary)"
              >
                Full name
              </label>
              <input
                type="text"
                className="input text-[13px]! py-1.5"
                value={modifyName}
                onChange={hanldeIputName}
              />
            </div>

            {/* number */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="edit-email"
                className="text-[12px] font-medium text-(--color-text-secondary)"
              >
                Number
              </label>
              <input
                onChange={handleInputNumber}
                type="text"
                className="input text-[13px] py-1.5"
                value={modifyNumber}
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-(--color-border) -mx-4" />
          </div>

          {/* ══ FOOTER ══ */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-(--color-border) bg-(--color-surface)">
            {/* Left hint */}
            <span className="text-[11px] text-(--color-text-secondary) opacity-60">
              Changes apply immediately
            </span>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggle}
                className="px-3 py-1.5 rounded-lg text-[12px] font-medium text-(--color-text-secondary) border border-(--color-border) hover:bg-(--color-border) hover:text-(--color-text-primary) transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary mb-0! w-auto! px-3! py-1.5! text-[12px]! gap-1.5!"
              >
                <Save size={12} strokeWidth={2.2} />
                Save changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalEditUser;
