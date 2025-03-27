import React from "react";
import resumePDF from "/resume.pdf"; // Place your PDF inside public/

const Resume = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">My Resume</h2>
      <a
        href={resumePDF}
        download="Inibehe_Ekanem_Resume.pdf"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
