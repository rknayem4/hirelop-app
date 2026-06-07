export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div className="relative flex flex-col items-center">
        {/* Glow */}
        <div className="absolute h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

        {/* Logo */}
        <h1 className="relative z-10 mb-8 text-5xl font-bold">
          <span className="text-blue-500">hire</span>
          <span className="text-orange-500">loop</span>
        </h1>

        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-zinc-700" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-violet-500 border-r-blue-500" />
        </div>

        {/* Text */}
        <p className="mt-6 animate-pulse text-sm text-default-500">
          Loading amazing opportunities...
        </p>
      </div>
    </div>
  );
}
