import { useState } from "react";
import About from "./about.jsx";
import Projects from "./projects.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Background gradient */}
      <div className="bg-gradient-to-b from-[#462995] from-5% via-[#CF8F75] via-20% to-[#F0EFEC] to-90% min-h-screen dark:from-gray-800 dark:to-gray-900 text-black dark:text-white min-h-screen transition-colors duration-500">
        {/* Header / Navbar */}
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <nav className="flex items-center justify-between w-auto px-6 py-3 bg-[#0a0a23]/90 backdrop-blur-md rounded-full shadow-lg">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                🌸
              </div>
            </div>

            {/* Links */}
            <ul className="flex items-center space-x-6 ml-6">
              <li>
                <a href="#about" className="text-white hover:text-gray-300">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white hover:text-gray-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#resume" className="text-white hover:text-gray-300">
                  Resume
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center space-x-3 ml-6">
              <a
                href="#"
                className="bg-white text-black px-2 py-1 rounded-md font-semibold text-sm"
              >
                in
              </a>
            </div>
          </nav>
        </header>

        {/*
 <section
  id="home"
  className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#02656b] via-[#ecb99e] to-white dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-700"
>
  {/* Greeting 
  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
    Hi, I’m <span className="text-yellow-300">Anjali</span> — a Frontend Developer
  </h1>

  {/* Tagline 
  <p className="max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed mb-8">
    I design with empathy, code with curiosity, and debug with caffeine ☕
  </p>

  {/* Profile Image *
  <img
    src="/profile.jpg"  // 👉 replace with your image
    alt="Profile"
    className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-8"
  />

  {/* Scroll Button *
  <a
    href="#about"
    className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full shadow-md hover:scale-105 transition"
  >
    Scroll to know more
    <span className="w-6 h-6 flex items-center justify-center border border-dashed border-black rounded-full animate-bounce">
      ↓
    </span>
  </a>
</section> */}

        {/* Main Sections */}
        <main className="pt-20 space-y-32">
          {/* Home Section */}
          <section
            id="home"
            className="h-screen flex flex-col items-center justify-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-white drop-shadow-lg mb-6">
              Hello Beautiful People{" "}
              <span className="inline-block animate-bounce">🌸</span>
            </h1>
            <br />

            <p className=" text-white/80 font-sans ... text-xl ">
              I’m Anjali, I design with empathy, code with curiosity, and debug with caffeine.☕
            </p>

            {/* Scroll Button */}
  <a
    href="#about"
    className=" absolute bottom-6 flex items-center gap-4 px-6 py-3  bg-white/90 text-black rounded-full shadow-md hover:scale-105 transition left-1/2 transform -translate-x-1/2 "
  >
    Scroll to know more
    <span className=" w-6 h-6 flex items-center justify-center border border-dashed border-black rounded-full animate-bounce">
      ↓
    </span>
  </a>
          </section>

          {/* About Section */}
          <About />

          {/* Projects Section */}
          <Projects />

          {/* Contact Section */}
          <section
            id="contact"
            className="h-screen flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-5xl font-bold mb-4">Contact Me</h2>
            <p className="max-w-xl text-xl mb-4">
              Get in touch via email or social media.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:anjalinagare20@gmail.com"
                className="inline-block"
              >
                <button className="px-4 py-2 bg-white dark:bg-gray-800 rounded shadow hover:shadow-lg transition">
                  Email
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/anjali-nagare-53b818190"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-4 py-2 bg-white dark:bg-gray-800 rounded shadow hover:shadow-lg transition">
                  LinkedIn
                </button>
              </a>
            </div>
  
 
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
