import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Star, MapPin, Clock, Shield, MessageCircle, Calendar } from "lucide-react";

export function ServiceDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const professional = {
    name: "Ricardo Santos",
    profession: "Professional Plumber",
    rating: 4.9,
    reviews: 127,
    distance: "1.2 km away",
    responseTime: "Usually responds in 5 min",
    verified: true,
    price: "R$ 80",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    about: "Professional plumber with 10+ years of experience. Specialized in emergency repairs, installations, and maintenance. Available 24/7 for urgent situations.",
    services: [
      "Emergency repairs",
      "Pipe installation",
      "Leak detection",
      "Drain cleaning",
      "Water heater repair"
    ],
    reviews: [
      {
        name: "Maria Silva",
        rating: 5,
        comment: "Excellent service! Very professional and solved my problem quickly.",
        date: "2 days ago"
      },
      {
        name: "Carlos Oliveira",
        rating: 5,
        comment: "Highly recommend! Fair price and great quality work.",
        date: "1 week ago"
      },
      {
        name: "Ana Costa",
        rating: 4,
        comment: "Good service, arrived on time and fixed everything.",
        date: "2 weeks ago"
      }
    ]
  };

  return (
    <div className="pb-32">
      <div className="relative h-64 bg-gradient-to-br from-[#0A84FF] to-[#FF8A3D]">
        <button
          onClick={() => navigate("/")}
          className="absolute top-8 left-5 w-10 h-10 bg-black/30 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all"
        >
          <ArrowLeft size={20} />
        </button>
        <img
          src={professional.avatar}
          alt={professional.name}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-3xl object-cover border-4 border-[#050505]"
        />
      </div>

      <div className="px-5 pt-20">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-1">{professional.name}</h1>
          <p className="text-gray-400 mb-3">{professional.profession}</p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star size={16} fill="#fbbf24" className="text-[#fbbf24]" />
              <span>{professional.rating}</span>
              <span className="text-gray-400">({professional.reviews} reviews)</span>
            </div>
            {professional.verified && (
              <div className="flex items-center gap-1 text-[#10b981]">
                <Shield size={16} />
                <span>Verified</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <MapPin size={20} className="text-[#0A84FF] mb-2" />
            <p className="text-sm text-gray-400 mb-1">Distance</p>
            <p className="font-semibold">{professional.distance}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <Clock size={20} className="text-[#0A84FF] mb-2" />
            <p className="text-sm text-gray-400 mb-1">Response</p>
            <p className="font-semibold">~5 minutes</p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
          <h2 className="font-semibold mb-3">About</h2>
          <p className="text-sm text-gray-300 leading-relaxed">{professional.about}</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
          <h2 className="font-semibold mb-3">Services Offered</h2>
          <div className="space-y-2">
            {professional.services.map((service, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
                <span className="text-gray-300">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Reviews ({professional.reviews.length})</h2>
            <div className="flex items-center gap-1">
              <Star size={16} fill="#fbbf24" className="text-[#fbbf24]" />
              <span className="font-semibold">{professional.rating}</span>
            </div>
          </div>
          <div className="space-y-3">
            {professional.reviews.map((review, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={12} fill="#fbbf24" className="text-[#fbbf24]" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-md px-5">
        <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-gray-400">Starting from</p>
              <p className="text-2xl font-bold">{professional.price}</p>
            </div>
            <button
              onClick={() => navigate(`/chat/${id}`)}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <MessageCircle size={20} />
            </button>
          </div>
          <button
            onClick={() => navigate("/orders")}
            className="w-full bg-[#FF8A3D] text-white py-4 rounded-xl font-semibold hover:bg-[#ff9a52] transition-all flex items-center justify-center gap-2"
          >
            <Calendar size={20} />
            Request Service
          </button>
        </div>
      </div>
    </div>
  );
}
