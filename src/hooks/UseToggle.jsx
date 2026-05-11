import { useState } from "react";

export const UseToggle = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);

  // Si isOpen es true, el botón de "Abrir" se oculta (none)
  const hideWhenVisible = { display: isOpen ? "none" : "" };

  // Si isOpen es true, el contenido se muestra ("")
  const showWhenVisible = { display: isOpen ? "" : "none" };

  const toggle = () => setisOpen(!isOpen);

  return (
    <div>
      {/* SECCIÓN CERRADA: Solo muestra el botón para abrir */}
      <div style={hideWhenVisible}>
        <button onClick={toggle}>Open Form</button>
      </div>

      {/* SECCIÓN ABIERTA: Muestra el contenido y el botón para cerrar */}
      <div style={showWhenVisible}>
        {children}
        <button onClick={toggle} className="mt-2 text-red-500">
          Cancel / Close
        </button>
      </div>
    </div>
  );
};
