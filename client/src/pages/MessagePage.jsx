import { ArrowLeft, Search, Edit, Phone, Video, Smile, Paperclip, Send, User, Code, Zap } from 'lucide-react';

function App() {
  const conversations = [
    {
      id: 1,
      name: 'Sanya Patel',
      message: 'Hey! Did you finish the...',
      time: '2m',
      unread: 2,
      icon: User,
      online: true
    },
    {
      id: 2,
      name: 'Rohit Verma',
      message: 'Sounds good. Let\'s catch...',
      time: '1h',
      unread: 2,
      icon: User,
      online: false
    },
    {
      id: 3,
      name: 'Maya.dev',
      message: 'Reviewing the pull request...',
      time: '3h',
      unread: 3,
      icon: Code,
      online: false
    },
    {
      id: 4,
      name: 'Ty_codes',
      message: 'Can we sync tomorrow...',
      time: '1d',
      unread: 0,
      icon: Zap,
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      text: 'Hey! Did you finish the project?',
      time: '10:00 AM',
      sent: false,
      emoji: '😁'
    },
    {
      id: 2,
      text: 'Yes! Just deployed it 🚀',
      time: '10:05 AM',
      sent: true,
      emoji: null
    },
    {
      id: 3,
      text: 'That\'s amazing! Can I see it?',
      time: '10:07 AM',
      sent: false,
      emoji: '👍'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-700 via-stone-600 to-stone-500 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl h-[600px] bg-gradient-to-br from-stone-800/90 to-stone-700/90 rounded-[3rem] overflow-hidden shadow-2xl flex border-8 border-stone-900/50">

        {/* Left Panel - Conversations List */}
        <div className="w-[45%] bg-gradient-to-br from-stone-800/60 to-stone-700/60 backdrop-blur-xl p-6 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-amber-700/50 hover:bg-amber-700/70 transition-colors flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 text-amber-200" />
              </button>
              <h1 className="text-2xl font-bold text-white">Messages</h1>
            </div>
            <button className="w-10 h-10 rounded-full bg-amber-700/50 hover:bg-amber-700/70 transition-colors flex items-center justify-center">
              <Edit className="w-5 h-5 text-amber-200" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400/60" />
              <input
                type="text"
                placeholder="Search conversations"
                className="w-full bg-stone-700/50 backdrop-blur-sm text-stone-200 placeholder-stone-400 rounded-full py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto space-y-3">
            {conversations.map((conv, index) => {
              const IconComponent = conv.icon;
              return (
              <div
                key={conv.id}
                className={`p-4 rounded-2xl transition-all cursor-pointer ${
                  index === 0
                    ? 'bg-amber-700/40 backdrop-blur-sm shadow-lg border border-amber-600/40'
                    : 'bg-stone-700/40 hover:bg-stone-700/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-700/60 to-stone-600/60 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-amber-200" />
                    </div>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-stone-800 shadow-lg"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white font-semibold">{conv.name}</h3>
                      <span className="text-stone-400 text-sm">{conv.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-stone-300 text-sm truncate">{conv.message}</p>
                      {conv.unread > 0 && (
                        <span className="ml-2 bg-stone-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                          {conv.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>

        {/* Right Panel - Chat View */}
        <div className="flex-1 bg-gradient-to-br from-stone-700/60 to-stone-600/60 backdrop-blur-xl flex flex-col">
          {/* Chat Header */}
          <div className="p-6 bg-stone-700/40 backdrop-blur-sm border-b border-stone-600/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-700/60 to-stone-600/60 flex items-center justify-center">
                    <User className="w-6 h-6 text-amber-200" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-stone-800 shadow-lg"></div>
                </div>
                <div>
                  <h2 className="text-white font-semibold">Sanya Patel</h2>
                  <p className="text-emerald-400 text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-amber-700/50 hover:bg-amber-700/70 transition-colors flex items-center justify-center">
                  <Phone className="w-5 h-5 text-amber-200" />
                </button>
                <button className="w-10 h-10 rounded-full bg-amber-700/50 hover:bg-amber-700/70 transition-colors flex items-center justify-center">
                  <Video className="w-5 h-5 text-amber-200" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] ${msg.sent ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                  <div
                    className={`px-5 py-3 rounded-2xl ${
                      msg.sent
                        ? 'bg-amber-700/80 text-white rounded-br-md shadow-lg'
                        : 'bg-stone-700/80 text-stone-100 rounded-bl-md shadow-lg'
                    } backdrop-blur-sm`}
                  >
                    {msg.text}
                  </div>
                  <div className="flex items-center gap-2 px-2">
                    <span className="text-stone-400 text-xs">{msg.time}</span>
                    {msg.emoji && <span className="text-sm">{msg.emoji}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-6">
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-amber-700/50 hover:bg-amber-700/70 transition-colors flex items-center justify-center flex-shrink-0">
                <Smile className="w-5 h-5 text-amber-200" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full bg-stone-700/60 backdrop-blur-sm text-stone-200 placeholder-stone-400 rounded-full py-3 px-5 pr-12 outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Paperclip className="w-5 h-5 text-amber-200/70 hover:text-amber-200 transition-colors" />
                </button>
              </div>
              <button className="w-12 h-12 rounded-full bg-amber-700/90 hover:bg-amber-700 transition-colors flex items-center justify-center flex-shrink-0 shadow-lg">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
