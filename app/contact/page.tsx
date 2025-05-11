import { Navbar } from "../components/navbar"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Get in Touch
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                   chakravartyhrishi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    9365371611
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GitHub</h3>
                  <a
  href="https://github.com/Hrishiee"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
>
  github.com/Hrishiee
</a>

                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/hrishikesh-chakravartty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    linkedin.com/in/hrishikesh-chakravartty
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 