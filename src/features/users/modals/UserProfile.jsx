import {
  Mail, Shield, Clock, Calendar, Edit,
  ChevronLeft, Activity, LogOut, UserX, Key,
  CheckCircle, XCircle, AlertCircle,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────
   Mock user — swap with real prop when logic is wired up
────────────────────────────────────────────────────────────────── */
const MOCK_USER = {
  name:       "Devoryn",
  email:      "devoryn@gmail.com",
  role:       "Admin",
  status:     "Active",
  avatar:     "https://i.pravatar.cc/150?img=11",
  joinedDate: "Jan 12, 2024",
  lastLogin:  "Oct 26, 2024 · 10:15 AM",
  location:   "Madrid, España",
  sessions:   3,
  activity: [
    { label: "Total logins",    value: "248",  icon: Activity },
    { label: "Actions taken",   value: "1 032", icon: CheckCircle },
    { label: "Reports created", value: "19",   icon: Calendar },
    { label: "Failed logins",   value: "2",    icon: XCircle },
  ],
  recentActivity: [
    { action: "Updated user sarah.k@gmail.com",   time: "2 hours ago",   type: "edit"   },
    { action: "Exported users report",             time: "5 hours ago",   type: "export" },
    { action: "Added user bund@gmail.com",         time: "Yesterday",     type: "add"    },
    { action: "Changed system settings",           time: "2 days ago",    type: "settings"},
    { action: "Deleted inactive user session",     time: "3 days ago",    type: "delete" },
  ],
};

const statusConfig = {
  Active:   { label: "Active",   cls: "text-emerald-600 bg-emerald-500/10 border-emerald-500/30" },
  Inactive: { label: "Inactive", cls: "text-red-500 bg-red-500/10 border-red-500/30"             },
  Pending:  { label: "Pending",  cls: "text-yellow-600 bg-yellow-500/10 border-yellow-500/30"    },
};

const activityDot = {
  edit:     "bg-[var(--color-accent)]",
  export:   "bg-emerald-500",
  add:      "bg-emerald-500",
  settings: "bg-yellow-500",
  delete:   "bg-red-400",
};

/* ──────────────────────────────────────────────────────────────────
   Component
────────────────────────────────────────────────────────────────── */
export const UserProfile = ({ user = MOCK_USER, onBack }) => {
  const { label: statusLabel, cls: statusCls } = statusConfig[user.status] ?? statusConfig.Active;

  return (
    <div
      className="min-h-screen bg-[var(--color-bg-main)]"
      style={{ fontFamily: "var(--font-sans)" }}
    >

      {/* ── Top bar ── */}
      <header className="h-13 flex items-center justify-between px-5 border-b border-[var(--color-border)] bg-[var(--color-bg-main)]">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
        >
          <ChevronLeft size={14} strokeWidth={2} />
          Back to users
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 border border-[var(--color-border)] bg-[var(--color-surface)] text-[12px] font-medium text-[var(--color-text-secondary)] rounded-lg hover:text-[var(--color-text-primary)] hover:shadow-[var(--shadow-custom)] transition-all cursor-pointer"
            style={{ paddingTop: "5px", paddingBottom: "5px" }}
          >
            <Edit size={12} strokeWidth={2} />
            Edit
          </button>
          <button
            type="button"
            className="btn-primary mb-0! w-auto! text-[12px]! gap-1.5!"
            style={{ paddingTop: "5px", paddingBottom: "5px" }}
          >
            <Key size={12} strokeWidth={2} />
            Reset password
          </button>
        </div>
      </header>

      {/* ── Content ── */}
      <div className="max-w-[860px] mx-auto px-5 py-8 flex flex-col gap-5">

        {/* ═══════════ PROFILE CARD ═══════════ */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-main)]" style={{ boxShadow: "var(--shadow-custom)" }}>
          {/* Avatar */}
          <div className="relative shrink-0">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-xl border border-[var(--color-border)] object-cover"
            />
            {/* Online dot */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[var(--color-bg-main)]" />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0 flex flex-col gap-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-[16px] font-semibold text-[var(--color-text-primary)] tracking-tight">
                {user.name}
              </span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${statusCls}`}>
                {statusLabel}
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium border border-[var(--color-accent-border)] bg-[var(--color-accent-bg)] text-[var(--color-accent)]">
                {user.role}
              </span>
            </div>
            <span className="text-[12px] font-mono text-[var(--color-text-secondary)]">
              {user.email}
            </span>
          </div>

          {/* Meta: joined / last login */}
          <div className="flex flex-row sm:flex-col gap-4 sm:gap-1.5 text-right sm:shrink-0">
            <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-secondary)]">
              <Calendar size={11} strokeWidth={1.8} className="shrink-0" />
              Joined {user.joinedDate}
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-secondary)]">
              <Clock size={11} strokeWidth={1.8} className="shrink-0" />
              {user.lastLogin}
            </div>
          </div>
        </div>

        {/* ═══════════ STAT CARDS ═══════════ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {user.activity.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col gap-2 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-main)] hover:bg-[var(--color-surface)] transition-colors"
              style={{ boxShadow: "var(--shadow-custom)" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
                  {label}
                </span>
                <span className="p-1 rounded-md bg-[var(--color-accent-bg)] border border-[var(--color-accent-border)]">
                  <Icon size={12} strokeWidth={2} className="text-[var(--color-accent)]" />
                </span>
              </div>
              <span className="text-[26px] font-bold leading-none tracking-tight text-[var(--color-text-primary)]">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* ═══════════ TWO COLUMN: details + activity ═══════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-5">

          {/* ── Account details ── */}
          <div
            className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-main)] overflow-hidden"
            style={{ boxShadow: "var(--shadow-custom)" }}
          >
            {/* Card header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
              <span className="text-[13px] font-semibold text-[var(--color-text-primary)]">Account details</span>
            </div>

            {/* Rows */}
            <div className="flex flex-col divide-y divide-[var(--color-border)]">
              {[
                { label: "Full name",     value: user.name,      icon: null },
                { label: "Email",         value: user.email,     icon: Mail,     mono: true },
                { label: "Role",          value: user.role,      icon: Shield    },
                { label: "Status",        value: statusLabel,    icon: AlertCircle },
                { label: "Location",      value: user.location,  icon: null      },
                { label: "Active sessions", value: `${user.sessions} devices`, icon: Activity },
              ].map(({ label, value, icon: Icon, mono }) => (
                <div key={label} className="flex items-center justify-between px-4 py-2.5 group hover:bg-[var(--color-surface)] transition-colors">
                  <span className="text-[12px] text-[var(--color-text-secondary)]">{label}</span>
                  <span className={`flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-text-primary)] ${mono ? "font-mono text-[11px]" : ""}`}>
                    {Icon && <Icon size={11} strokeWidth={1.8} className="text-[var(--color-text-secondary)]" />}
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Recent activity ── */}
          <div
            className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-main)] overflow-hidden"
            style={{ boxShadow: "var(--shadow-custom)" }}
          >
            {/* Card header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
              <span className="text-[13px] font-semibold text-[var(--color-text-primary)]">Recent activity</span>
              <span className="text-[11px] text-[var(--color-text-secondary)]">Last 7 days</span>
            </div>

            {/* Activity list */}
            <div className="flex flex-col divide-y divide-[var(--color-border)]">
              {user.recentActivity.map(({ action, time, type }, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-2.5 hover:bg-[var(--color-surface)] transition-colors">
                  {/* Dot */}
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${activityDot[type] ?? "bg-[var(--color-text-secondary)]"}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-medium text-[var(--color-text-primary)] leading-snug truncate">
                      {action}
                    </p>
                    <p className="text-[11px] text-[var(--color-text-secondary)] mt-0.5">
                      {time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ DANGER ZONE ═══════════ */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-red-500/20 bg-red-500/5"
        >
          <div className="flex flex-col gap-0.5">
            <span className="text-[13px] font-semibold text-[var(--color-text-primary)]">Danger zone</span>
            <span className="text-[12px] text-[var(--color-text-secondary)]">
              These actions are destructive and cannot be undone.
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              className="flex items-center gap-1.5 px-3 border border-red-500/30 bg-red-500/5 text-[12px] font-medium text-red-500 rounded-lg hover:bg-red-500/15 transition-colors cursor-pointer"
              style={{ paddingTop: "5px", paddingBottom: "5px" }}
            >
              <LogOut size={12} strokeWidth={2} />
              Force logout
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 px-3 border border-red-500/30 bg-red-500/10 text-[12px] font-medium text-red-500 rounded-lg hover:bg-red-500/20 transition-colors cursor-pointer"
              style={{ paddingTop: "5px", paddingBottom: "5px" }}
            >
              <UserX size={12} strokeWidth={2} />
              Deactivate user
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
