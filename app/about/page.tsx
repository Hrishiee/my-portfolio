import { Navbar } from "../components/navbar"
import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I am a passionate Frontend Developer with expertise in JavaScript, React.js, and Next.js.
                  Currently, I'm expanding my skills by learning TypeScript and deepening my knowledge of Next.js.
                </p>
                <p>
                  My journey in web development has equipped me with a strong foundation in modern frontend
                  technologies and best practices. I enjoy creating responsive, user-friendly interfaces
                  and am constantly learning new technologies to enhance my development skills.
                </p>
                <div className="pt-4">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
             <Image
  src="/photo.jpg"
  alt="Your photo"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-contain rounded-lg"
/>

            </div>  
          </div>
        </div>
      </section>
    </main>
  )
}
