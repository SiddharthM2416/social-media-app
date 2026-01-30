import React from "react";
import {
  ArrowLeft,
  Mail,
  Bell,
  MoreHorizontal,
  MapPin,
  Laptop,
  Plane,
  Heart,
  Play,
  ChevronRight,
} from "lucide-react";

const ProfilePage = ({
  username = "@alex_dev",
  displayName = "Alex Dev",
  bio = "CSE Student • Love coding and traveling",
  location = "San Francisco, CA",
  postsCount = "320",
  followersCount = "7,436",
  followingCount = "512",
  avatarUrl = "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
}) => {
  const posts = [
    {
      id: 1,
      likes: "821",
      imageUrl:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      type: "image",
    },
    {
      id: 2,
      likes: "1,249",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      type: "image",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      type: "video",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1614] text-white font-sans pb-10">
      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-6 h-6 cursor-pointer opacity-70 hover:opacity-100" />
            <div className="flex items-center gap-2">
              <img
                src={avatarUrl}
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-gray-300">{username}</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Mail className="w-6 h-6 text-gray-300 cursor-pointer" />
            <Bell className="w-6 h-6 text-gray-300 cursor-pointer" />
            <MoreHorizontal className="w-8 h-8 p-1 bg-white/10 rounded-full cursor-pointer" />
          </div>
        </header>

        {/* Profile Section */}
        <section className="flex flex-col md:flex-row gap-8 mb-10">
          <img
            src={avatarUrl}
            alt="profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-white/10"
          />

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <h1 className="text-3xl font-semibold">{displayName}</h1>
              <button className="px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                Edit Profile
              </button>
            </div>

            <p className="text-gray-300 flex items-center gap-2 mb-2">
              <Laptop size={16} /> {bio} <Plane size={16} />
            </p>

            <p className="text-gray-400 flex items-center gap-2 mb-6">
              <MapPin size={16} /> {location}
            </p>

            <div className="flex gap-10">
              <Stat label="Posts" value={postsCount} />
              <Stat label="Followers" value={followersCount} />
              <Stat label="Following" value={followingCount} />
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={post.imageUrl}
                alt="post"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs">
                {post.likes && (
                  <>
                    <Heart className="w-4 h-4 fill-white" />
                    {post.likes}
                  </>
                )}
                {post.type === "video" && <Play className="w-5 h-5 fill-white" />}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 flex justify-between items-center bg-white/5 p-4 rounded-full">
          <div className="flex gap-6 text-sm">
            <span className="border-b-2 border-white">Posts</span>
            <span className="text-gray-400">Reels</span>
            <span className="text-gray-400">Friends</span>
            <span className="text-gray-400">About</span>
          </div>
          <button className="flex items-center gap-2 text-sm">
            See all friends <ChevronRight size={16} />
          </button>
        </footer>
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div className="text-center">
    <p className="text-lg font-bold">{value}</p>
    <p className="text-gray-400 text-sm">{label}</p>
  </div>
);

export default ProfilePage;