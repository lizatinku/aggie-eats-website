import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#002855] to-[#0A1733] text-white p-6">
      {/* Hero Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Welcome to <span className="text-[#B3A369]">Aggie Eats</span> 🍽️
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Providing free, nutritious meals to UC Davis students with a pay-what-you-want model.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/menu">
            <button className="bg-[#B3A369] text-[#002855] px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#C4A76B] transition-transform transform hover:scale-105">
              Weekly Menu
            </button>
          </Link>

          <Link href="/map">
            <button className="bg-transparent border-2 border-[#B3A369] text-[#B3A369] px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#B3A369] hover:text-[#002855] transition-transform transform hover:scale-105">
              📍 See Where We Are Today
            </button>
          </Link>

          <Link href="/feedback-form">
            <button className="bg-[#B3A369] text-[#002855] px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#C4A76B] transition-transform transform hover:scale-105">
              💬 Give Feedback
            </button>
          </Link>
        </div>
      </div>

      {/* Subtle Animated Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#002855] opacity-30 pointer-events-none"></div>
    </div>
  );
}
