import React from "react";
import { TrendingUp } from "lucide-react";
import { useSelector } from "react-redux"; // No olvides importar esto
import { statConst } from "../constants/StatConst";

export const Cards = () => {
  // 1. El Hook va AQUÍ (al principio), no dentro del map
  const students = useSelector((state) => state.students);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
      {statConst.map(
        ({ label, value, icon: Icon, color, bg, border, trend, trendUp }) => {
          // 2. Aquí completamos la lógica de qué mostrar
          // Comparamos el label para decidir si mostramos el length de Redux
          const displayValue =
            label === "Total Users" ? students.length : value;

          return (
            <div
              key={label}
              className="flex flex-col gap-2.5 p-3.5 md:p-4 rounded-xl border border-(--color-border) bg-(--color-bg-main) transition-all hover:bg-(--color-surface)"
              style={{ boxShadow: "var(--shadow-custom)" }}
            >
              {/* Icon + label */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-(--color-text-secondary)">
                  {label}
                </span>
                <span className={`p-1.5 rounded-lg border ${bg} ${border}`}>
                  {Icon && <Icon size={14} strokeWidth={2} className={color} />}
                </span>
              </div>

              {/* Value - Usamos la variable displayValue que calculamos arriba */}
              <span
                className={`text-[28px] md:text-[32px] font-bold leading-none tracking-tight ${color}`}
              >
                {displayValue}
              </span>

              {/* Trend */}
              <div className="flex items-center gap-1">
                {trendUp !== null && (
                  <TrendingUp
                    size={11}
                    strokeWidth={2}
                    className={
                      trendUp ? "text-emerald-500" : "text-red-400 rotate-180"
                    }
                  />
                )}
                <span className="text-[10px] md:text-[11px] text-(--color-text-secondary)">
                  {trend}
                </span>
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};
