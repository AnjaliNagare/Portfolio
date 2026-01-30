export default function About() {
    return (
        <section id="about" className="min-h-screen grid place-items-center px-6 py-24">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="size-48 sm:size-56 md:size-64 rounded-full bg-gradient-to-br from-purple-400 via-fuchsia-400 to-amber-300 p-1 shadow-xl">
              <div className="size-full rounded-full bg-white dark:bg-slate-900 grid place-items-center">
                <img
    src="/profile.jpg"
    alt="My profile photo"
    width={256}
    height={256}
    className="w-full h-full object-cover rounded-full"
  />
              </div>
            </div>
          </div>
        </div>
         <div className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">About Me</h2>
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            I design with empathy and build with intent. My work balances thoughtful UX with accessible, performant code.
            I love bringing playful micro-interactions to life and crafting design systems that scale.
          </p>
          <p className="mt-4 text-slate-700 dark:text-slate-200 leading-relaxed">
            Outside of pixels, you&apos;ll find me exploring color palettes, sketching ideas, and sipping on chai while tinkering with new web APIs.
          </p>
        </div>
        
       </div> 
        </section>
    );
}
