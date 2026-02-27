import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, Eye } from 'lucide-react';

export default function SetupPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('monitoredUsername', username.trim());
      navigate('/home');
    }
  };

  return (
    <div 
      className="min-h-screen text-white flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: '#0B1014' }}
    >
      {/* Logo/Icon */}
      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1 mb-8">
        <div className="w-full h-full rounded-full flex items-center justify-center" style={{ backgroundColor: '#0B1014' }}>
          <Eye className="w-12 h-12 text-white" />
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-2">Vura</h1>
      <p className="text-zinc-400 text-center mb-8">
        Digite o nome de usuário que deseja monitorar
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div 
          className="rounded-xl px-4 py-4 flex items-center gap-3 mb-6"
          style={{ backgroundColor: '#1C1F24' }}
        >
          <Search className="w-5 h-5 text-zinc-400 flex-shrink-0" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="nome_de_usuario"
            className="bg-transparent text-white placeholder-zinc-500 outline-none w-full"
          />
        </div>

        <button
          type="submit"
          disabled={!username.trim()}
          className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          Monitorar
        </button>
      </form>


    </div>
  );
}
