import { useState, useEffect } from 'react';
import { ChevronDown, Pencil, Search, Camera, X, Home, Play, Send, User } from 'lucide-react';

const messages = [
  {
    id: 1,
    name: "hellen castro",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    message: "Gostei do seu beijo, queria provar de novo... · 48 min",
    hasCamera: true,
  },
  {
    id: 2,
    name: "Virtual",
    avatar: null,
    message: "Sua mulher tá com você hoje? · 3 h",
    hasCamera: true,
  },
  {
    id: 3,
    name: "Letícia Eller",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    message: "Ontem foi incrível, não consigo parar de pensar... · 9 h",
    hasCamera: true,
  },
  {
    id: 4,
    name: "Senhor Ambrozio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    message: "Vem aqui em casa mais tarde, tô sozinho · 14 h",
    hasCamera: true,
  },
  {
    id: 5,
    name: "Luiz Eduardo",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    message: "😂😂😂😂 · 2 d",
    hasCamera: true,
  },
  {
    id: 6,
    name: "Elivan Carter",
    avatar: null,
    message: "Enviou um anexo · 2 d",
    hasX: true,
  },
  {
    id: 7,
    name: "Emicael Miranda",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    message: "Eu ri demais dela kkkk · 3 d",
    hasCamera: true,
  },
  {
    id: 8,
    name: "Maria Silva",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    message: "Não conta pra ninguém o que aconteceu ok? · 5 d",
    hasCamera: true,
  },
];

const stories = [
  {
    id: 1,
    name: "Sua nota",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    note: "O que você está pensando...",
    isOwn: true,
  },
  {
    id: 2,
    name: "pauloterence_",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    note: "Memória",
    music: "ROSALÍA, C...",
  },
  {
    id: 3,
    name: "Ana Cecília🦋",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    note: "Jo Em Nuve",
    music: "Chris MC, S...",
  },
  {
    id: 4,
    name: "Tarlyson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    note: "Isso e l...",
  },
];

export default function HomePage() {
  const [username, setUsername] = useState('luiz_eduar3');

  useEffect(() => {
    const savedUsername = localStorage.getItem('monitoredUsername');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  return (
    <div className="min-h-screen text-white max-w-md mx-auto relative" style={{ backgroundColor: '#0B1014' }}>
      {/* Header */}
      <div className="sticky top-0 z-10 px-4 pt-3 pb-2" style={{ backgroundColor: '#0B1014' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold">{username}</span>
            <ChevronDown className="w-5 h-5" />
            <span className="w-2 h-2 rounded-full bg-green-500 ml-1"></span>
          </div>
          <Pencil className="w-6 h-6" />
        </div>

        {/* Search Bar */}
        <div className="rounded-xl px-4 py-3 flex items-center gap-3" style={{ backgroundColor: '#1C1F24' }}>
          <Search className="w-5 h-5 text-zinc-400" />
          <span className="text-zinc-400">Pesquise ou pergunte à Meta AI</span>
        </div>
      </div>

      {/* Stories */}
      <div className="px-4 py-3">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide items-end">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center min-w-[80px]">
              {/* Note bubble */}
              <div className="bg-zinc-800 rounded-2xl px-3 py-1.5 mb-2 relative">
                {story.music && (
                  <div className="flex items-center gap-1 text-xs text-white">
                    <span className="flex gap-0.5">
                      <span className="w-0.5 h-2 bg-white rounded-full"></span>
                      <span className="w-0.5 h-3 bg-white rounded-full"></span>
                      <span className="w-0.5 h-2 bg-white rounded-full"></span>
                    </span>
                    <span className="truncate max-w-[60px]">{story.note}</span>
                  </div>
                )}
                {!story.music && (
                  <span className="text-xs text-white truncate max-w-[70px] block">
                    {story.note}
                  </span>
                )}
                {story.music && (
                  <span className="text-[10px] text-zinc-400 truncate block">
                    {story.music}
                  </span>
                )}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rotate-45"></div>
              </div>

              {/* Avatar with gradient ring */}
              <div className="relative">
                <div className={`w-16 h-16 rounded-full p-[2px] ${story.isOwn ? 'bg-zinc-600' : 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600'}`}>
                  <div className="w-full h-full rounded-full p-[2px]" style={{ backgroundColor: '#0B1014' }}>
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="w-full h-full rounded-full object-cover blur-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Name */}
              <span className="text-xs mt-2 text-center truncate max-w-[80px] blur-sm">
                {story.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Messages Header */}
      <div className="px-4 flex items-center justify-between py-2">
        <span className="text-base font-bold">Mensagens</span>
        <span className="text-base font-semibold text-blue-500">Pedidos</span>
      </div>

      {/* Messages List */}
      <div className="px-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-center py-3 gap-3">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              {msg.avatar ? (
                <img
                  src={msg.avatar}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover blur-sm"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-zinc-700 flex items-center justify-center blur-sm">
                  <User className="w-8 h-8 text-zinc-400" />
                </div>
              )}
            </div>

            {/* Message Content */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-white blur-sm">{msg.name}</p>
              <p className="text-zinc-400 text-sm truncate">
                {msg.message}
              </p>
            </div>

            {/* Action */}
            <div className="flex-shrink-0">
              {msg.hasCamera && (
                <Camera className="w-6 h-6 text-zinc-500" />
              )}
              {msg.hasX && (
                <X className="w-6 h-6 text-zinc-500" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto border-t border-zinc-800 px-6 py-3" style={{ backgroundColor: '#0B1014' }}>
        <div className="flex items-center justify-between">
          <Home className="w-7 h-7 text-white" />
          <Play className="w-7 h-7 text-white" />
          <div className="relative">
            <Send className="w-7 h-7 text-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
          <Search className="w-7 h-7 text-white" />
          <div className="w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="w-32 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Spacer for bottom nav */}
      <div className="h-24"></div>
    </div>
  );
}
