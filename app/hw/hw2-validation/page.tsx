import SideNav from '@/components/Sidenav';
import { FaGithub, FaPlug, FaRobot, FaPizzaSlice, FaClipboardList, FaCode } from "react-icons/fa";
import { MdGrade } from "react-icons/md";
import schedule from '@/data/schedule';

import Link from 'next/link';
import type { Metadata } from "next";
import XLink from '@/components/XLink';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SECTIONS = [
  {
    id: "installation",
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
  title: "HW2 | CIS 1962",
  description: "Homework 2 Page of CIS 1962 for Spring 2026 at the University of Pennsylvania",
};

export default function HW2() {
    return (
        <div className="scroll-mt-48 max-w-5xl mx-auto text-lg text-black dark:text-white">      
            {/* Side Nav */}
        <SideNav sections={SECTIONS}/>
      
        <div className="mx-auto text-lg">
            {/* Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 2: Type Validation</h1>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due September 17th at 11:59 PM</h3>

            <div className='red-block font-mono'><span className='font-bold'>Topics:</span> TypeScript, Zod Validation, Unit Testing, Project Management</div>

            {/* Intro Text */}
            <section className="space-y-8 mb-8">
                <p className="ml-4">
                    In this homework, you will be building a TypeScript project <span className='red-bold'>from scratch</span>: we will provide you no starter code, not even a <span className='inline-code'>package.json</span> or configuration files like before! You will only be given some JSON files including data that you must validate using TypeScript and the Zod package. With the knowledge from the lecture on project mananagement, you'll get to step into the shoes of a developer to choose all the tools you need for a project yourself- with some guidance, of course. 
                </p>
                <p className="ml-4">
                    This homework is an exercise in exploring documentation, especially with working on TypeScript and Zod. In your time as a JavaScript developer, you'll come across many interesting modules that you may want to incorporate into your projects. It is paramount to get familiar with the process of installing, using, and updating these modules within projects.
                </p>
                <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
                <ul className="text-lg ml-6 list-disc">
                    <li>Use TypeScript in a project alongside the Zod package for validation</li>
                    <li>Develop project management skills in JavaScript by building a project and its dependencies from scratch</li>
                    <li>Learn the ecosystem of npm modules</li>
                </ul>
            </section>

            {/* Installation */}
            <section id="installation" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><FaClipboardList />Introduction and Installation</h2>

                {/* Starter */}
                <a
                    href={schedule[2].homework?.starter}
                    download
                    aria-label="Download starter files as zip"
                    className="flex justify-center items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-red-300 w-1/2 my-4 cursor-pointer"
                >
                    <FaCode className="text-3xl"/> Starter Code
                </a>

                {/* Start */}
                <section className='space-y-4'>
                    <p className="ml-4">
                        In this assignment, you will be validating inventory data for an fictional online store that sells JavaScript merchandise called BazaarJS. The only items in your starter code are multiple store inventory catalogs in the form of JSON Files. Imagine you were given these JSON files by a co-worker to validate, or you queried this data from an API or a database. Your task is to build a TypeScript project that can perform this validation. 
                    </p>
                    <p className="ml-4">
                       You will need to following <span className='red-bold'>dependencies</span> to develop this application:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li><span className='inline-code'>typescript</span></li>
                        <li><span className='inline-code'>@types/node</span></li>
                        <li><span className='inline-code'>zod</span></li>
                        <li><span className='inline-code'>eslint & typescript-eslint</span></li>
                        <li><span className='inline-code'>prettier</span></li>
                        <li><span className='inline-code'>jest & ts-jest</span></li>
                    </ul> 
                    <p className="ml-4">
                       <span className='red-bold'>This may not be an exhaustive list of the dependencies you need for this project.</span> You are free to install any other packages that may help for this project, so long as the core of the project still uses TypeScript and Zod. 
                    </p>
                    <p className="ml-4">
                        Your project must have a script called <span className='inline-code'>build</span> that invokes <span className='inline-code'>tsc</span> to compile your TypeScript files into an output directory. You may use any TypeScript configuration that works for you so long as the <span className='inline-code'>build</span> command works to compile your code. While there's no strict file naming conventions for this project, we recommend you use some default names, such as <span className='inline-code'>src</span> for your source code/input directory and <span className='inline-code'>dist</span> for your output directory where your <span className='inline-code'>.ts</span> files will compile into <span className='inline-code'>.js</span> files.
                    </p>
                </section>
            </section>

            {/* Installation */}
            <section id="instructions" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><FaClipboardList />Instructions</h2>

                {/* Install */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'> Part 1: Installation and Setup</h3>
                    <p className="ml-4">
                        You should first setup your project and install your dependencies. Make sure to keep your project root in one folder so that you can easily submit all the files in your project at the end.
                    </p>
                    <p className="ml-4">
                        Fill out your <span className="inline-code">package.json</span> with proper metadata, including the project name, description, author, the name of the main script (the entry point for this application), and a license name. For the license,
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li>Choose some open-source license (we recommend <XLink link="https://opensource.org/license/ISC" text= "ISC"/>)</li>
                        <li>Create a <span className="inline-code">LICENSE.txt</span> file next to your <span className="inline-code">package.json</span></li>
                        <li>Add the placeholder text from the license, then fill in placeholders like year and owner</li>
                    </ul> 
                    <p className="ml-4">
                        At this point, your project is setup, and ready to publish to npm if you so choose! (through we won't require you to publish it for this homework)
                    </p>
                </section>

                {/* Schema */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 2: Schema</h3>
                    <p className="ml-4">
                        Your first task is to create a Zod schema for the data within the provided JSON file. This data consists of products within the online store that may have some common properties, and some differing properties based on their <span className="inline-code">category</span>. Start by taking a look at the JSON file to familiarize yourself with the shape of the data you will be validating.
                    </p>
                    <p className="ml-4">
                        Each <span className="red-bold">product</span> must contain the following common properties:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li>
                            <span className="inline-code">id</span> — a positive integer
                        </li>
                        <li>
                            <span className="inline-code">name</span> — a non-empty string
                        </li>
                        <li>
                            <span className="inline-code">price</span> — a number greater than 0
                        </li>
                        <li>
                            <span className="inline-code">category</span> — a string, among the literals "apparel", "accessories", or "stickers"
                        </li>
                        <li>
                            <span className="inline-code">inStock</span> — a boolean
                        </li>
                        <li>
                            <span className="inline-code">tags</span> — an array containing at least one string
                        </li>
                        <li>
                            <span className="inline-code">seller</span> — an object containing a valid seller schema (see below)
                        </li>
                    </ul>
                    <p className="ml-4">
                        A <span className="red-bold">seller</span> must contain the following properties:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li>
                            <span className="inline-code">id</span> — a positive integer
                        </li>
                        <li>
                            <span className="inline-code">name</span> — a non-empty string
                        </li>
                        <li>
                            <span className="inline-code">rating</span> — a number between 0 and 5
                        </li>
                    </ul>
                    <p className="ml-4">
                        The <span className="inline-code">category</span> property determines which additional properties are required for a product. Your schema must represent these different product types as a <span className="red-bold">discriminated union</span> using <span className="inline-code">category</span> as the discriminator.
                    </p>
                    <div className="ml-4 space-y-2">
                        <h4 className="font-semibold text-base sm:text-lg red-bold">Apparel</h4>

                        <p className="ml-4">
                            An <span className="inline-code">apparel</span> product must have a
                            <span className="inline-code">category</span> of <span className="inline-code">"apparel"</span>
                            and must also contain:
                        </p>

                        <ul className="text-lg ml-12 list-disc">
                            <li><span className="inline-code">size</span> — one of <span className="inline-code">S</span>, <span className="inline-code">M</span>, <span className="inline-code">L</span>, or <span className="inline-code">XL</span></li>
                            <li><span className="inline-code">material</span> — a non-empty string</li>
                        </ul>
                    </div>

                    <div className="ml-4 space-y-2">
                        <h4 className="font-semibold text-base sm:text-lg red-bold">Accessories</h4>

                        <p className="ml-4">
                            An <span className="inline-code">accessories</span> product must have a
                            <span className="inline-code">category</span> of <span className="inline-code">"accessories"</span>
                            and must also contain:
                        </p>

                        <ul className="text-lg ml-12 list-disc">
                            <li><span className="inline-code">color</span> — a non-empty string</li>
                            <li><span className="inline-code">compatibleWith</span> — an array containing at least one string</li>
                        </ul>
                    </div>

                    <div className="ml-4 space-y-2">
                        <h4 className="font-semibold text-base sm:text-lg red-bold">Stickers</h4>

                        <p className="ml-4">
                            A <span className="inline-code">stickers</span> product must have a
                            <span className="inline-code">category</span> of <span className="inline-code">"stickers"</span>
                            and must also contain:
                        </p>

                        <ul className="text-lg ml-12 list-disc">
                            <li><span className="inline-code">stickerCount</span> — a positive integer</li>
                            <li><span className="inline-code">waterproof</span> — a boolean</li>
                        </ul>
                    </div>
                    <p className="ml-4">
                        Finally, create an <span className="red-bold">array schema</span> that represents the entire contents of the JSON file.
                        The root value of the file should be an array containing only valid products. This schema should represent your discriminated union of the three types of products.
                    </p>
                    <div className='blue-block'>
                        <h4 className='font-bold'>Hints and Zod Syntax</h4>
                        <p className='mb-2'>
                            We recommend you create smaller schemas first and combine them to create your final product schema.
                        </p>
                        <p className='mb-2'>
                            There are likely many ways to use Zod to arrive at the schema defined above. You are free to explore Zod's different methods to create your final product schema. Zod's <span className="inline-code">z.object()</span>, <span className="inline-code">z.literal()</span>, <span className="inline-code">z.enum()</span>, <span className="inline-code">z.discriminatedUnion()</span>, <span className="inline-code">z.array()</span>, and <span className="inline-code">z.infer()</span> may be useful.
                        </p>
                        <p className='mb-2'>
                            <span className="red-bold">Important:</span> Do not make all category-specific properties optional. The <span className="inline-code">category</span> should determine which properties are required for each product.
                        </p>
                    </div>
                </section>

                {/* Validation */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 3: Parsing and Validation</h3>
                    <p className="ml-4">
                        Write a function that takes in a file name (the JSON data) and outputs various console logs based on the contents of the file alongside a validation result object. Within this function, parse the input JSON using <span className='inline-code'>fs.readFileSync()</span> (similar to HW1). Then, use Zod to validate that JSON data against your defined product array schema (not the inferred TypeScript type) with <span className='inline-code'>safeParse()</span>.
                    </p>
                    <p className="ml-4">
                        Validation will either succeed or fail. 
                    </p>
                    <p className="ml-4">
                        If validation <span className='red-bold'>succeeds</span>:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li>Print out a success message.</li>
                        <li>Print out the total number of products.</li>
                        <li>List each product id, name, category, and at least one of the additional properties of the category in a single formatted string.</li>
                        <li>Return the result object</li>
                    </ul>
                    <p className="ml-4">
                        If validation <span className='red-bold'>fails</span>:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li>Print out a failure message.</li>
                        <li>List out the products that had validation errors, and their associated error message.</li>
                        <li>Return the result object</li>
                    </ul>
                    <div className='blue-block'>
                        <h4 className='font-bold'>Testing, before Unit Testing</h4>
                        <p className="ml-4">
                            You'll be writing unit tests in the section right after this. However, you may it helpful to test your TypeScript code right now. You can run the build command and compile your TS code into JS, and run the file manually (with the command <span className="inline-code">node [filename]</span>). There are modules out there that allow you to run directly from <span className="inline-code">.ts</span> files, if you so choose.
                        </p>
                        <p className="ml-4">
                            Remember that if you do choose to build, any updates to the <span className="inline-code">.ts</span> won't be reflected in the <span className="inline-code">.js</span> compiled file until you run the build command again!
                        </p>
                    </div>
                </section>

                {/* Testing */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 4: Unit Testing</h3>
                    <p className="ml-4">
                        In preparation to test, export the validation function you just wrote so that your test files can use it as a module.
                    </p>
                    <p className="ml-4">
                        You will set up and write some unit tests for your project. We will be using Jest for this purpose, so look up how to install and use the syntax of Jest in order to prepare your test suite. We'd recommend using <span className="inline-code">ts-jest</span> alongside this, but feel free to find your own solution if you come across one. Additionally, set up a script in <span className="inline-code">package.json</span> to be able to quickly run the test suite with either <span className="inline-code">npm run test</span> or <span className="inline-code">npm test</span>.
                    </p>
                    <p className="ml-4">
                        For your unit tests, you must write:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li><span className="red-bold">1 test</span> containing a valid catalog</li>
                        <li><span className="red-bold">1 test</span> containing an invalid catalog </li>
                        <li><span className="red-bold">2 tests</span> containing custom catalog(s) you wrote yourself (not provided by the starter)</li>
                    </ul>
                    <p className="ml-4">
                        Since you are writing your own JSON catalogs, be sure to include these files with your submission!
                    </p>
                    <p className="ml-4">
                        Refer to the rubric at the bottom of the page on how these tests will be graded. These tests can take any form, so long as they represent an attempt to make use of Jest's features to check that validation is performed correctly.
                    </p>
                </section>
                
                {/* Polish & Style */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 5: Style Checking</h3>
                    <p className="ml-4">
                        Finally, you should polish up your project and standardize the style within the project. With <span className='inline-code'>eslint</span>, add 4 extra style rules beyond any recommended default rules for JavaScript and TypeScript. With <span className='inline-code'>prettier</span>, add 2 extra rules beyond the defaults. This process will give you a taste of setting up style checking as part of the production pipeline of projects. Don't just copy the rules from Homework 1 (since some of them require extra dependencies), try branching out a bit and exploring how different rules work!
                    </p>
                </section>
            </section>

            

            {/* Submission */}
            <section id="submission" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <MdGrade />Submission & Rubric</h2>
                
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>README</h3>
                    <p className="ml-4">
                        Answer the provided reflection questions within the starter code README file. In this reflection, you will also indicate whether or not you used AI, and also document your usage of AI as well. Please don't forget this step, as it is important feedback for the homework and the content of the course!
                    </p>  
                </section>
                 
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Submission</h3>
                    <p className='ml-4'>
                       Submit your code through Gradescope as a <span className='inline-code'>.zip</span> file that contains your project. Make sure your project includes all files you worked on during this homework and your <span className='inline-code'>README.md</span> file, all config files for TS, eslint, and prettier, your test script, and the every JSON file used in the tests. You should NOT include the node_modules folder in the <span className='inline-code'>.zip</span> file (feel free to delete it before submission), as it is quite heavy and we will reinstall the dependencies for grading anyways. Make sure the submitted file structure within your submission is <span className='red-bold'>exactly or similar</span> to the file structure you used to run and develop the project. Points will be taken off for malformed project structures in the final submission!
                    </p>
                    <p className='ml-4'>
                        Since you are preparing eslint in your own, we will subject your code to your defined linting rules instead of the standard rules we would apply, so make sure you pass your own set of style rules!
                    </p>
                </section>
                
                <section className='space-y-12'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Rubric</h3>
                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[5pts total]</span> Your project is well organized</h4>
                        <ul className="text-lg ml-6 list-disc">
                            <li><span className='red-bold'>[2pts]</span> The project is well organized and follows a reasonable file/folder structure.</li>
                            <li><span className='red-bold'>[2pts]</span> <span className='inline-code'>package.json</span> includes:</li>
                            <ul className='list-disc ml-8'>
                                <li>A project name</li>
                                <li>A description</li>
                                <li>An author</li>
                                <li>A main script</li>
                                <li>A license</li>
                            </ul>
                            <li><span className='red-bold'>[1pts]</span> Only the packages required during runtime should be listed as <span className='inline-code'>dependencies</span>. The rest should be <span className='inline-code'>devDependencies</span>.</li>
                        </ul>  
                    </div>
                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[8pts total]</span> Product Schema</h4>
                        <ul className="text-lg ml-6 list-disc">
                            <li><span className='red-bold'>[1pts]</span> The script provides a complete schema for the shop's products.</li>
                            <li><span className='red-bold'>[1pts]</span> The script implementation must use the package <span className='inline-code'>zod</span> for validation.</li>
                            <li><span className='red-bold'>[4pts]</span> The schema correctly represents each shop product with:</li>
                            <ul className='list-disc ml-8'>
                                <li>The common properties of each product (<span className='inline-code'>id</span>, <span className='inline-code'>name</span>, <span className='inline-code'>price</span>, <span className='inline-code'>inStock</span>, <span className='inline-code'>tags</span>, <span className='inline-code'>seller</span>)</li>
                                <li>A separate schema for a seller, which is used as part of the common properties above</li>
                                <li>A discriminated union using another property, <span className="inline-code">category</span> as the discriminator</li>
                                <li>Unique properties for each product category</li>
                            </ul>
                            <li><span className='red-bold'>[2pts]</span> All properties have appropriate Zod types and validation rules.</li>
                        </ul>  
                    </div>

                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[10pts total]</span> Validation Function</h4>
                        <ul className="text-lg ml-6 list-disc ">
                            <li><span className='red-bold'>[2pt]</span> The project includes a validation function that takes a filename for a JSON file as an argument, and parses it using fs</li>
                            <li><span className='red-bold'>[2pts]</span> The function uses <span className='inline-code'>safeParse()</span> with the product schema to validate the parsed JSON data.</li>
                            <li><span className='red-bold'>[2pts]</span> For successful validations, the function uses <span className='inline-code'>console.log()</span> to display:</li>
                            <ul className='list-disc ml-8'>
                                <li>A success message</li>
                                <li>The total number of products</li>
                                <li>A list containing each product's ID, name, category, and one category-specific property in a single formatted string</li>
                            </ul>
                            <li><span className='red-bold'>[2pts]</span> For failed validations, the function uses <span className='inline-code'>console.log()</span> to display:</li>
                            <ul className='list-disc ml-8'>
                                <li>A failure message</li>
                                <li>A list of validation failure and their associated error messages</li>
                            </ul>
                            <li><span className='red-bold'>[2pt]</span> The validation result object is returned from the function in both successful and failed cases.</li>
                        </ul>  
                    </div>

                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[6pts total]</span> Your project should use TypeScript.</h4>
                        <ul className="text-lg ml-6 list-disc ">
                            <li><span className='red-bold'>[2pts]</span> The project uses TypeScript.</li>
                            <li><span className='red-bold'>[2pts]</span> All application code, excluding configuration files, is written in TypeScript (.ts files).</li>
                            <li><span className='red-bold'>[2pts]</span> The project contains a <span className='inline-code'>build</span> script in <span className='inline-code'>package.json</span> that uses <span className='inline-code'>tsc</span> to transpile the source code into an output directory.</li>
                        </ul>  
                    </div>

                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[6pts total]</span> Your project should have linting and formatting set up.</h4>
                        <ul className="text-lg ml-6 list-disc ">
                            <li><span className='red-bold'>[3pts]</span> <span className='inline-code'>eslint</span> is installed locally and configured with a configuration file containing at least 4 additional rules beyond the recommended default rules.</li>
                            <li><span className='red-bold'>[3pts]</span> <span className='inline-code'>prettier</span> is installed locally and configured with at least 2 non-default formatting rules.</li>
                        </ul>  
                    </div>

                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[6pts total]</span> Your project should have unit testing.</h4>
                        <ul className="text-lg ml-6 list-disc ">
                            <li><span className='red-bold'>[2pts]</span> Uses the testing suite Jest, which should should be run when you call <span className='inline-code'>npm test</span> or <span className='inline-code'>npm run test</span>.</li>
                            <li><span className='red-bold'>[2pts]</span> For your script, you must write:</li>
                            <ul className="text-lg ml-6 list-disc ">
                                <li>1 test containing a valid catalog</li>
                                <li>1 test containing an invalid catalog </li>
                                <li>2 tests containing custom catalog(s) you wrote yourself (not provided by the starter)</li>
                            </ul>
                            <li><span className='red-bold'>[2pt]</span> Unit tests show attempts to test different validation behaviors and edge cases</li>
                        </ul>  
                    </div>

                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[6pts total]</span> You should include a <span className='inline-code'>README.md</span> and <span className='inline-code'>LICENSE file</span>.</h4>
                        <ul className="text-lg ml-6 list-disc ">
                            <li><span className='red-bold'>[4pts]</span> <span className='inline-code'>README.md</span> has the reflection questions filled out</li>
                            <li><span className='red-bold'>[2pts]</span> Project contains a <span className='inline-code'>LICENSE</span> file, matching the license listed in <span className='inline-code'>package.json</span> (use ISC if not sure which one to pick)</li>
                        </ul>  
                    </div>

                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[3pts]</span> Your submitted code to Gradescope should not include <span className='inline-code'>node_modules</span>. (This should mirror what would happen if you had pushed this project to a GitHub repo with node_modules in a .gitignore)</h4>
                    </div>
                </section>
            </section>
        </div>
    </div>
  )
}