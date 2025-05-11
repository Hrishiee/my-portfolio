import { Navbar } from "./components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm Hrishikesh Chakravartty
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Frontend Developer specializing in JavaScript, React.js, and Next.js
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Hrishiee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hrishikesh-chakravartty/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Project 1 */}
            <a
              href="https://tic-tac-toe-alpha-virid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Tic toe Game 
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
               A modern implementation of the classic Tic-Tac-Toe game built with React and styled with Tailwind CSS.
              </p>
            </a>

            {/* Project 2 */}
            <a
              href="https://todo-app-three-black-93.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Project 2
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A modern and clean todo application built with React and CSS. This app helps you manage your daily tasks efficiently with a beautiful user interface.
              </p>
            </a>

          </div>
        </div>
      </section>
    </main>
  )
}
