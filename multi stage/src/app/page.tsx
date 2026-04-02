import Image from "next/image"

export default function RootDockPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-black dark:to-zinc-900 font-sans">
      
      <main className="w-full max-w-2xl rounded-2xl shadow-xl bg-white dark:bg-zinc-950 p-10 flex flex-col items-center sm:items-start gap-8 transition-all">
        
        <div className="flex items-center gap-3">
          <Image
            src="/next.svg"
            alt="Next Logo"
            width={90}
            height={18}
            className="dark:invert"
            priority
          />
          <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
            Running
          </span>
        </div>

        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white leading-tight">
            Docker Multi-Stage Setup Is Working 🚀
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-lg">
            Your Next.js application has been successfully built and deployed inside a container using a multi-stage Docker build.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium">
            Production Mode
          </span>

          <span className="px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-medium">
            Node 22
          </span>

          <span className="px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-medium">
            Next.js
          </span>
        </div>

        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800" />

        <div className="text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
          Containerized Build • Optimized Image • Ready For Deployment
        </div>

      </main>
    </div>
  )
}