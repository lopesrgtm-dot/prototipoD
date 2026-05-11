import { useNavigate } from "react-router";
import {
  Search,
  Wrench,
  Droplet,
  Zap,
  Car,
  Laptop,
  GraduationCap,
  Paintbrush,
  Truck,
  Star,
  Clock,
  MapPin
} from "lucide-react";

export function Home() {
  const navigate = useNavigate();

  const searchSuggestions = [
    "Plumber",
    "Electrician",
    "Cleaning",
    "Mechanic",
    "Teacher",
    "Furniture Assembly",
    "Painting",
    "IT Support"
  ];

  const categories = [
    { name: "Repairs", icon: Wrench, color: "#0A84FF" },
    { name: "Cleaning", icon: Droplet, color: "#10b981" },
    { name: "Electrical", icon: Zap, color: "#f59e0b" },
    { name: "Mechanics", icon: Car, color: "#ef4444" },
    { name: "IT Support", icon: Laptop, color: "#8b5cf6" },
    { name: "Classes", icon: GraduationCap, color: "#06b6d4" },
    { name: "Painting", icon: Paintbrush, color: "#ec4899" },
    { name: "Moving", icon: Truck, color: "#FF8A3D" },
  ];

  const professionals = [
    {
      id: 1,
      name: "Ricardo Santos",
      profession: "Plumber",
      rating: 4.9,
      distance: "1.2 km",
      responseTime: "5 min",
      price: "R$ 80",
      online: true,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Ana Silva",
      profession: "Electrician",
      rating: 5.0,
      distance: "800 m",
      responseTime: "3 min",
      price: "R$ 100",
      online: true,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Carlos Mendes",
      profession: "Mechanic",
      rating: 4.8,
      distance: "2.5 km",
      responseTime: "10 min",
      price: "R$ 120",
      online: false,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="px-5 pt-8 pb-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-gray-400 text-sm mb-1">Hello,</p>
          <h1 className="text-2xl font-bold">Marcelo</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#FF8A3D] text-white px-3 py-1.5 rounded-full flex items-center gap-1">
            <Star size={14} fill="#fff" />
            <span className="text-sm font-semibold">7</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#FF8A3D] p-0.5">
            <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center">
              <span className="text-lg font-bold">M</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate("/search")}
        className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-3 mb-8 hover:bg-white/10 transition-all"
      >
        <Search size={20} className="text-[#0A84FF]" />
        <span className="text-gray-400">What do you need help with today?</span>
      </button>

      {searchSuggestions.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {searchSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => navigate("/search")}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 hover:border-[#0A84FF] transition-all"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Popular Services</h2>
          <button
            onClick={() => navigate("/categories")}
            className="text-[#0A84FF] text-sm font-medium"
          >
            See All
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => navigate("/categories")}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-white/10 hover:border-[#0A84FF] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${category.color}20` }}>
                  <Icon size={20} style={{ color: category.color }} />
                </div>
                <span className="text-xs text-center">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Featured Professionals</h2>
        </div>

        <div className="space-y-3">
          {professionals.map((pro) => (
            <div
              key={pro.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all"
            >
              <div className="flex gap-4">
                <div className="relative">
                  <img
                    src={pro.avatar}
                    alt={pro.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  {pro.online && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#10b981] rounded-full border-2 border-[#050505]" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold mb-0.5">{pro.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{pro.profession}</p>

                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={12} fill="#fbbf24" className="text-[#fbbf24]" />
                      <span>{pro.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{pro.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{pro.responseTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      From <span className="font-semibold text-white">{pro.price}</span>
                    </span>
                    <button
                      onClick={() => navigate(`/service/${pro.id}`)}
                      className="bg-[#FF8A3D] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#ff9a52] transition-all"
                    >
                      Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
