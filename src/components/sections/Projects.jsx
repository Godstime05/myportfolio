import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* VTpass Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">VTpass Integration</h3>
              <p className="text-gray-400 mb-4">
                Integrated VTpass services for seamless bill payments, airtime, 
                and data subscription automation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Spring Boot", "Java", "REST API", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* smsApp Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">smsApp for Banks</h3>
              <p className="text-gray-400 mb-4">
                Developed an SMS Alert service for multiple banks, 
                leveraging MySQL Server and Sybase databases for real-time transaction alerts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Spring Boot", "MySQL", "Sybase"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Godstime05/smsApp"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

                        {/* My Portfolio Website */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">My Portfolio Website</h3>
              <p className="text-gray-400 mb-4">
                Designed and deployed my portfolio website using React Vite and Tailwindcss. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Javascript", "ReactJs", "Tailwind CSS", ""].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://myportfolio-gtf.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Vendor Management System */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Vendor Management System</h3>
              <p className="text-gray-400 mb-4">
                Integrated a robust vendor management system into core banking 
                infrastructure using Excel-based import templates.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Spring Boot", "Excel Processing", "REST API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};






// import { RevealOnScroll } from "../RevealOnScroll";

// export const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             {" "}
//             Featured Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
//               <h3 className="text-xl font-bold mb-2"> Cloud Platform</h3>
//               <p className="text-gray-400 mb-4">
//                 Scalable cloud infrastructure management with real-time
//                 monitoring and automated scaling.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
//                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">AI Analytics Dashboard</h3>
//               <p className="text-gray-400 mb-4">
//                 ML-powered data visualization platform with predictive analytics
//                 and interactive reports.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>

//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
//               <p className="text-gray-400 mb-4">
//                 Full-stack e-commerce with modern UI, secure payment
//                 integration, and customizable product inventory.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map(
//                   (tech) => (
//                     <span
//                       key={tech}
//                       className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                     >
//                       {tech}
//                     </span>
//                   )
//                 )}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>

//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">Sms Application</h3>
//               <p className="text-gray-400 mb-4">
//                 Scalable chat platform supporting real-time messaging, presence,
//                 and group chat features.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center ">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };
