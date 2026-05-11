import { useNavigate } from "react-router";
import {
  ArrowLeft,
  Wrench,
  Droplet,
  Zap,
  Car,
  Laptop,
  GraduationCap,
  Paintbrush,
  Truck,
  Hammer,
  Wind,
  Home,
  Package,
  Scissors,
  Camera,
  UtensilsCrossed,
  Dog
} from "lucide-react";

export function AllCategories() {
  const navigate = useNavigate();

  const allCategories = [
    { name: "Repairs", icon: Wrench, color: "#0A84FF" },
    { name: "Cleaning", icon: Droplet, color: "#10b981" },
    { name: "Electrical", icon: Zap, color: "#f59e0b" },
    { name: "Mechanics", icon: Car, color: "#ef4444" },
    { name: "IT Support", icon: Laptop, color: "#8b5cf6" },
    { name: "Classes", icon: GraduationCap, color: "#06b6d4" },
    { name: "Painting", icon: Paintbrush, color: "#ec4899" },
    { name: "Moving", icon: Truck, color: "#FF8A3D" },
    { name: "Carpentry", icon: Hammer, color: "#a78bfa" },
    { name: "HVAC", icon: Wind, color: "#22d3ee" },
    { name: "Home Improvement", icon: Home, color: "#fb923c" },
    { name: "Assembly", icon: Package, color: "#34d399" },
    { name: "Haircut", icon: Scissors, color: "#f472b6" },
    { name: "Photography", icon: Camera, color: "#fbbf24" },
    { name: "Catering", icon: UtensilsCrossed, color: "#f87171" },
    { name: "Pet Care", icon: Dog, color: "#60a5fa" },
  ];

  return (
    <div className="px-5 pt-8 pb-6">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate("/")}
          className="text-white hover:text-[#0A84FF] transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">All Categories</h1>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {allCategories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.name}
              onClick={() => navigate("/search")}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-3 hover:bg-white/10 hover:border-[#0A84FF] transition-all group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${category.color}20` }}
              >
                <Icon size={28} style={{ color: category.color }} />
              </div>
              <span className="text-sm text-center">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
