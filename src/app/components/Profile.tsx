import { useNavigate } from "react-router";
import {
  User,
  CreditCard,
  MapPin,
  Settings,
  Moon,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Star
} from "lucide-react";

export function Profile() {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: User,
      label: "Edit Profile",
      action: () => {}
    },
    {
      icon: CreditCard,
      label: "Payment Methods",
      action: () => {}
    },
    {
      icon: MapPin,
      label: "Saved Addresses",
      action: () => {}
    },
    {
      icon: Bell,
      label: "Notifications",
      action: () => {}
    },
    {
      icon: Moon,
      label: "Dark Mode",
      action: () => {},
      toggle: true,
      enabled: true
    },
    {
      icon: Shield,
      label: "Privacy & Security",
      action: () => {}
    },
    {
      icon: Settings,
      label: "Settings",
      action: () => {}
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      action: () => {}
    }
  ];

  return (
    <div className="px-5 pt-8 pb-6">
      <h1 className="text-2xl font-bold mb-8">Profile</h1>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0A84FF] to-[#FF8A3D] p-0.5">
            <div className="w-full h-full rounded-2xl bg-[#050505] flex items-center justify-center">
              <span className="text-2xl font-bold">M</span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1">Marcelo</h2>
            <p className="text-sm text-gray-400">marcelo@example.com</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/5 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star size={16} fill="#fbbf24" className="text-[#fbbf24]" />
              <span className="font-bold">7</span>
            </div>
            <p className="text-xs text-gray-400">Reputation</p>
          </div>
          <div className="bg-white/5 rounded-xl p-3 text-center">
            <p className="font-bold mb-1">12</p>
            <p className="text-xs text-gray-400">Services Used</p>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              onClick={item.action}
              className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  <Icon size={20} className="text-[#0A84FF]" />
                </div>
                <span>{item.label}</span>
              </div>

              {item.toggle ? (
                <div className={`w-12 h-7 rounded-full transition-colors ${
                  item.enabled ? "bg-[#0A84FF]" : "bg-white/10"
                }`}>
                  <div className={`w-5 h-5 bg-white rounded-full mt-1 transition-transform ${
                    item.enabled ? "translate-x-6" : "translate-x-1"
                  }`} />
                </div>
              ) : (
                <ChevronRight size={20} className="text-gray-400" />
              )}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => navigate("/login")}
        className="w-full bg-[#ef4444]/10 border border-[#ef4444]/30 text-[#ef4444] rounded-2xl p-4 hover:bg-[#ef4444]/20 transition-all flex items-center justify-center gap-2 font-medium"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>

      <p className="text-center text-gray-400 text-xs mt-8">
        Version 1.0.0
      </p>
    </div>
  );
}
