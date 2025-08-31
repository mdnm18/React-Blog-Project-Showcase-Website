import React from "react";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-gray-900 dark:bg-black text-white px-4 py-2 rounded-md text-sm font-semibold mb-6 shadow-lg">
              FULL-STACK DEVELOPER
            </span>

            {/* 3D Name Effect */}
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white relative tracking-tighter my-4">
              <span className="absolute -z-10 top-1.5 left-1.5 lg:top-2 lg:left-2 w-full text-red-500">
                Md Nayaj Mondal
              </span>
              <span className="absolute -z-20 top-0.5 left-0.5 lg:top-1 lg:left-1 w-full text-blue-500">
                Md Nayaj Mondal
              </span>
              <span className="relative">Md Nayaj Mondal</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
              A proactive and driven Computer Science student with a passion for
              turning complex ideas into functional, elegant solutions.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1KDtIu3nm8pbY25GtuXzLAB42UnxVd3k7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-md hover:bg-red-700 transition-transform hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
                Download CV
              </a>
              <a
                href="https://my-portfolio-website-eight-pi.vercel.app/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 text-white font-bold px-6 py-3 rounded-md hover:bg-black transition-transform hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Hire Me
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                className="rounded-full w-80 h-80 md:w-96 md:h-96 object-cover border-8 border-white dark:border-gray-800 shadow-2xl"
                src="/IMG_1030.DNG"
                alt="Md Nayaj Mondal"
              />
              {/* Red outline circle */}
              <div className="absolute inset-0 rounded-full border-4 border-red-500 transform rotate-45"></div>
              <div className="absolute inset-0 rounded-full border-4 border-red-500 transform -rotate-45 scale-95"></div>

              {/* Floating Tags */}
              <div className="absolute top-8 -left-4 sm:-left-12 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-3 text-sm font-semibold flex items-center gap-2 transform -rotate-12">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
                &lt;/&gt; Full Stack
              </div>
              <div className="absolute bottom-8 -right-4 sm:-right-16 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-3 text-sm font-semibold flex items-center gap-2 transform rotate-12">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                1+ Years Exp.
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 flex justify-center lg:justify-start gap-8 sm:gap-12">
            <div>
              <p className="text-4xl font-bold text-red-600">3+</p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">2</p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                OSS Contribs
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-600">1+</p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Years Exp.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              Connect with me:
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/mdnm18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/md-nayaj-mondal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
