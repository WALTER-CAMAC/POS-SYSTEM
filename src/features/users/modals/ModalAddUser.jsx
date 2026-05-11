import { X, UserPlus } from "lucide-react";
import { HeaderModal } from "../components/HeaderModal";
import { useState } from "react";
import serviceUser from "../../../services/serviceUser";

export const ModalAddUser = ({ toggle, existingNames, onUserAdd }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleInputName = (event) => {
    setNewName(event.target.value);
  };
  const handleInputNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const addNewPerson = (event) => {
    event.preventDefault();
    const addName = {
      name: newName,
      number: newNumber,
    };
    const iniquePerson = existingNames.some(
      (name) => name.trim().toLowerCase() === newName.trim().toLowerCase(),
    );
    if (iniquePerson) {
      setNewName("");
      setNewNumber("");
      return alert(`${newName} is already added to phonebook`);
    }
    serviceUser.postUser(addName).then((response) => {
      onUserAdd(response);
      setNewName("");
      setNewNumber("");
      toggle();
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
        onClick={toggle}
      />
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-add-title"
        onClick={toggle}
      >
        <form
          onSubmit={addNewPerson}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-100 rounded-xl border border-(--color-border) bg-(--color-bg-main) flex flex-col font-sans shadow-[0_20px_40px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.08)]"
        >
          {/* ── Header ── */}
          <HeaderModal toggle={toggle} />
          {/* ── Body ── */}
          <div className="flex flex-col gap-3 px-4 py-4">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-medium text-(--color-text-secondary)">
                Full name
              </label>
              <input
                type="text"
                placeholder="e.g. Alex Martínez"
                className="input py-1.5 text-[13px] placeholder:opacity-40"
                onChange={handleInputName}
                value={newName}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="add-email"
                className="text-[12px] font-medium text-(--color-text-secondary)"
              >
                Phone
              </label>
              <input
                type="text"
                placeholder="981028841"
                className="input py-1.5 text-[13px] placeholder:opacity-40"
                onChange={handleInputNumber}
                value={newNumber}
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-(--color-border) bg-(--color-surface)">
            <button
              type="button"
              onClick={toggle}
              className="px-3 py-1.5 rounded-lg text-[12px] font-medium text-(--color-text-secondary) border border-(--color-border) hover:bg-(--color-border) hover:text-(--color-text-primary) transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary m-0 w-auto px-3 py-1.5 text-[12px] gap-1.5"
            >
              <UserPlus size={12} strokeWidth={2.2} />
              Add user
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalAddUser;
