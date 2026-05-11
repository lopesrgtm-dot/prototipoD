import { useNavigate } from "react-router";
import { ArrowLeft, Search as SearchIcon, X, TrendingUp, Clock } from "lucide-react";
import { useState } from "react";

export function Search() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const recentSearches = [
    "Plumber",
    "Electrician",
    "House cleaning"
  ];

  const popularSearches = [
    "Emergency plumber",
    "AC repair",
    "House painting",
    "Furniture assembly",
    "Garden maintenance",
    "Carpet cleaning"
  ];

  const results = [
    {
      id: 1,
      name: "Ricardo Santos",
      profession: "Plumber",
      rating: 4.9,
      distance: "1.2 km",
      price: "R$ 80",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "João Costa",
      profession: "Plumber",
      rating: 4.7,
      distance: "2.8 km",
      price: "R$ 75",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="px-5 pt-8 pb-6">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate("/")}
          className="text-white hover:text-[#0A84FF] transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search services..."
            autoFocus
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-12 py-3 focus:outline-none focus:border-[#0A84FF] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      {!searchQuery && (
        <>
          {recentSearches.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-gray-400" />
                <h3 className="text-sm font-semibold text-gray-400">Recent Searches</h3>
              </div>
              <div className="space-y-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(search)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-left hover:bg-white/10 transition-all"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={16} className="text-gray-400" />
              <h3 className="text-sm font-semibold text-gray-400">Popular Searches</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 hover:border-[#0A84FF] transition-all"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {searchQuery && (
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-3">
            Results for "{searchQuery}"
          </h3>
          <div className="space-y-3">
            {results.map((pro) => (
              <button
                key={pro.id}
                onClick={() => navigate(`/service/${pro.id}`)}
                className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all text-left"
              >
                <div className="flex gap-4">
                  <img
                    src={pro.avatar}
                    alt={pro.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-0.5">{pro.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{pro.profession}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">⭐ {pro.rating} • {pro.distance}</span>
                      <span className="font-semibold">From {pro.price}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
