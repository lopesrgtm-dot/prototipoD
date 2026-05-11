import { Outlet, useNavigate, useLocation } from "react-router";
import { Home, MessageCircle, ClipboardList, User } from "lucide-react";

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/chat", icon: MessageCircle, label: "Chat" },
    { path: "/orders", icon: ClipboardList, label: "Orders" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
      <div className="w-full max-w-md h-screen bg-[#050505] relative overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto pb-20">
          <Outlet />
        </div>

        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 px-6 py-3">
          <div className="flex justify-around items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex flex-col items-center gap-1 transition-all ${
                    isActive ? "text-[#0A84FF]" : "text-gray-400"
                  }`}
                >
                  <Icon size={24} strokeWidth={2} />
                  <span className="text-xs">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
