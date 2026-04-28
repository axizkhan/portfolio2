"use client";
import React, { useEffect, useState } from "react";
import { House } from "lucide-react";
import { Folder } from "lucide-react";
import { Briefcase } from "lucide-react";
import { Wrench } from "lucide-react";

import { GraduationCap } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Mail } from "lucide-react";
import { Smartphone } from "lucide-react";
import { MapPin } from "lucide-react";
import useScreenSize from "@/hooks/screenSize";
import RotatingText from "./components/animation/rotate-text";
import toast from "react-hot-toast";

type EmptyField = {
  email: boolean;
  name: boolean;
  subject: boolean;
  message: boolean;
};

const projectData = [
  {
    id: 1,
    name: "SplitWise",
    img: {
      url: "./splitly.png",
      alt: "Splitwise",
    },
    description:
      "Built an expense-sharing app where users can create groups, split bills, track balances, and settle debts with optimized transaction minimization logic. Designed scalable backend workflows for real-time balance updates and expense management.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Tailwind",
    ],
    links: [
      { type: "github", url: "https://github.com/axizkhan/splitwise_backend" },
      { type: "live", url: "https://splitlybyaxiz.netlify.app/" },
    ],
    status: "live",
  },
  {
    id: 2,
    name: "Communication Library",
    img: {
      url: "./communicationLibrary.png",
      alt: "communication-library",
    },
    description:
      "Designed and developed a backend communication library inspired by platforms like Twilio and SendGrid. It enables multi-channel messaging (Email, SMS, Push) with features such as provider failover, queue-based bulk delivery, retry mechanisms, rate limiting, and analytics for tracking message status and performance.",
    technologies: [
      "React",
      "Express",
      "MongoDb",
      "Node.js",
      "Tailwind CSS",
      "RabbitMQ",
      "TurboRepo",
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/axizkhan/commication-library",
      },
      // { type: "live", url: "https://quantum-shop.vercel.app" },
    ],
    status: "developing",
  },
  {
    id: 3,
    name: "Code-Verse",
    img: {
      url: "./codeVerse.png",
      alt: "Nexus Ai Orchestrator",
    },
    description:
      "Built a MERN stack learning platform offering tutorials across multiple programming languages and technologies. Implemented secure authentication/authorization, structured course content management, and a user-friendly interface for accessing coding tutorials efficiently.",
    technologies: ["React", "MongoDB", "CSS", "Node.js", "Express"],
    links: [
      { type: "github", url: "https://github.com/yourusername/chat-engine" },
      { type: "link", url: "https://code-verse-n02f.onrender.com/" },
    ],
    status: "live",
  },
  {
    id: 4,
    name: "Mobi-Tech",
    img: {
      url: "./dummy.png",
      alt: "Nexus Ai Orchestrator",
    },
    description:
      "Built a MERN-based e-commerce platform for mobile products with secure authentication using Passport.js, role-based access control, and authorization workflows. Implemented product management, user accounts, and seamless shopping functionality for an end-to-end buying experience.",
    technologies: ["React", "MongoDB", "Express", "Node.js", "Multer"],
    links: [
      // { type: "github", url: "https://github.com/yourusername/physics-cpp" },
      // { type: "live", url: "https://cpp-physics.demo" },
    ],
    status: "live",
  },
];

const educationData = [
  {
    level: "Graduation",
    degreeName: "Bachelor of Computer Application",
    instituteName: "Mohan Lal Sukhadiya University",
    duration: "2022 - 2025",
    description:
      "Specializing in Software Architecture and Computer Application. Relevant coursework: Data Structures, Algorithms, Software Desing, C, C++, Java, Assembly, and Database Management.",
  },
  {
    level: "Senior Secondary (12th)",
    degreeName: "Commerce with Economics",
    instituteName: "Kidz Planet Senior Secondary School",
    duration: "2020 - 2022",
    description:
      "Focused on Accounts, Business, and Economics. Graduated with Distinction and Perfect Score in Accounts.",
  },
  {
    level: "Secondary (10th)",
    degreeName: "Secondary Education",
    instituteName: "Mohammdiya Secondary School",
    duration: "2008 - 2020",
    description: "Foundational studies in Science and Mathematics.",
  },
];

