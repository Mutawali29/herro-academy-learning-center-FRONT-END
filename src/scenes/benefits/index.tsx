import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import graduates from "@/assets/graduates.png";

import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Modern and comfortable facilities to support your learning process. A conducive environment to focus and develop your academic potential.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Hundreds of classes covering a wide range of topics designed to meet your learning needs, from basic subjects to university entrance exam preparation.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "A team of experts and professional trainers ready to guide you towards academic success and acceptance into top universities.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="py-20 bg-primary-100">
      <div className="mx-auto min-h-full w-5/6">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>Hero Academy (Tutoring Center)</HText>
            <p className="my-5 text-sm">
              Empowering Future Leaders.
              Hero Academy provides exceptional tutoring services, experienced mentors,
              and a supportive learning environment to guide you towards academic excellence.
              We are committed to nurturing your potential and helping you achieve your educational goals
              with confidence and ease.
              Join the ranks of our successful students who have been accepted into top universities worldwide.
            </p>
          </motion.div>

          {/* BENEFITS */}
          <motion.div
            className="mt-5 flex flex-col items-center gap-8 md:flex-row md:justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={container}
          >
            {benefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>

          {/* GRAPHICS AND DESCRIPTION */}
          <div className="mt-16 flex flex-col items-center gap-20 md:flex-row md:justify-between">
            {/* GRAPHIC */}
            <img
              className="mx-auto"
              alt="benefits-page-graphic"
              src={graduates}
              style={{ width: '450px', height: 'auto' }} // Atur ukuran sesuai kebutuhan
            />


            {/* DESCRIPTION */}
            <div className="w-full md:w-1/2">
              {/* TITLE */}
              <div className="relative">
                
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <HText>
                      THOUSANDS OF HERO ACADEMY GRADUATES SHINING AT{" "}
                      <span className="text-primary-500">TOP UNIVERSITIES</span>
                    </HText>
                  </motion.div>
                
              </div>

              {/* DESCRIPT */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="my-5">
                  At Hero Academy, our dedicated approach has helped countless students gain admission to prestigious universities worldwide. 
                  With personalized guidance and top-notch resources, we support each student in achieving their academic goals and unlocking their full potential.
                </p>
                <p className="mb-5">
                  Our commitment is evident in the numerous success stories of our alumni who now thrive at renowned institutions globally. 
                  Join the ranks of these accomplished individuals and take the first step toward your academic future with us.
                </p>
              </motion.div>

              {/* BUTTON */}
              <div className="relative mt-16">               
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
