import { Clock, CheckCircle, XCircle, Navigation } from "lucide-react";

export function Orders() {
  const orders = [
    {
      id: 1,
      professional: "Ricardo Santos",
      profession: "Plumber",
      service: "Emergency pipe repair",
      status: "in_progress",
      date: "Today, 2:00 PM",
      price: "R$ 80",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      professional: "Ana Silva",
      profession: "Electrician",
      service: "Light installation",
      status: "on_the_way",
      date: "Today, 3:30 PM",
      price: "R$ 100",
      eta: "15 min",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      professional: "Carlos Mendes",
      profession: "Mechanic",
      service: "Car oil change",
      status: "completed",
      date: "Yesterday, 10:00 AM",
      price: "R$ 120",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      professional: "Juliana Lima",
      profession: "Cleaner",
      service: "Deep house cleaning",
      status: "cancelled",
      date: "May 8, 2026",
      price: "R$ 150",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in_progress":
        return "text-[#0A84FF]";
      case "on_the_way":
        return "text-[#FF8A3D]";
      case "completed":
        return "text-[#10b981]";
      case "cancelled":
        return "text-[#ef4444]";
      default:
        return "text-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "in_progress":
        return <Clock size={16} />;
      case "on_the_way":
        return <Navigation size={16} />;
      case "completed":
        return <CheckCircle size={16} />;
      case "cancelled":
        return <XCircle size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "in_progress":
        return "In Progress";
      case "on_the_way":
        return "Professional On The Way";
      case "completed":
        return "Completed";
      case "cancelled":
        return "Cancelled";
      default:
        return status;
    }
  };

  return (
    <div className="px-5 pt-8 pb-6">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all"
          >
            <div className="flex gap-4 mb-3">
              <img
                src={order.avatar}
                alt={order.professional}
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{order.professional}</h3>
                <p className="text-sm text-gray-400">{order.profession}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{order.price}</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-3 mb-3">
              <p className="text-sm text-gray-300">{order.service}</p>
              <p className="text-xs text-gray-400 mt-1">{order.date}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-2 text-sm font-medium ${getStatusColor(order.status)}`}>
                {getStatusIcon(order.status)}
                <span>{getStatusText(order.status)}</span>
              </div>

              {order.status === "on_the_way" && order.eta && (
                <div className="bg-[#FF8A3D]/20 text-[#FF8A3D] px-3 py-1 rounded-full text-xs font-semibold">
                  ETA: {order.eta}
                </div>
              )}

              {order.status === "completed" && (
                <button className="text-[#0A84FF] text-sm font-medium hover:underline">
                  Review
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
