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
  const resumeProjects = t("resume.projects");
  const extras = t("resume.extras");
  const heroDesktop = t("resume.heroDesktop");

  const downloadFile = (path, filename) => {
    fetch(path).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = filename;
        alink.click();
        window.URL.revokeObjectURL(fileURL);
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
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px] pb-16">
        <h2 className="text-center">{t("resume.title")}</h2>

        <div className="bg-bg-surface-light dark:bg-bg-surface border border-border-subtle-light dark:border-border-subtle shadow-xl shadow-gray-400 dark:shadow-black/40 rounded-xl my-4 p-6 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-center sm:text-left bg-accent-gradient bg-clip-text text-transparent">
            Subhashchandra Borad
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => downloadFile("/Resume.pdf", "Subhashchandra-Borad-Resume-EN.pdf")}
              aria-label="Download resume (English)"
              className="flex items-center gap-1.5 rounded-full shadow-lg shadow-gray-400 dark:shadow-black/40 px-4 py-3 cursor-pointer hover:scale-110 hover:shadow-glow ease-in duration-300 text-sm font-semibold"
            >
              <BsDownload size={16} /> EN
            </button>
            <button
              type="button"
              onClick={() => downloadFile("/Resume-DE.pdf", "Subhashchandra-Borad-Resume-DE.pdf")}
              aria-label="Download resume (German)"
              className="flex items-center gap-1.5 rounded-full shadow-lg shadow-gray-400 dark:shadow-black/40 px-4 py-3 cursor-pointer hover:scale-110 hover:shadow-glow ease-in duration-300 text-sm font-semibold"
            >
              <BsDownload size={16} /> DE
            </button>
            <a
              href="https://www.linkedin.com/in/subhashchandra-borad/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-black/40 p-3 cursor-pointer hover:scale-110 hover:shadow-glow ease-in duration-300">
                <FaLinkedinIn size={18} />
              </div>
            </a>
            <a
              href="https://github.com/Subhashchandra3295"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-black/40 p-3 cursor-pointer hover:scale-110 hover:shadow-glow ease-in duration-300">
                <FaGithub size={18} />
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 py-4">
          {(Array.isArray(heroDesktop) ? heroDesktop : []).map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full border border-border-subtle-light dark:border-border-subtle bg-bg-surface-light dark:bg-bg-surface text-sm font-semibold uppercase tracking-wider text-accent"
            >
              {item}
            </span>
          ))}
        </div>

        <div>
          <div className="flex justify-center py-2">
            <p className="inline-block text-center text-lg sm:text-xl font-bold px-6 py-3 rounded-full border border-accent/40 bg-bg-surface-light dark:bg-bg-surface bg-accent-gradient bg-clip-text text-transparent">
              {t("resume.introHeadline")}
            </p>
          </div>

          {Array.isArray(introParagraphs) &&
            introParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="py-2 text-text-muted-light dark:text-text-muted leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

          <div className="py-6">
            <p className="text-sm uppercase tracking-widest text-accent">{t("resume.tableTitle")}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {Array.isArray(strengths) &&
                strengths.map((group) => (
                  <div
                    key={group.category}
                    className="p-5 rounded-xl shadow-xl shadow-gray-400 dark:shadow-black/40 bg-bg-surface-light dark:bg-bg-surface border border-border-subtle-light dark:border-border-subtle hover:shadow-glow-sm hover:scale-[1.02] transition-all duration-300"
                  >
                    <h3 className="text-base font-semibold mb-3 text-text-primary-light dark:text-text-primary">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-4 p-5 rounded-xl bg-bg-surface-light dark:bg-bg-surface border border-border-subtle-light dark:border-border-subtle">
            <p className="text-text-muted-light dark:text-text-muted leading-relaxed">
              {t("resume.education")}
            </p>
            <p className="mt-3 text-text-primary-light dark:text-text-primary font-medium leading-relaxed">
              {t("resume.closing")}
            </p>
          </div>
        </div>

        <div className="pt-10 pb-2 text-center">
          <span className="inline-block text-sm tracking-widest uppercase text-accent">
            {t("resume.professionalExperience")}
          </span>
          <div className="mx-auto mt-2 h-[3px] w-16 bg-accent-gradient rounded-full" />
        </div>

        <div className="mt-2">
          {Array.isArray(experiences) &&
            experiences.map((experience) => (
              <div
                key={`${experience.company}-${experience.role}`}
                className="relative pl-6 py-6 border-l-2 border-border-subtle-light dark:border-border-subtle"
              >
                <span className="absolute -left-[7px] top-8 w-3 h-3 rounded-full bg-accent-gradient" />
                <div className="p-5 rounded-xl shadow-xl shadow-gray-400 dark:shadow-black/40 bg-bg-surface-light dark:bg-bg-surface border border-border-subtle-light dark:border-border-subtle hover:shadow-glow-sm transition-shadow duration-300">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary">
                      {experience.company}
                    </h3>
                    <span className="text-sm text-text-muted-light dark:text-text-muted">
                      {experience.location}
                    </span>
                  </div>
                  <p className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-accent">
                    {experience.role}
                  </p>
                  <ul className="list-disc list-outside pl-5 mt-4 space-y-2 text-text-muted-light dark:text-text-muted leading-relaxed">
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>

        {Array.isArray(resumeProjects) && resumeProjects.length > 0 && (
          <>
            <div className="pt-10 pb-2 text-center">
              <span className="inline-block text-sm tracking-widest uppercase text-accent">
                {t("resume.projectsTitle")}
              </span>
              <div className="mx-auto mt-2 h-[3px] w-16 bg-accent-gradient rounded-full" />
            </div>

            <div className="mt-2 space-y-4">
              {resumeProjects.map((project) => (
                <div
                  key={project.title}
                  className="p-5 rounded-xl shadow-xl shadow-gray-400 dark:shadow-black/40 bg-bg-surface-light dark:bg-bg-surface border border-border-subtle-light dark:border-border-subtle hover:shadow-glow-sm transition-shadow duration-300"
                >
                  <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-accent">
                    {project.program} | {project.university}
                  </p>
                  <ul className="list-disc list-outside pl-5 mt-4 space-y-2 text-text-muted-light dark:text-text-muted leading-relaxed">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="pt-10 pb-2 text-center">
          <span className="inline-block text-sm tracking-widest uppercase text-accent">
            {t("resume.extrasTitle")}
          </span>
          <div className="mx-auto mt-2 h-[3px] w-16 bg-accent-gradient rounded-full" />
        </div>

        <div className="py-2 p-5 rounded-xl bg-bg-surface-light dark:bg-bg-surface border border-border-subtle-light dark:border-border-subtle">
          <ul className="list-disc list-outside pl-5 space-y-2 text-text-muted-light dark:text-text-muted leading-relaxed">
            {Array.isArray(extras) && extras.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </div>

      
    </motion.div>
  );
};

export default Resume;
