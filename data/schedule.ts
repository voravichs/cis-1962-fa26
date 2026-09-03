import { Temporal } from 'temporal-polyfill'
let startDate = new Temporal.PlainDate(2026, 8, 27)

const schedule = [
  {
    id: 1,
    date: startDate,
    topic: "Introduction to JavaScript",
    slides: "/lectures/Lec1_1962_fa26.pdf",
    code: "https://edstem.org/us/courses/102363/lessons/179709/slides/1056325",
    homework:   { 
      id: 'HW1',
      title: "Data Analysis",
      assigned: startDate,
      due: startDate.add({weeks: 2}),
      durationWeeks: 2,
      detailsUrl: "/hw/hw1",
      starter: "/hw-starter/hw1-data-analysis-cis1962-fa26.zip",
      icon: "📊"
    },
  },
  {
    id: 2,
    date: startDate.add({weeks: 1}),
    topic: "Collections, Control Flow, and Strings",
    slides: "/lectures/Lec2_1962_fa26.pdf",
    code: "https://edstem.org/us/courses/102363/lessons/180100/slides/1059063",
    quiz: "https://edstem.org/us/courses/102363/lessons/180420/slides/1061036"
  },
  {
    id: 3,
    date: startDate.add({weeks: 2}),
    topic: "Project Management and Introduction to TypeScript",
    slides: "",
    code: "",
    due: "📊 HW1 DUE!"
  },
  {
    id: 4,
    date: startDate.add({weeks: 3}),
    topic: "HTML, CSS, and the DOM",
    slides: "",
    code: "",
  },
  {
    id: 5,
    date: startDate.add({weeks: 4}),
    topic: "Asynchronous JavaScript, OOP, and Error Handling",
    slides: "",
    code: "",
  },
  {
    id: "-",
    date: startDate.add({weeks: 5}),
    topic: "FALL BREAK - No Class",
    slides: "",
    code: "",
  },
  {
    id: 6,
    date: startDate.add({weeks: 6}),
    topic: "Introduction to React and Web Bundlers",
    slides: "",
    code: "",
  },
  {
    id: 7,
    date: startDate.add({weeks: 7}),
    topic: "React: Hooks, Style, Routing, and Libraries",
    slides: "",
    code: "",
  },
  {
    id: 8,
    date: startDate.add({weeks: 8}),
    topic: "Backend with Express.js and Authorization",
    slides: "",
    code: "",
  },
  {
    id: 9,
    date: startDate.add({weeks: 9}),
    topic: "Deployment, Caching, and Web Security",
    slides: "",
    code: "",
  },
  {
    id: 10,
    date: startDate.add({weeks: 10}),
    topic: "Monitoring, Accessibility, PWAs, and Mobile Applications",
    slides: "",
    code: "",
  },
  {
    id: 11,
    date: startDate.add({weeks: 11}),
    topic: "NextJS",
    slides: "",
    code: "",
  },
  {
    id: 12,
    date: startDate.add({weeks: 12}),
    topic: "Live Interaction: Websockets & Socket.io & The State of JavaScript",
    slides: "",
    code: "",
  },
  {
    id: "-",
    date: startDate.add({weeks: 13}),
    topic: "THANKSGIVING BREAK - No Class",
    slides: "",
    code: "",
  },
  {
    id: 14,
    date: startDate.add({weeks: 14}),
    topic: "Project Presentations",
    slides: "",
    code: "",
  },
];

export default schedule;
