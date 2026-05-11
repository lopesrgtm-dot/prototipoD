import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Send, Paperclip, Mic, MoreVertical } from "lucide-react";
import { useState } from "react";

export function Chat() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "Ricardo Santos",
      profession: "Plumber",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      lastMessage: "I'll be there in 15 minutes!",
      time: "2 min ago",
      unread: 2
    },
    {
      id: 2,
      name: "Ana Silva",
      profession: "Electrician",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      lastMessage: "Sure, I can help with that",
      time: "1 hour ago",
      unread: 0
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "them",
      text: "Hi! I saw your service request. I can help you with that.",
      time: "10:30"
    },
    {
      id: 2,
      sender: "me",
      text: "Great! How soon can you come?",
      time: "10:32"
    },
    {
      id: 3,
      sender: "them",
      text: "I'm available today at 2 PM. Does that work for you?",
      time: "10:33"
    },
    {
      id: 4,
      sender: "me",
      text: "Perfect! See you then.",
      time: "10:35"
    },
    {
      id: 5,
      sender: "them",
      text: "I'll be there in 15 minutes!",
      time: "13:45"
    }
  ];

  const handleSend = () => {
    if (message.trim()) {
      setMessage("");
    }
  };

  if (!id) {
    return (
      <div className="px-5 pt-8 pb-6">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>

        <div className="space-y-3">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => navigate(`/chat/${chat.id}`)}
              className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all text-left"
            >
              <div className="flex gap-4">
                <div className="relative">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  {chat.unread > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF8A3D] rounded-full flex items-center justify-center text-xs font-bold">
                      {chat.unread}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold">{chat.name}</h3>
                    <span className="text-xs text-gray-400">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{chat.profession}</p>
                  <p className="text-sm text-gray-300 truncate">{chat.lastMessage}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const currentChat = chats.find((c) => c.id === Number(id));

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/chat")}
            className="text-white hover:text-[#0A84FF] transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <img
            src={currentChat?.avatar}
            alt={currentChat?.name}
            className="w-10 h-10 rounded-xl object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{currentChat?.name}</h3>
            <p className="text-xs text-gray-400">{currentChat?.profession}</p>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                msg.sender === "me"
                  ? "bg-[#0A84FF] text-white rounded-br-md"
                  : "bg-white/10 text-white rounded-bl-md"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.sender === "me" ? "text-blue-100" : "text-gray-400"}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Paperclip size={22} />
          </button>

          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 pr-12 focus:outline-none focus:border-[#0A84FF] transition-colors"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
              <Mic size={20} />
            </button>
          </div>

          <button
            onClick={handleSend}
            className="w-11 h-11 bg-[#0A84FF] rounded-full flex items-center justify-center hover:bg-[#0066cc] transition-all"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
