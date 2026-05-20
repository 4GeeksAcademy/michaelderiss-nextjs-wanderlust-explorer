export default function ProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 dark:from-black dark:via-zinc-900 dark:to-zinc-800 p-8">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl max-w-md w-full p-10 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500 flex items-center justify-center mb-6">
          <span className="text-4xl font-bold text-white">LM</span>
        </div>
        <h1 className="text-2xl font-extrabold mb-2 text-zinc-800 dark:text-zinc-100">Lea Moreau</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4">Product Manager & Travel Enthusiast</p>
        <div className="w-full flex flex-col items-center mt-6">
          <span className="text-lg font-semibold text-pink-600">Saved Favorites</span>
          <span className="text-3xl font-bold text-yellow-600 mt-1">0</span>
        </div>
      </div>
    </div>
  );
}
