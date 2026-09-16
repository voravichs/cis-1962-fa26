import SideNav from '@/components/Sidenav';
import { FaGithub, FaPlug, FaClipboardList, FaCode } from "react-icons/fa";
import { MdGrade } from "react-icons/md";
import schedule from '@/data/schedule';

import Link from 'next/link';
import type { Metadata } from "next";
import XLink from '@/components/XLink';

const SECTIONS = [
  {
    id: "introduction",
    icon: <FaPlug className="inline-block text-3xl" />
  },
  {
    id: "instructions",
    icon: <FaClipboardList className="inline-block text-3xl" />
  },
  {
    id: "submission",
    icon: <MdGrade className="inline-block text-3xl" />
  }
];

export const metadata: Metadata = {
  title: "HW3 | CIS 1962",
  description: "Homework 3 Page of CIS 1962 for Fall 2026 at the University of Pennsylvania",
};

export default function HW3() {
    return (
        <div className="scroll-mt-48 max-w-5xl mx-auto text-lg text-black dark:text-white">      
            {/* Side Nav */}
        <SideNav sections={SECTIONS}/>
      
        <div className="mx-auto text-lg">
            {/* Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 3: Portfolio</h1>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due September 24th at 11:59 PM</h3>

            <div className='red-block font-mono'><span className='font-bold'>Topics:</span> HTML, CSS, DOM Manipulation, Multi-Page Applications</div>

            {/* Intro Text */}
            <section className="space-y-8 mb-8">
                <p className="ml-4">
                    In this homework, we will use HTML, CSS, and JavaScript to build a multi-page application, a portfolio of your own work! This will be a creative exercise in applying web development basics to show off your work. This homework is designed to get you familiar with building web applications using the DOM and event listeners, structuring a multi-page application across multiple HTML files, as well as getting you comfortable with HTML and CSS for structuring and styling web pages.
                </p>
                <p className="ml-4">
                    This is an <b>open ended</b> homework. We have content requirements for your portfolio, but you are free to implement them in whatever what you see fit. Make sure that you read the rubric items provided in the starter code to make sure you don't miss any of them.
                </p>
                <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
                <ul className="text-lg ml-6 list-disc">
                    <li>Learn to build websites from scratch using knowledge of HTML and CSS</li>
                    <li>Understand how to manipulate the DOM using JavaScript</li>
                    <li>Get familiar with event listeners and handling user input in web applications</li>
                    <li>Learn the ways to host multiple HTML files in one application</li>
                </ul>
            </section>

            {/* Introduction */}
            <section id="introduction" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <FaPlug /> Introduction</h2>

                {/* Starter */}
                <a
                    href={schedule[3].homework?.starter}
                    className="flex justify-center items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-red-300 w-1/2 my-4 cursor-pointer"
                >
                    <FaCode className="text-3xl"/> Starter Code
                </a>

                {/* Start */}
                <section className='space-y-4'>
                    <p className="ml-4">
                        A portfolio is a collection of your work that showcases your skills, experience, and accomplishments. In this homework, you will create a your own portfolio website with your knowledge of HTML, CSS, and JavaScript. You will be able to use this portfolio as a starting point for your own personal website, which you can continue to build on and improve throughout the course on your own time.
                    </p>
                </section>

                {/* Reqs */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Installation & Basic Requirements</h3>
                    <p className="ml-4">
                        This project will use the following dependencies: 
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li>TypeScript</li>
                        <li>serve</li>
                        <li>eslint/prettier</li>
                    </ul>
                    <p className="ml-4">
                        The starter code will provide a <span className="inline-code">package.json</span> file and <span className="inline-code">dist</span> folder for you to work in. You will run serve up your portfolio locally with the <span className="inline-code">npm start</span> script defined in the <span className="inline-code">package.json</span> file. This will be a good chance to apply TypeScript to web development contexts, and will help you get familiar with the types of DOM elements and types you will be working with.
                    </p>
                    <p className="ml-4">
                        You are free to install any other dependencies you would like to use for your portfolio, but make sure to include them in your <span className="inline-code">package.json</span> file so that we can install them when grading your submission. You are also free to use any CSS frameworks or libraries you would like to use for your portfolio, but make sure to include them in your <span className="inline-code">package.json</span> file as well.
                    </p>
                </section>

                {/* Portfolio Examples */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Examples</h3>
                    <p className="ml-4">
                        While all you have to work with is HTML/CSS/JS, you can look to other portfolio websites for inspiration for the style and layout of your portfolio. Here are some examples of portfolio websites that you can look at for inspiration:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li><XLink link="https://voravich-silapachairueng.vercel.app/" text="Voravich Silapachairueng"/></li>
                        <li><XLink link="https://brittanychiang.com" text="Brittany Chiang"/></li>
                        <li><XLink link="https://michaelmannucci.com/" text="Michael Mannucci"/></li>
                        <li><XLink link="https://www.joelcalifa.com/" text="Joel Califa"/></li>
                    </ul>
                    <p className="ml-4">
                        Feel free to get creative! You can do a lot with basic HTML and CSS layouts, and you are free to install CSS frameworks or other libraries to help you with your design. 
                    </p>
                </section>
            </section>

            {/* Instructions */}
            <section id="instructions" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><FaClipboardList />Instructions</h2>

                {/* HTML */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>HTML</h3>
                    <p className="ml-4">
                        You should begin by implementing the HTML structure of your portfolio. You are required to make the following 4 pages as separate HTML files:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li><span className="red-bold">A home page:</span> This should be the main landing page of your portfolio.</li>
                        <li><span className="red-bold">An about page:</span> This should provide information about you and your background.</li>
                        <li><span className="red-bold">A contact page:</span> This should include a form for visitors to reach out to you.</li>
                        <li><span className="red-bold">A projects page:</span> This should showcase your projects and work.</li>
                    </ul>  
                    <p className="ml-4">
                        Add content to these pages as you see fit. If possible, include real links to projects/project repositories and images of your work. 
                    </p>
                    <p className="ml-4">
                        You will link these pages together with navigation links. Use the <span className="inline-code">&lt;a&gt;</span> tag to create links between your pages, and make sure to use relative paths to link to the other HTML files in your project. You should also include a navigation bar on each page that allows users to easily navigate between the different pages of your portfolio.
                    </p>
                    <div className="blue-block">
                        <p className="ml-4">
                            Make sure to use proper semantic HTML elements, such as <span className="inline-code">&lt;header&gt;</span>, <span className="inline-code">&lt;nav&gt;</span>, <span className="inline-code">&lt;main&gt;</span>, <span className="inline-code">&lt;section&gt;</span>, and <span className="inline-code">&lt;footer&gt;</span>. As explained in lecture, this will help with accessibility and SEO, and will also make your code more readable and maintainable.
                        </p>
                    </div>
                </section>

                {/* CSS */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>CSS</h3>
                    <p className="ml-4">
                        You may find it useful to work on your CSS alongside your HTML. You should maintain a consistent style across all pages of your portfolio, so it is important to have a clear and organized CSS structure. You can use a single CSS file for all pages, or you can use separate CSS files for each page. Make sure to link your CSS files in the <span className="inline-code">&lt;head&gt;</span> of each HTML file.
                    </p>
                    <p className="ml-4">
                        You should aim to create a visually appealing and user-friendly interface. We will not be grading or looking for "pretty" designs, but designs that are clear and easy to use. Make something that shows your own personality as a developer!
                    </p>
                    <p className="ml-4">
                        Your CSS should cover the following aspects:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li>Makes use of at least one flexbox, if not more to properly layout elements</li>
                        <li>Consider using a proper color scheme for your app, using built-in colors or hex/RGB codes</li>
                        <li>Use at least 1 CSS variable (useful for aliasing color names and other values)</li>
                        <li>Make use of the box model with proper margins, padding, and borders where applicable</li>
                        <li>Use at least 1 CSS pseudo-class (e.g., <span className="inline-code">:hover</span>, <span className="inline-code">:focus</span>, <span className="inline-code">:nth-child()</span>) to style elements based on their state or position in the DOM</li>
                        <li> BONUS: Uses media queries to create a responsive design for 3 different screen sizes (mobile, tablet, and desktop)</li>
                    </ul> 
                </section>

                {/* DOM */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Functionality</h3>
                    <p className="ml-4">
                        Finally, implement the JavaScript functionality of your portfolio. This includes the following features:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li>In your contact page, implement a form that allows users to submit their messages. Include a name, email, and message fields, and when a user submits, validate that the information isn't empty, and that the email is in the correct format. If a validation error occurs, error feedback should be given to the user. When the form is submitted, the message should be sent to your email address.</li>
                        <li>Include <span className="red-bold">one interactive element</span> that changes the UI of the page that uses JavaScript. This may be, for instance, a button that toggles between light and dark mode, a hamburger menu that opens/closes navigation links on mobile, or an image carousel.</li>
                        <li> Include <span className="red-bold">one dynamic element</span> that updates based on user interaction or external data. For instance, the current year in the footer, a search bar for your skills from a JSON file, or some element that updates on scroll bar progress.</li>
                    </ul>
                </section>
            </section>

            {/* Submission */}
            <section id="submission" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <MdGrade />Submission</h2>
                
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>README</h3>
                    <p className="ml-4">
                        Answer the provided reflection questions within the starter code README file. In this reflection, you will also indicate whether or not you used AI, and also document your usage of AI as well. Please don't forget this step, as it is important feedback for the homework and the content of the course!
                    </p> 
                </section>
                 
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Submission</h3>
                    <p className='ml-4'>
                        Submit your code through Gradescope as a <span className='inline-code'>.zip</span> file that contains your project. Make sure your project includes all files you worked on during this homework and your <span className='inline-code'>README.md</span> file, all config files for TS, eslint, and prettier, your test script, and the every JSON file used in the tests. You should NOT include the <span className='inline-code'>node_modules</span> folder in the <span className='inline-code'>.zip</span> file (feel free to delete it before submission), as it is quite heavy and we will reinstall the dependencies for grading anyways. Make sure the submitted file structure within your submission is <span className='red-bold'>exactly or similar</span> to the file structure you used to run and develop the project. Points will be taken off for malformed project structures in the final submission!
                    </p>
                    <p className='ml-4'>
                        Before you submit, make sure you lint your code for style errors using the command <span className='inline-code'>npm run lint</span>. More details on style can be found in the <Link className='link' href={"/styleguide"}>style guide</Link>. We will take -1 points for every style error remaining in the submission for the submitted files. Since this project requires you to make your own ESLint, we will use your linting rules instead of the standard rules we would apply, so make sure you pass your own set of style rules!
                    </p>
                    <p className='ml-4'>
                        For this homework, we've provided a rubric file named <span className='inline-code'>RUBRIC.md</span> in the starter code. Make sure to read through it carefully and ensure that your submission meets all the requirements outlined in the rubric. This will help you maximize your score and ensure that you've covered all necessary aspects of the assignment.
                    </p>
                </section>
            </section>
        </div>
    </div>
  )
}