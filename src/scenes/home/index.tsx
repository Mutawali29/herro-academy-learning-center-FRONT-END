import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";

import heroHub9 from "@/assets/heroHub.png";
import teachingHero from "@/assets/teachingHero.jpg";

import scholarshipSponsor from "@/assets/scholarship.png";
import nikeSponsor from "@/assets/nikeSponsor.png";
import intelSponsor from "@/assets/intelSponsor.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="relative bg-black py-10 md:h-full md:pb-0">
      {/* IMAGE BACKGROUND */}
      <div className="absolute inset-0 h-[85vh] w-full opacity-35">
        <img
          alt="home-pageGraphic"
          src={teachingHero}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT CONTAINER */}
      <motion.div
        className="relative z-10 mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              
                <img alt="home-page-text" src={heroHub9} />
              
            </div>

            <p className="mt-8 text-sm text-blue-500">
              Incomparable Learning. Exceptional Educational Experiences. 
              Premier Tutoring to Achieve the Academic Success You Aspire To. 
              Unlock Your True Potential Today
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-primary-300"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[130px] w-full bg-white py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="scholarship-sponsor" src={scholarshipSponsor} />
              <img alt="nike-sponsor" src={nikeSponsor} />
              <img alt="intel-sponsor" src={intelSponsor} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
