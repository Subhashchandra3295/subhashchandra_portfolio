import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import { useLanguage } from "../context/LanguageContext";

const Resume = () => {
  const { t } = useLanguage();

  const introParagraphs = t("resume.introParagraphs");
  const strengths = t("resume.strengths");
  const experiences = t("resume.experiences");
  const extras = t("resume.extras");
  const heroDesktop = t("resume.heroDesktop");
  const heroMobile = t("resume.heroMobile");

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        window.open(fileURL, "_blank");
        // alink.href = 'Resume.pdf';
        alink.click();
      });
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>{`Subhashchandra | ${t("resume.title")}`}</title>
        <meta
          name="description"
          content={t("home.metaDescription")}
        />
        <link rel="icon" href="/SB.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">{t("resume.title")}</h2>
        <div className="bg-[#d0d4d6] dark:bg-slate-800 my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Subhashchandra Borad</h2>
          <div className="flex">
            <a
              className="cursor-pointer"
              onClick={() => onButtonClick()}
              target="_blank"
              rel="noreferrer"
            >
              <BsDownload size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/subhashchandra-borad/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Subhashchandra3295"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              {Array.isArray(heroDesktop) ? heroDesktop[0] : ""} <span className="px-1">|</span>{" "}
              {Array.isArray(heroDesktop) ? heroDesktop[1] : ""} <span className="px-1">|</span>{" "}
              {Array.isArray(heroDesktop) ? heroDesktop[2] : ""}
            </p>
          </div>
          <div className="block sm:hidden">
            <p>{Array.isArray(heroMobile) ? heroMobile[0] : ""}</p>
            <p className="py-2">{Array.isArray(heroMobile) ? heroMobile[1] : ""}</p>
            <p>{Array.isArray(heroMobile) ? heroMobile[2] : ""}</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">
            {t("resume.introHeadline")}
          </p>
          <br />

          {Array.isArray(introParagraphs) &&
            introParagraphs.map((paragraph) => (
              <React.Fragment key={paragraph}>
                <p>{paragraph}</p>
                <br />
              </React.Fragment>
            ))}

          <p className="font-bold text-lg">{t("resume.tableTitle")}</p>
          <ul className="list-disc list-outside px-7 py-2 leading-relaxed">
            {Array.isArray(strengths) && strengths.map((point) => <li key={point}>{point}</li>)}
          </ul>
          <br />

          <p>{t("resume.education")}</p>
          <br />

          <p>{t("resume.closing")}</p>
          <br />
        </div>
        <h5 className="text-center underline text-[18px] py-4">
          {t("resume.professionalExperience")}
        </h5>

        {Array.isArray(experiences) &&
          experiences.map((experience) => (
            <div className="py-6" key={`${experience.company}-${experience.role}`}>
              <p className="italic">
                <span className="font-bold italic">{experience.company}</span>
                <span className="px-2">|</span>
                {experience.location}
              </p>
              <p className="py-1 italic">{experience.role}</p>
              <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

        <h5 className="text-center underline text-[18px] py-4">
          {t("resume.extrasTitle")}
        </h5>

        <div className="py-6">
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            {Array.isArray(extras) && extras.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </div>

      
    </motion.div>
  );
};

export default Resume;
