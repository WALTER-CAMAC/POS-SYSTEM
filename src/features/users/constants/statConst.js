import { Users, UserCheck, UserX, Clock } from "lucide-react";

export const statConst = [
  {
    label: "Total Users",
    value: 0,
    icon: Users,
    color: "text-[var(--color-accent)]",
    bg: "bg-[var(--color-accent-bg)]",
    border: "border-[var(--color-accent-border)]",
    trend: "+2 this week",
    trendUp: true,
  },
  {
    label: "Active",
    value: "a",
    icon: UserCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    trend: `% of total`,
    trendUp: true,
  },
  {
    label: "Inactive",
    value: "i",
    icon: UserX,
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    trend: `% of total`,
    trendUp: false,
  },
  {
    label: "Pending",
    value: "p",
    icon: Clock,
    color: "text-yellow-600",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    trend: "Awaiting review",
    trendUp: null,
  },
];
