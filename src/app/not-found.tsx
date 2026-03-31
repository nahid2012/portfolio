import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Gradient number */}
      <h1
        className="text-[10rem] sm:text-[14rem] font-black leading-none select-none"
        style={{
          background: "linear-gradient(135deg, #3b82f6, #a855f7, #06b6d4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        404
      </h1>

      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Looks like this page drifted off into the void. Let&apos;s get you back
        to solid ground.
      </p>

      <Link
        href="/"
        className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
        style={{
          background: "linear-gradient(135deg, #3b82f6, #a855f7)",
          boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
