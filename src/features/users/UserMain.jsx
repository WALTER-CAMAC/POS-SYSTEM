import { useEffect, useState } from "react";
import { Cards } from "./components/Cards";
import { HeaderForm } from "./components/HeaderForm";
import ModalAddUser from "./modals/ModalAddUser";
import { Table } from "./components/Table";
import { HeaderUsers } from "./components/HeaderUsers";
import serviceUser from "../../services/serviceUser";
import ModalEditUser from "./modals/ModalEditUser";
import { UseToggle } from "../../hooks/UseToggle";
import { useDispatch } from "react-redux";
import { setCount } from "../redux/countUser";
export const UserMain = () => {
  const [isOpen, setIsOpen] = useState(0);
  const [persons, setPersons] = useState([]);

  const dispatch = useDispatch();
  const [selecterUser, setSelecterUser] = useState(null);
  useEffect(() => {
    serviceUser.getAll().then((resp) => {
      setPersons(resp);
      dispatch(setCount(resp));
    });
  }, [dispatch]);

  const [filters, setFilters] = useState("");
  const handleFilter = (event) => {
    setFilters(event.target.value);
  };
  const filt = persons.filter((val) =>
    val.name.toLowerCase().includes(filters.toLowerCase()),
  );
  const onUserAdd = (newPerson) => {
    setPersons([...persons, newPerson]);
  };
  const onUserPut = (modify) => {
    setPersons(persons.map((p) => (p.id === modify.id ? modify : p)));
  };
  const delPerson = (id) => {
    setPersons((prev) => prev.filter((val) => val.id !== id));
  };
  const ids = (id) => {
    const filter = persons.find((val) => val.id === id);
    setSelecterUser(filter);
    setIsOpen(2);
  };
  console.log(selecterUser);

  return (
    <div className="flex-1 overflow-auto px-4 md:px-5 lg:px-6 py-4 md:py-5">
      <HeaderUsers toggle={() => setIsOpen(1)} />
      <Cards />
      {/* ── Table card ── */}
      <div className="border border-(--color-border) rounded-xl overflow-hidden bg-(--color-bg-main) shadow-(--shadow-custom)">
        <HeaderForm handle={handleFilter} filt={filters} />
        <Table filt={filt} delet={delPerson} toggle={ids} />
      </div>

      {isOpen === 1 && (
        <ModalAddUser
          existingNames={persons.map((p) => p.name)}
          onUserAdd={onUserAdd}
          toggle={() => setIsOpen(0)}
        />
      )}
      {isOpen === 2 && (
        <ModalEditUser
          toggle={() => setIsOpen(0)}
          data={selecterUser}
          modify={onUserPut}
        />
      )}
    </div>
  );
};
