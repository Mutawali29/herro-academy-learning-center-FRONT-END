import { SelectedPage, ClassType } from "@/shared/types";

import actProgramm from "@/assets/actProgramm.jpg";
import apProgram from "@/assets/apProgramm.jpeg";
import ibProgram from "@/assets/ibProgram.jpg";
import toeflProgram from "@/assets/toeflProgram.png";
import essayProgram from "@/assets/essayWriting.jpg";
import stemProgram from "@/assets/stemEnrichment.jpg";

import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Intensive SAT/ACT Prep",
    description:
      "This class focuses on preparing students for the most common university entrance exams in the United States, SAT and ACT. Students will receive training on test strategies, practice questions, and in-depth understanding of exam content.",
    image: actProgramm,
  },
  {
    name: "Advanced Placement (AP) Courses",
    image: apProgram,
  },
  {
    name: "International Baccalaureate (IB) Preparation",
    description:
      "This class is designed for students taking the IB program, covering subjects like IB Mathematics, IB Physics, and IB Literature. Focus on mastering the IB curriculum and preparing for final exams.",
    image: ibProgram,
  },
  {
    name: "IELTS/TOEFL Preparation",
    description:
      "For international students needing to demonstrate their English proficiency, this class offers intensive training for the IELTS and TOEFL tests, focusing on reading, writing, listening, and speaking skills.",
    image: toeflProgram,
  },
  {
    name: "College Application Essay Writing",
    image: essayProgram,
  },
  {
    name: "STEM Enrichment Programs",
    description:
      "Designed for students interested in science, technology, engineering, and mathematics, this program includes classes such as Coding and Robotics, Advanced Mathematics, and Scientific Research Methods.",
    image: stemProgram,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-300 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            Here are six classes suitable for Hero Academy's tutoring center, designed to cater to various student needs in preparing for university entrance
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;