import React, { useState } from "react";
import {
  Search,
  Home,
  User,
  Edit,
  LogIn,
  LogOut,
  Heart,
  MessageCircle,
  Bookmark,
  TrendingUp,
  Clock,
  Tag,
} from "lucide-react";

const DevBlog = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample data
  const categories = [
    "All",
    "JavaScript",
    "React",
    "Node.js",
    "AI/ML",
    "DevOps",
    "Web Design",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt:
        "Learn best practices for creating robust and scalable REST APIs using Node.js, Express, and modern design patterns.",
      author: "Sarah Chen",
      authorAvatar: "SC",
      date: "2 days ago",
      readTime: "8 min read",
      category: "Node.js",
      likes: 124,
      comments: 18,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      tags: ["Backend", "API", "Express"],
    },
    {
      id: 2,
      title: "React Server Components: A Complete Guide",
      excerpt:
        "Dive deep into React Server Components and understand how they revolutionize the way we build React applications.",
      author: "Mike Johnson",
      authorAvatar: "MJ",
      date: "5 days ago",
      readTime: "12 min read",
      category: "React",
      likes: 256,
      comments: 34,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      tags: ["React", "Frontend", "Performance"],
    },
    {
      id: 3,
      title: "AI-Powered Code Review: Tools and Techniques",
      excerpt:
        "Explore how artificial intelligence is transforming code review processes and improving code quality across teams.",
      author: "Emily Rodriguez",
      authorAvatar: "ER",
      date: "1 week ago",
      readTime: "10 min read",
      category: "AI/ML",
      likes: 189,
      comments: 27,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tags: ["AI", "Code Review", "Automation"],
    },
  ];

  const trendingTopics = [
    "TypeScript",
    "Docker",
    "GraphQL",
    "Next.js",
    "Tailwind CSS",
  ];

  const Navbar = () => (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-white">
              DEV<span className="text-purple-500">BLOG</span>
            </h1>
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setCurrentPage("home")}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
              >
                <Home size={18} />
                <span>Home</span>
              </button>
              <button
                onClick={() => setCurrentPage("posts")}
                className="text-gray-300 hover:text-white transition"
              >
                Posts
              </button>
              <button className="text-gray-300 hover:text-white transition">
                Categories
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-900 rounded-lg px-4 py-2">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="bg-transparent border-none outline-none ml-2 text-gray-300 placeholder-gray-500 w-64"
              />
            </div>

            {isLoggedIn ? (
              <>
                <button
                  onClick={() => setCurrentPage("create")}
                  className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
                >
                  <Edit size={18} />
                  <span className="hidden md:inline">New Post</span>
                </button>
                <button
                  onClick={() => setCurrentPage("profile")}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
                >
                  <User size={18} />
                </button>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
                >
                  <LogOut size={18} />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setCurrentPage("login")}
                  className="text-gray-300 hover:text-white transition"
                >
                  Log In
                </button>
                <button
                  onClick={() => setCurrentPage("signup")}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition border-2 border-purple-500"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );

  const BlogCard = ({ post }) => (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-purple-400 text-sm font-semibold">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm">{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-400 cursor-pointer transition">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              {post.authorAvatar}
            </div>
            <div>
              <p className="text-sm text-white font-medium">{post.author}</p>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-400 hover:text-red-500 transition">
              <Heart size={18} />
              <span className="text-sm">{post.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500 transition">
              <MessageCircle size={18} />
              <span className="text-sm">{post.comments}</span>
            </button>
            <button className="text-gray-400 hover:text-yellow-500 transition">
              <Bookmark size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-purple-900 to-pink-900 rounded-2xl p-12 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to DevBlog
          </h2>
          <p className="text-xl text-gray-200 mb-6 max-w-2xl">
            Discover the latest insights, tutorials, and news from the world of
            software development
          </p>
          <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Start Reading
          </button>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat.toLowerCase())}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
                selectedCategory === cat.toLowerCase()
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-6">
            Latest Articles
          </h3>
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="text-purple-500" size={20} />
              <h4 className="text-lg font-bold text-white">Trending Topics</h4>
            </div>
            <div className="space-y-2">
              {trendingTopics.map((topic, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 transition"
                >
                  #{topic}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="text-purple-500" size={20} />
              <h4 className="text-lg font-bold text-white">Recent Activity</h4>
            </div>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-gray-300">
                  <span className="font-semibold text-white">John Doe</span>{" "}
                  commented on "React Hooks Guide"
                </p>
                <p className="text-gray-500 text-xs mt-1">5 minutes ago</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Jane Smith</span>{" "}
                  liked your post
                </p>
                <p className="text-gray-500 text-xs mt-1">1 hour ago</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Alex Wong</span>{" "}
                  published a new article
                </p>
                <p className="text-gray-500 text-xs mt-1">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LoginPage = () => (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Welcome Back
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder="••••••••"
            />
          </div>
          <button
            onClick={() => {
              setIsLoggedIn(true);
              setCurrentPage("home");
            }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Log In
          </button>
        </div>
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?
          <button
            onClick={() => setCurrentPage("signup")}
            className="text-purple-400 hover:text-purple-300 ml-1"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );

  const SignUpPage = () => (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Create Account
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder="••••••••"
            />
          </div>
          <button
            onClick={() => {
              setIsLoggedIn(true);
              setCurrentPage("home");
            }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>
        </div>
        <p className="text-center text-gray-400 mt-4">
          Already have an account?
          <button
            onClick={() => setCurrentPage("login")}
            className="text-purple-400 hover:text-purple-300 ml-1"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );

  const CreatePostPage = () => (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-8">Create New Post</h2>
      <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
        <div className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Title</label>
            <input
              type="text"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder="Enter your post title..."
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Category</label>
            <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500">
              <option>JavaScript</option>
              <option>React</option>
              <option>Node.js</option>
              <option>AI/ML</option>
              <option>DevOps</option>
              <option>Web Design</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Tags</label>
            <input
              type="text"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder="Add tags separated by commas..."
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Content</label>
            <textarea
              rows="12"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              placeholder="Write your post content here..."
            ></textarea>
          </div>
          <div className="flex space-x-4">
            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition">
              Publish Post
            </button>
            <button
              onClick={() => setCurrentPage("home")}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {currentPage === "home" && <HomePage />}
      {currentPage === "login" && <LoginPage />}
      {currentPage === "signup" && <SignUpPage />}
      {currentPage === "create" && <CreatePostPage />}
    </div>
  );
};

export default DevBlog;