const experienceData = [
  {
    companyName: "Helper Setu",
    jobRole: "Full Stack Engineer Intern",
    duration: "August/2025 - Present",
    jobDescription:
      "Leading the transition from a monolithic architecture to a microservices-based system. Responsible for building real-time data pipelines and optimizing LLM-based internal tools to improve developer productivity by 40%.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "RabbitMQ",
      "React",
      "Javascript",
      "Express",
      "MongoDB",
      "Tailwind",
      "Shedcn",
    ],
  },
  {
    companyName: "Mavrik",
    jobRole: "Frontend Intern",
    duration: "Jun/2025 - July/2025",
    jobDescription:
      "Architected and maintained scalable REST APIs and managed high-traffic database clusters. Optimized SQL queries and implemented Redis caching to reduce server response time by 200ms.",
    technologies: ["React", "HTML5", "CSS3", "Tailwind"],
  },
];

const nav = [
  { title: "home", icon: House, href: "#home" },
  { title: "experience", icon: Briefcase, href: "#experience" },
  { title: "projects", icon: Folder, href: "#projects" },
  { title: "skills", icon: Wrench, href: "#skills" },
  { title: "education", icon: GraduationCap, href: "#education" },
  { title: "contact", icon: Mail, href: "#contact" },
];

const skillCategories = [
  {
    heading: "Frontend",
    skills: [
      { name: "React", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "Tailwind", proficiency: 80 },
      { name: "Shedcn", proficiency: 95 },
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 90 },
    ],
  },
  {
    heading: "Database & Messaging",
    skills: [
      { name: "MongoDB", proficiency: 70 },
      { name: "MySQL", proficiency: 75 },
      { name: "RabbitMQ", proficiency: 60 },
    ],
  },
  {
    heading: "AI",
    skills: [{ name: "LangChain", proficiency: 50 }],
  },
  {
    heading: "Backend & Runtime",
    skills: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express", proficiency: 88 },
      { name: "Java", proficiency: 50 },
      { name: "C++", proficiency: 50 },
      { name: "C", proficiency: 50 },
      { name: "TypeScript", proficiency: 60 },
      { name: "JavaScript", proficiency: 95 },
    ],
  },
];

