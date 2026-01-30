import React from 'react';
import { 
  Search, Mail, Bell, Plus, Home, Users, MessageSquare, PlayCircle, Star, MoreHorizontal,
  CheckCircle2
} from 'lucide-react';

// Story Item
const StoryItem = ({ name, imageUrl, isAdd }) => (
  <div className="flex flex-col items-center space-y-1 flex-shrink-0 cursor-pointer group">
    <div className={`relative p-[2px] rounded-full ${isAdd ? 'border-2 border-dashed border-gray-600' : 'border-2 border-blue-400'}`}>
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-[#3a3431] flex items-center justify-center">
        {isAdd ? (
          <Plus className="text-white w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="absolute bottom-0 right-0 bg-white rounded-full border-2 border-[#1a1614]">
        <CheckCircle2 className={`w-3 h-3 ${isAdd ? 'text-gray-400 fill-gray-400' : 'text-blue-500 fill-blue-500'}`} />
      </div>
    </div>
    <span className="text-[10px] md:text-[11px] text-gray-300 font-medium truncate w-14 text-center">{name}</span>
  </div>
);

// Sidebar Item
const SidebarItem = ({ icon: Icon, label, badge, active }) => (
  <div className={`flex items-center space-x-3 md:space-x-4 px-3 py-2 md:px-4 md:py-3 rounded-2xl cursor-pointer transition-all ${active ? 'text-white' : 'text-gray-400 hover:bg-white/5'}`}>
    <div className="relative">
      <Icon size={20} strokeWidth={active ? 2.5 : 2} />
      {badge && (
        <span className="absolute -top-1 -right-1 bg-zinc-700 text-[8px] md:text-[9px] text-white w-4 h-4 flex items-center justify-center rounded-full border border-[#1a1614] font-bold">
          {badge}
        </span>
      )}
    </div>
    <span className="text-sm md:text-base font-semibold">{label}</span>
  </div>
);

// Trending Item
const TrendingItem = ({ emoji, tag, stats }) => (
  <div className="flex items-center justify-between py-1.5 group cursor-pointer">
    <div className="flex items-center space-x-2 md:space-x-3">
      <span className="text-sm md:text-base">{emoji}</span>
      <span className="text-xs md:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{tag}</span>
    </div>
    {stats && <span className="text-[9px] md:text-[10px] text-gray-500 font-medium">{stats}</span>}
  </div>
);

// Suggestion Item
const SuggestionItem = ({ name, handle, imageUrl }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center space-x-2 md:space-x-3">
      <img src={imageUrl} alt={name} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-white/10" />
      <div className="flex flex-col">
        <span className="text-xs md:text-sm font-bold text-white leading-tight">{name}</span>
        <span className="text-[9px] md:text-[11px] text-gray-500">{handle}</span>
      </div>
    </div>
    <button className="bg-white text-black text-[10px] md:text-[11px] font-bold px-3 py-1 rounded-lg hover:bg-gray-200 transition-colors">
      Follow
    </button>
  </div>
);

const App = () => {
  const stories = [
    { name: 'Sanya', imageUrl: 'https://csspicker.dev/api/image/?q=woman+portrait&image_type=photo' },
    { name: 'Rahul', imageUrl: 'https://csspicker.dev/api/image/?q=man+portrait&image_type=photo' },
    { name: 'Maya', imageUrl: 'https://csspicker.dev/api/image/?q=girl+portrait&image_type=photo' },
    { name: 'Ty', imageUrl: 'https://csspicker.dev/api/image/?q=young+man&image_type=photo' },
    { name: 'Soph', imageUrl: 'https://csspicker.dev/api/image/?q=fashion+woman&image_type=photo' },
  ];

  return (
    <div className="min-h-screen bg-[#1a1614] text-white font-sans p-3 md:p-6 flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between mb-4 md:mb-8 max-w-[1600px] mx-auto w-full">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600">
            <img src="https://csspicker.dev/api/image/?q=man+face&image_type=photo" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight">DevConnect</span>
        </div>

        {/* Search */}
        <div className="flex-1 mx-4 hidden sm:flex">
          <div className="relative group w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-white transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search friends & posts" 
              className="w-full bg-[#2a2421] rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder:text-gray-500 transition-all"
            />
          </div>
        </div>

        {/* Header icons */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="relative p-2 hover:bg-white/5 rounded-full cursor-pointer transition-colors">
            <Mail size={20} className="text-gray-300" />
            <span className="absolute top-0 right-0 bg-zinc-700 text-[8px] md:text-[9px] w-4 h-4 flex items-center justify-center rounded-full border border-[#1a1614] font-bold">5</span>
          </div>
          <div className="relative p-2 hover:bg-white/5 rounded-full cursor-pointer transition-colors">
            <Bell size={20} className="text-gray-300" />
            <span className="absolute top-0 right-0 bg-zinc-700 text-[8px] md:text-[9px] w-4 h-4 flex items-center justify-center rounded-full border border-[#1a1614] font-bold">1</span>
          </div>
          <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:bg-gray-200 transition-all shadow-lg">
            <Plus size={20} strokeWidth={3} />
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-[1600px] mx-auto w-full">
        {/* Left Sidebar */}
        <aside className="w-full md:w-64 flex flex-col justify-between pb-4 md:pb-6 hidden md:flex">
          <nav className="space-y-1">
            <SidebarItem icon={Home} label="Home" active />
            <SidebarItem icon={Users} label="Friends" />
            <SidebarItem icon={MessageSquare} label="Messages" badge={19} />
            <SidebarItem icon={PlayCircle} label="Reels" />
            <SidebarItem icon={Star} label="Stories" />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 tracking-tight">Good Morning, Alex! 👋</h1>

          {/* Stories */}
          <section className="bg-[#2a2421] rounded-[24px] p-4 mb-6 md:mb-8 shadow-lg border border-white/5 overflow-x-auto flex space-x-4 no-scrollbar">
            <StoryItem name="Add Story" isAdd />
            {stories.map((story, idx) => (
              <StoryItem key={idx} {...story} />
            ))}
          </section>

          {/* Feed Post Example */}
          <article className="bg-[#2a2421] rounded-[24px] overflow-hidden mb-6 md:mb-8 shadow-lg border border-white/5">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 md:space-x-3">
                <img src="https://csspicker.dev/api/image/?q=woman+face&image_type=photo" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-white/10" alt="user" />
                <span className="font-bold text-sm text-gray-200">@user1</span>
              </div>
              <MoreHorizontal className="text-gray-500 cursor-pointer hover:text-white transition-colors" />
            </div>
            <div className="px-4 pb-4">
              <div className="rounded-[20px] overflow-hidden relative aspect-video group">
                <img 
                  src="https://csspicker.dev/api/image/?q=friends+beach+sunset&image_type=photo" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="post content" 
                />
              </div>
            </div>
          </article>
        </main>
      </div>

      {/* Bottom Nav for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#2a2421] flex justify-around items-center py-2 md:hidden border-t border-white/5">
        <Home size={20} />
        <Users size={20} />
        <MessageSquare size={20} />
        <PlayCircle size={20} />
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