function Page() {
  const [navSelect, setNavSelect] = useState("home");
  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);
  const { isMobile, isLaptop, isTablet } = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorObj, setErrorObj] = useState<EmptyField>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  // 1. Replace the useEffect
  useEffect(() => {
    const TRIGGER = window.innerHeight; // 30% from top

    function onScroll() {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id].content"),
      );

      // Check bottom-of-page fallback first
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight + 1000;
      if (atBottom) {
        const last = sections[sections.length - 1];
        if (last) setNavSelect(last.id);
        return;
      }

      // Find the last section whose top has crossed the trigger line
      let active = sections[0];
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= TRIGGER) {
          active = section;
        }
      }
      if (active) setNavSelect(active.id);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEmailSending = async () => {
    try {
      let emptyFields: EmptyField = {
        name: false,
        email: false,
        subject: false,
        message: false,
      };
      if (name.length === 0) emptyFields.name = true;
      if (email.length === 0) emptyFields.email = true;
      if (subject.length === 0) emptyFields.subject = true;
      if (message.length === 0) emptyFields.message = true;

      for (let key in emptyFields) {
        if (emptyFields[key as keyof EmptyField]) {
          toast.error("Field is empty");
          setErrorObj(emptyFields);
          return;
        }
      }

      const reponse = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });
      const data = await reponse.json();
      console.log(data);
      toast.success(data.result);
    } catch (err) {
      console.log(err);
      if (err instanceof Error) toast.error(err.message.toString());
    }
  };
  return (
    <div className="w-full  flex flex-col py-3 relative">
      <nav className="flex w-full sm:w-[98vw]  items-center justify-center bg-transparent  mb-5 sticky top-3 z-20 py-3">
        <div
          className=" h-10 w-10 absolute top-1.9 left-5 z-10 flex  hover:h-11 hover:w-11 transition-all duration-200 hover:cursor-pointer cursor-target rounded-lg"
          onClick={() => {
            setNavSelect("home");
            const section = document.getElementById("home");
            if (section) {
              const navHeight = 100; // approx nav height + gap
              const top =
                section.getBoundingClientRect().top +
                window.scrollY -
                navHeight;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }}>
          <img
            src="/icon.png"
            alt=""
            className="h-full w-full rounded-lg"
          />
        </div>
        <ul className=" border border-white/10 gap-5 px-2 py-2 rounded-2xl bg-[#0A0A0B]/60 backdrop-blur-xl shadow-[0_0_30px_rgba(217,70,239,0.05)] hidden md:flex">
          {nav.map((n, idx) => {
            const isActive = navSelect === n.title;
            return (
              <li
                key={idx + n.title}
                className={`
            relative  border p-2 rounded-xl transition-all duration-300 group cursor-target
            ${
              isActive
                ? "bg-[#D946EF]/10 border-[#D946EF]/50 shadow-[0_0_20px_rgba(217,70,239,0.3)]"
                : "border-transparent text-slate-400 hover:bg-white/5 hover:text-[#84CC16]"
            }
          `}
                onClick={() => {
                  setNavSelect(n.title);
                  const section = document.getElementById(n.title);
                  if (section) {
                    const navHeight = 100; // approx nav height + gap
                    const top =
                      section.getBoundingClientRect().top +
                      window.scrollY -
                      navHeight;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}>
                <a>
                  <n.icon
                    size={22}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "scale-110 text-[#D946EF] drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]"
                        : "group-hover:scale-110 group-hover:text-[#84CC16]"
                    }`}
                  />
                </a>

                {/* Lime Green Indicator Dot */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#84CC16] rounded-full shadow-[0_0_12px_#84CC16]"></span>
                )}
              </li>
            );
          })}
        </ul>
        {/* MOBILE DROPDOWN TRIGGER */}
        <div className="md:hidden absolute right-5 z-30">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl border transition-all duration-300 ${
              isOpen
                ? "bg-[#D946EF] border-[#D946EF] shadow-[0_0_15px_#D946EF]"
                : "bg-[#0A0A0B]/80 border-white/10"
            }`}>
            <div className="w-5 h-5 flex flex-col justify-between items-center">
              <span
                className={`w-full h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
        {/* MOBILE DROPDOWN MENU */}
        <div
          className={`
    md:hidden fixed inset-x-4 top-16 p-4 rounded-2xl border border-white/10 
    bg-[#0A0A0B]/90 backdrop-blur-2xl shadow-[0_0_40px_rgba(217,70,239,0.15)]
    transition-all duration-500 transform
    ${isOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-10 opacity-0 scale-95 pointer-events-none"}
  `}>
          <ul className="grid grid-cols-2 gap-3">
            {nav.map((n) => {
              const isActive = navSelect === n.title;
              return (
                <li
                  key={n.title}
                  onClick={() => {
                    setNavSelect(n.title);
                    setIsOpen(false);
                    const section = document.getElementById(n.title);
                    if (section)
                      window.scrollTo({
                        top: section.offsetTop - 100,
                        behavior: "smooth",
                      });
                  }}
                  className={`
              flex items-center gap-3 p-3 rounded-xl border transition-all duration-300
              ${
                isActive
                  ? "bg-[#D946EF]/20 border-[#D946EF]/50 text-white shadow-[0_0_15px_rgba(217,70,239,0.2)]"
                  : "bg-white/5 border-transparent text-slate-400 hover:text-[#84CC16]"
              }
            `}>
                  <n.icon
                    size={20}
                    className={isActive ? "text-[#D946EF]" : ""}
                  />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {n.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <main className="flex flex-col w-full px-2 items-center lg:flex-row lg:justify-around ">
        <section
          className={`flex flex-col w-full sm:w-125 justify-center border lg:w-80 py-3 px-3 sm:py-5 sm:px-5 sm:gap-5 rounded-2xl bg-[#0A0A0B]/60 border-white/10 backdrop-blur-2xl shadow-[0_0_30px_rgba(217,70,239,0.1)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(217,70,239,0.2)] hover:scale-[1.01] lg:sticky lg:top-24 lg:self-start `}>
          <div className="flex h-full w-full items-center justify-between lg:flex-col">
            {/* Avatar Placeholder with Lime Glow */}
            {/* <div className="h-25 w-25 sm:h-30 sm:w-30 lg:h-40 lg:w-40 bg-[#1A1A2E] border border-[#84CC16]/30 rounded-lg shadow-[0_0_15px_rgba(132,204,22,0.2)] p-[1.3px] flex"> */}
            <img
              src="/me.png"
              alt="Aziz Bohra"
              className="object-contain  h-25 w-25 sm:h-30 sm:w-30 lg:h-40 lg:w-40 "
            />
            {/* </div> */}

            <div className="flex flex-col w-[70%] sm:w-[50%] lg:w-full items-center lg:mt-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-[#D946EF] bg-clip-text text-transparent">
                Aziz Bohra
              </h1>
              <p className="text-[#84CC16] font-mono text-sm tracking-tight">
                Full-stack Developer
              </p>
            </div>

            <div className="flex h-20 flex-col justify-center">
              {!isLaptop && (
                <button
                  onClick={() => setIsCardVisible(!isCardVisible)}
                  className="text-[#D946EF] hover:text-[#84CC16] transition-all duration-200 flex items-center gap-1 text-sm font-medium">
                  {isMobile ? (
                    <ChevronDown
                      className={
                        isCardVisible
                          ? "rotate-180 transition-transform"
                          : "transition-transform"
                      }
                    />
                  ) : (
                    <>
                      <span>{isCardVisible ? "Show less" : "Show more"}</span>
                      <ChevronDown
                        className={
                          isCardVisible
                            ? "rotate-180 transition-transform"
                            : "transition-transform"
                        }
                      />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          <div
            className={`${!isLaptop ? (isCardVisible ? "flex opacity-100" : "hidden ") : "flex"} flex-col w-full animate-in fade-in slide-in-from-top-2 transition-all  transition-discrete duration-300`}>
            {/* Gradient Divider - Magenta to Transparent */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D946EF]/50 to-transparent mb-4 sm:mb-6 mt-3 lg:mt-0"></div>

            <div className="w-full">
              <ul className="flex flex-col gap-4 sm:gap-5">
                {[
                  {
                    icon: <Mail size={isMobile ? 18 : 22} />,
                    label: "Email",
                    value: "azizbohra03@gmail.com",
                  },
                  {
                    icon: <Smartphone size={isMobile ? 18 : 22} />,
                    label: "Contact No.",
                    value: "+91 9929288867",
                  },
                  {
                    icon: <MapPin size={isMobile ? 18 : 22} />,
                    label: "Location",
                    value: "Udaipur, India",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 group">
                    {/* Icon box with Magenta border and Lime text on hover */}
                    <div className="p-2 border border-white/10 rounded-lg bg-white/5 text-[#D946EF] group-hover:text-[#84CC16] group-hover:border-[#84CC16]/50 transition-all">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                        {item.label}
                      </p>
                      <p className="text-slate-200 text-sm sm:text-base font-medium">
                        {item.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#D946EF]/50 to-transparent mt-6 mb-4 w-full"></div>

            <div className="w-full flex justify-center sm:justify-start">
              <ul className="flex gap-6 text-slate-400">
                <li
                  className="hover:text-[#84CC16] transition-colors cursor-target"
                  onClick={() => {
                    window.location.href =
                      "https://linkedin.com/aziz-khanji-2a5360240?utm_source=share_via&utm_content=profile&utm_medium=member_android";
                  }}>
                  {/* LinkedIn Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={isMobile ? "16" : "20"}
                    height={isMobile ? "16" : "20"}
                    fill="currentColor"
                    viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </li>
                <li
                  className="hover:text-[#D946EF] transition-colors cursor-target"
                  onClick={() => {
                    window.location.href = "https://instagram.com/__aziz.0";
                  }}>
                  {/* Instagram Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={isMobile ? "16" : "20"}
                    height={isMobile ? "16" : "20"}
                    fill="currentColor"
                    viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </li>
                <li
                  className="hover:text-white transition-colors cursor-target"
                  onClick={() => {
                    window.location.href = "https://github.com/axizkhan";
                  }}>
                  {/* GitHub Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={isMobile ? "16" : "20"}
                    height={isMobile ? "16" : "20"}
                    fill="currentColor"
                    viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center sm:w-125 lg:w-[60%] transition-all duration-300 gap-30 mt-10">
          <section
            className={`flex flex-col ${navSelect === "home" ? "opacity-100" : "opacity-0"} px-5 py-3 lg:py-6 gap-4 w-full border rounded-2xl lg:justify-center bg-[#0A0A0B]/60 backdrop-blur-xl border-white/10 shadow-[0_0_40px_rgba(217,70,239,0.08)] transition-all duration-300 lg:min-h-[80vh] min-h-screen content`}
            id="home">
            {/* Section Header with Lime Pop Underline */}
            <div className="relative self-start">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                About me
              </h2>
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-[#84CC16] rounded-full shadow-[0_0_15px_#84CC16]"></div>
            </div>

            <div className="flex flex-col mt-2">
              <h3 className="text-xl font-mono text-slate-500 tracking-tighter lowercase">{`// i am`}</h3>
              <div className="flex flex-wrap gap-3 items-center justify-start mt-1">
                <RotatingText
                  texts={[
                    "FULL-STACK",
                    "FRONTEND",
                    "BACKEND",
                    "MERN-STACK",
                    "AGENTIC-AI",
                  ]}
                  mainClassName="px-3 md:px-4 bg-[#D946EF]/10 border border-[#D946EF]/40 text-[#D946EF] overflow-hidden py-1 text-3xl font-black justify-center rounded-lg shadow-[0_0_20px_rgba(217,70,239,0.15)]"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  splitBy="characters"
                  auto
                  loop
                />
                <span className="text-3xl font-bold bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 font-light leading-relaxed">
              <p className="text-slate-300 border-l-2 border-[#D946EF]/30 pl-4 leading-relaxed">
                An{" "}
                <span className="text-[#D946EF] font-medium">
                  Full-stack Developer
                </span>{" "}
                with a robust foundation in web and backend technologies. I
                specialize in building responsive, user-centric applications
                through hands-on
                <span className="text-[#84CC16]">
                  {" "}
                  internship experience
                </span>{" "}
                and personal projects. By
                <span className="text-[#D946EF]"> leveraging AI</span> to
                accelerate development cycles, I focus on delivering
                high-quality products at speed. Currently, I am diving into the
                world of
                <span className="text-[#84CC16] font-mono"> Agentic AI</span> to
                build the next generation of autonomous applications.
              </p>

              <p className="text-slate-400 italic">
                If you're seeking a developer to transform complex logic into
                seamless user experiences, I am ready to collaborate. Let’s
                build the future, one line of code at a time.
              </p>
            </div>

            <div className="flex items-center justify-center w-full transition-all duration-300 py-4">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                {[
                  {
                    label: "Project build",
                    value: "5+",
                    color: "text-[#D946EF]",
                  },
                  {
                    label: "Year experience",
                    value: "1+",
                    color: "text-[#84CC16]",
                  },
                  { label: "Skills", value: "10+", color: "text-[#84CC16]" },
                  {
                    label: "Currently learning",
                    value: "LangChain",
                    color: "text-[#D946EF]",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative flex flex-col items-center justify-center p-4 h-24 rounded-xl 
                   bg-[#0F172A]/30 border border-white/5 backdrop-blur-md
                   transition-all duration-300 hover:border-[#D946EF]/40 
                   hover:shadow-[0_0_25px_rgba(217,70,239,0.15)]">
                    {/* Cyberpunk Corners - Lime for bottom, Magenta for top */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 rounded-tl-lg group-hover:border-[#D946EF] transition-colors"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 rounded-br-lg group-hover:border-[#84CC16] transition-colors"></div>

                    <h3
                      className={`text-xl font-black tracking-tighter ${item.color} group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]`}>
                      {item.value}
                    </h3>
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 mt-1">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
            className={`w-full ${navSelect === "experience" ? "opacity-100" : "opacity-0"} flex flex-col gap-6 transition-all duration-500 content min-h-screen `}
            id="experience">
            {/* Header Section with Magenta Glow */}
            <div className="relative self-start">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Experience
              </h2>
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-[#D946EF] rounded-full shadow-[0_0_15px_rgba(217,70,239,0.6)]"></div>
            </div>

            <div className="relative w-full transition-all duration-300">
              {/* Themed Timeline Line: Lime to Magenta Gradient */}
              <div className="h-full w-px absolute left-2 bg-gradient-to-b from-[#84CC16] via-[#D946EF] to-transparent shadow-[0_0_10px_rgba(132,204,22,0.2)]"></div>

              <div className="space-y-12">
                {experienceData.map((exp, idx) => (
                  <div
                    className="flex flex-col relative px-8 gap-3 group transition-all duration-300"
                    key={idx + exp.companyName}>
                    {/* Animated Timeline Node - Lime Green base */}
                    <div className="rounded-full bg-transparent border-2 border-[#84CC16] h-3 w-3 absolute left-[3px] top-6 z-10 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#84CC16] shadow-[0_0_8px_rgba(132,204,22,0.5)]"></div>

                    <div className="flex gap-4 items-center text-[#D946EF] font-mono text-sm tracking-wider">
                      <Briefcase size={18} />
                      <p>{exp.duration}</p>
                    </div>

                    {/* Experience Card with Deep Neon Depth */}
                    <div className="flex flex-col gap-2 p-5 rounded-2xl bg-[#0A0A0B]/40 border border-white/5 backdrop-blur-md transition-all duration-300 hover:bg-[#1A1A2E]/50 hover:border-[#D946EF]/40 hover:shadow-[0_0_30px_rgba(217,70,239,0.1)]">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#84CC16]">
                          {exp.companyName}
                        </h3>
                        <p className="text-slate-500 font-mono text-xs uppercase tracking-tighter">
                          {`> ${exp.jobRole}`}
                        </p>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed">
                        {exp.jobDescription}
                      </p>

                      <ul className="flex gap-2 flex-wrap mt-2">
                        {exp.technologies.map((tech, tIdx) => (
                          <li
                            key={tIdx}
                            className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-slate-300 hover:border-[#84CC16]/50 hover:text-[#84CC16] transition-all">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
            className={`w-full flex flex-col gap-6 transition-all duration-500 content min-h-screen ${navSelect === "projects" ? "opacity-100" : "opacity-0"}`}
            id="projects">
            {/* Header Section with Lime Glow */}
            <div className="relative self-start">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Projects
              </h2>
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-[#84CC16] rounded-full shadow-[0_0_15px_#84CC16]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 p-1">
              {projectData.map((project, idx) => (
                <div
                  key={idx}
                  className="group col-span-1 p-4 flex flex-col gap-4 rounded-2xl bg-[#0A0A0B]/40 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-[#D946EF]/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.1)]">
                  {/* Project Thumbnail with Magenta Scan Line */}
                  <div className="w-full h-48 rounded-xl relative overflow-hidden bg-slate-900 border border-white/5">
                    <img
                      src={project.img.url}
                      alt={project.img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-90"
                    />

                    {/* Status Badge: Lime for Live, Magenta for Dev */}
                    <div className="absolute top-3 right-3 z-10 px-3 py-1 flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                      <span
                        className={
                          project.status === "Live"
                            ? "text-[#84CC16]"
                            : "text-[#D946EF]"
                        }>
                        {project.status}
                      </span>
                      <div
                        className={`h-1.5 w-1.5 rounded-full animate-pulse ${
                          project.status === "Live"
                            ? "bg-[#84CC16] shadow-[0_0_8px_#84CC16]"
                            : "bg-[#D946EF] shadow-[0_0_8px_#D946EF]"
                        }`}></div>
                    </div>

                    {/* Holographic Scan Line Effect - Magenta */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#D946EF]/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[2000ms] ease-in-out"></div>
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D946EF] transition-colors">
                      {project.name || "Project Name"}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed md:line-clamp-2 lg:line-clamp-none italic">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags - Lime Green themed */}
                  <ul className="flex gap-2 w-full flex-wrap">
                    {project.technologies.map((tech, tIdx) => (
                      <li
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-mono border border-[#84CC16]/30 text-[#84CC16] bg-[#84CC16]/5 rounded-md">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Action Links */}
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <ul className="flex gap-4">
                      {project.links.map((link, lIdx) => (
                        <li
                          key={lIdx}
                          className="cursor-target">
                          {link.type === "github" ? (
                            <a
                              href={link.url}
                              className="text-slate-400 hover:text-white transition-colors">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={isMobile ? "16" : "20"}
                                height={isMobile ? "16" : "20"}
                                fill="currentColor"
                                viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                              </svg>
                            </a>
                          ) : (
                            <a
                              href={link.url}
                              className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-tighter text-[#84CC16] hover:text-[#D946EF] transition-colors">
                              <span>View Live</span>
                              <div className="h-1 w-1 bg-[#84CC16] rounded-full shadow-[0_0_5px_#84CC16]"></div>
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section
            className={` ${navSelect === "skills" ? "opacity-100" : "opacity-0"} w-full flex flex-col gap-6 transition-all duration-500 rounded-2xl lg:justify-center min-h-screen  content`}
            id="skills">
            {/* Header with Lime Neon Underline */}
            <div className="relative self-start">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Skills
              </h2>
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-[#84CC16] rounded-full shadow-[0_0_15px_#84CC16]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-3 transition-all duration-300">
              {skillCategories.map((cat, idx) => {
                const gridClass =
                  idx === 0
                    ? "lg:row-span-2 lg:col-span-1"
                    : idx === 3
                      ? "lg:col-span-2"
                      : "lg:col-span-1";

                return (
                  <div
                    key={idx}
                    className={`${gridClass} flex flex-col gap-4 border border-white/10 bg-[#0A0A0B]/40 backdrop-blur-xl p-5 rounded-2xl shadow-[0_0_30px_rgba(217,70,239,0.03)] transition-all duration-300 hover:border-[#D946EF]/30 hover:shadow-[0_0_40px_rgba(217,70,239,0.12)]`}>
                    <h3 className="text-xl font-black italic tracking-tighter text-[#D946EF] uppercase">
                      {`// ${cat.heading}`}
                    </h3>

                    <ul className="flex flex-col gap-4 lg:gap-2">
                      {cat.skills.map((skill, sIdx) => {
                        return (
                          <div
                            key={sIdx}
                            className="flex flex-col gap-1.5 group">
                            <div className="flex justify-between items-center">
                              <h4 className="text-sm font-mono font-medium text-slate-200 group-hover:text-[#84CC16] transition-colors">
                                {skill.name}
                              </h4>
                              <span className="text-[10px] font-bold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                {skill.proficiency}%
                              </span>
                            </div>

                            {/* Progress Bar Track - Lime to Magenta shimmer */}
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-[#84CC16] via-[#D946EF] to-[#84CC16] bg-[length:200%_100%] animate-shimmer shadow-[0_0_10px_rgba(132,204,22,0.4)] transition-all duration-1000"
                                style={{
                                  width: `${skill.proficiency}%`,
                                }}></div>
                            </div>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          <section
            className={`w-full flex flex-col gap-6 transition-all duration-500 content min-h-screen ${navSelect === "education" ? "opacity-100" : "opacity-0"}`}
            id="education">
            {/* Header Section with Lime Glow */}
            <div className="relative self-start">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-[#84CC16] rounded-full shadow-[0_0_15px_rgba(132,204,22,0.6)]"></div>
            </div>

            <div className="relative w-full transition-all duration-300">
              {/* Themed Timeline Line: Lime to Magenta Gradient */}
              <div className="h-full w-px absolute left-2 bg-gradient-to-b from-[#84CC16] via-[#D946EF] to-transparent shadow-[0_0_10px_rgba(132,204,22,0.2)]"></div>

              <div className="space-y-12">
                {educationData.map((exp, idx) => (
                  <div
                    className="flex flex-col relative px-8 gap-3 group transition-all duration-300"
                    key={idx + exp.degreeName}>
                    {/* Animated Timeline Node - Lime Green base */}
                    <div className="rounded-full bg-tra border-2 border-[#84CC16] h-3 w-3 absolute left-[3px] top-6 z-10 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#84CC16] shadow-[0_0_8px_rgba(132,204,22,0.5)]"></div>

                    <div className="flex gap-4 items-center text-[#D946EF] font-mono text-sm tracking-wider w-full">
                      <div className="flex gap-3">
                        <GraduationCap size={18} />
                        <p>{exp.duration}</p>
                      </div>
                      <p className="opacity-60 text-xs">| {exp.level}</p>
                    </div>

                    {/* Education Card with Glassmorphism */}
                    <div className="flex flex-col gap-2 p-5 rounded-2xl bg-[#0A0A0B]/40 border border-white/5 backdrop-blur-md transition-all duration-300 hover:bg-[#1A1A2E]/50 hover:border-[#D946EF]/40 hover:shadow-[0_0_30px_rgba(217,70,239,0.1)]">
                      <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#84CC16]">
                          {exp.degreeName}
                        </h3>
                        <p className="text-slate-500 font-mono text-xs uppercase tracking-tighter">
                          {`> ${exp.instituteName}`}
                        </p>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
            className={`w-full ${navSelect === "contact" ? "opacity-100 " : "opacity-0 "} flex flex-col gap-8 transition-all duration-500 min-h-screen content translate-2  `}
            id="contact">
            {/* Header Section */}
            <div className="flex flex-col w-full gap-5 border p-5 rounded-2xl border-white/10 bg-[#0a0a0b]/40">
              <div className="relative self-start">
                <h2 className="text-3xl flex flex-wrap gap-2 font-black tracking-tighter">
                  <span className=" bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent ">
                    LET'S WORK
                  </span>
                  <span className=" bg-gradient-to-b from-[#84CC16] via-[#D946EF]  bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                    TOGETHER
                  </span>
                </h2>
                <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-[#84CC16] rounded-full shadow-[0_0_15px_rgba(132,204,22,0.6)]"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
                {/* Full Name Input */}
                <div className="col-span-1 relative group">
                  <input
                    type="text"
                    className="w-full rounded-xl bg-[#0F172A]/40 border border-white/10 h-12 px-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#D946EF] focus:bg-[#0F172A]/60 focus:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div
                    className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#84cc16] transition-all duration-300 group-focus-within:w-full group-focus-within:left-0`}></div>
                  {errorObj.name && (
                    <div className="absolute bottom-0   h-0.5 bg-red-500 transition-all duration-300 w-full left-0"></div>
                  )}
                </div>

                {/* Email Input */}
                <div className="col-span-1 relative group">
                  <input
                    required={true}
                    type="email"
                    className="w-full rounded-xl bg-[#0F172A]/40 border border-white/10 h-12 px-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#D946EF] focus:bg-[#0F172A]/60 focus:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#84cc16] transition-all duration-300 group-focus-within:w-full group-focus-within:left-0"></div>
                  {errorObj.email && (
                    <div className="absolute bottom-0   h-0.5 bg-red-500 transition-all duration-300 w-full left-0"></div>
                  )}
                </div>

                {/* Subject Input */}
                <div className="col-span-1 md:col-span-2 relative group">
                  <input
                    required={true}
                    type="text"
                    className="w-full rounded-xl bg-[#0F172A]/40 border border-white/10 h-12 px-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#D946EF] focus:bg-[#0F172A]/60 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#84cc16] transition-all duration-300 group-focus-within:w-full group-focus-within:left-0"></div>
                  {errorObj.subject && (
                    <div className="absolute bottom-0   h-0.5 bg-red-500 transition-all duration-300 w-full left-0"></div>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="col-span-1 md:col-span-2 relative group">
                  <textarea
                    required={true}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    className="w-full rounded-xl bg-[#0F172A]/40 border border-white/10 p-4 h-40 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#D946EF] focus:bg-[#0F172A]/60 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 resize-none"></textarea>
                  <div className="absolute bottom-1.5 left-1/2 w-0 h-0.5 bg-[#84cc16] transition-all duration-300 group-focus-within:w-[calc(100%-2px)] group-focus-within:left-0"></div>
                  {errorObj.message && (
                    <div className="absolute bottom-0   h-0.5 bg-red-500 transition-all duration-300 w-full left-0"></div>
                  )}
                </div>

                {/* Send Button (Bonus Addition) */}
                <button
                  onClick={handleEmailSending}
                  type="submit"
                  className="col-span-1 md:col-span-2 w-full md:w-max px-8 py-3 rounded-xl bg-cyan-500/10 border border-[#D946EF] text-[#84CC16] font-bold tracking-widest uppercase hover:bg-[#84CC16] hover:text-[#0A0A0F] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 self-start cursor-target">
                  Initialize Contact
                </button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Page;
