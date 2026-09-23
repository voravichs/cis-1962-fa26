import SideNav from '@/components/Sidenav';
import { FaCode, FaPlug, FaClipboardList } from "react-icons/fa";
import { MdGrade } from "react-icons/md";
import schedule from '@/data/schedule';

import Link from 'next/link';
import type { Metadata } from "next";
import XLink from '@/components/XLink';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IoMdAlert } from 'react-icons/io';

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
  title: "HW4 | CIS 1962",
  description: "Homework 4 Page of CIS 1962 for Spring 2026 at the University of Pennsylvania",
};

export default function HW4() {
    return (
        <div className="scroll-mt-48 max-w-5xl mx-auto text-lg text-black dark:text-white">      
            {/* Side Nav */}
        <SideNav sections={SECTIONS}/>
      
        <div className="mx-auto text-lg">
            {/* Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 4: ChatJS</h1>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due October 8th at 11:59 PM</h3>

            <div className='red-block font-mono'><span className='font-bold'>Topics:</span> HTTP Requests, API Calls, Asynchronous JavaScript, LLM Chatbots</div>

            {/* Intro Text */}
            <section className="space-y-8 mb-8">
                <p className="ml-4">
                   In this homework, we will use HTML, CSS, and JavaScript to build a chatbot using the Gemini API!
                </p>
                <p className="ml-4">
                   This homework will involve working with asynchronous JavaScript, making HTTP requests to APIs, and handling responses from a large language model (LLM) to create a functional chatbot. You will also implement a chat persistence feature that allows users to save and retrieve their chat history.
                </p>
                <p className="ml-4">
                   This project will use a combination of Gemini API calls for generating chat responses, and a provided Chat API for saving and retrieving chat history. You will need to implement the necessary methods to interact with these APIs and handle the data appropriately.
                </p>
                <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
                <ul className="text-lg ml-6 list-disc">
                    <li>Build a fully-functional LLM chatbot that uses Google Gemini</li>
                    <li>Test your ability to work with asynchronous syntax in JavaScript</li>
                    <li>Gain experience with working with backend systems by sending data to a provided storage API to save chat history</li>
                </ul>
            </section>

            {/* Introduction */}
            <section id="introduction" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <FaPlug /> Introduction &amp; Installation</h2>

                {/* Starter */}
                <a
                    href={schedule[4].homework?.starter}
                    className="flex justify-center items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-red-300 w-1/2 my-4 cursor-pointer"
                >
                    <FaCode /> Starter Code
                </a>

                {/* Files */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Files</h3>
                    <p className="ml-4">
                        Upon retrieving the starter files, make sure you have the following files:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li><span className='inline-code'>script.ts</span></li>
                        <li><span className='inline-code'>chat.ts</span></li>
                        <li><span className='inline-code'>chat-api.ts</span></li>
                        <li><span className='inline-code'>types.ts</span></li>
                        <li>An empty <span className='inline-code'>index.html</span></li>
                        <li>A filled sample <span className='inline-code'>style.css</span></li>
                        <li> <span className='inline-code'>package.json</span>, the ts/prettier/eslint configs, <span className='inline-code'>RUBRIC.md</span>, and an <span className='inline-code'>README.md</span> file</li>
                    </ul>  
                </section>

                {/* Installation */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Installation & Running</h3>
                    <p className="ml-4">
                        This homework uses TypeScript, so you will need to build your ts files into js files before running the project. 
                    </p>
                    <p className="ml-4">
                        You will be using the <span className='inline-code'>serve</span> package to run the project, as it is a simple static file server that will serve your files on a local port. The start script is provided in the <span className='inline-code'>package.json</span> file, which will build your ts files and then run the server on port 3000. You can run <span className='inline-code'>npm start</span> in the terminal to run the project. You can then open your browser and navigate to <span className='inline-code'>http://localhost:3000</span> to see your project running, or use VSCode's built-in browser to view it in your IDE.
                    </p>
                </section>

                {/* Gemini */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Google Gemini</h3>
                    <p className="ml-4">
                        In this homework, you will use the Gemini API to generate responses.
                    </p>
                    <p className='green-block'>
                        🤑 Gemini offers a free API, no credit card required!
                    </p>
                    <p className='ml-4'>First, you will need to create a new project in the <XLink link='https://console.cloud.google.com/' text='Google Cloud Console'/>. (This may require you to have a separate Google account from your school account. Let us know ASAP if you have issues with this step) </p>
                    <p className='ml-4'>Once you've created a project, head over to <XLink link='https://aistudio.google.com/u/0/apikey' text='Google AI Studio'/> and create a new API key.</p>
                    <p className='ml-4'>
                        It should ask for your project name, and then you can create a new API key. Select the project you created in the previous step.
                    </p>
                    <p className='ml-4'>
                        Once you have created the API key, you can copy it and paste it into the <span className='inline-code'>chat.ts</span> file in the first lines of the script:
                    </p>
                    <div className='blue-block font-mono my-4 text-sm sm:text-xl ml-8'>
                    <SyntaxHighlighter
                        language="javascript"
                        style={vs}
                        customStyle={{
                            background: 'none',
                            border: 'none',
                            margin: 0,
                            padding: 0,
                        }}
                    >{`// Insert your Gemini API key here
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/...";`}</SyntaxHighlighter>
                    </div>
                    <p className='ml-4'>
                        Make sure to replace the placeholder string with your actual Gemini API key. Keep in mind that you should <span className='red-bold'>never</span> share your API key publicly or commit it to a public repository, as it can be used by others to access your quota and potentially incur costs.
                    </p>
                    <p className='ml-4'>
                        The starter code has provided a template Gemini API URL that calls the Gemini 3.8 Flash model. There are many applicable models that you could use for this assignment, so feel free to search them up and experiment with different ones if you are interested! You can find the documentation for the Gemini API <XLink link='https://ai.google.dev/gemini-api/docs' text='here'/>. Note that are using fetch API to call the Gemini API instead of the official client library in the docs since we are working in a primarily frontend environment only.
                    </p>
                </section>

                {/* Installation */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Chat API</h3>
                    <p className='ml-8'>
                        In order to use the Chat API for chat persistence, you will need another API key that we will provide for you. You should receive a Canvas message or email from the instructors soon after the homework is released with your API key. Make sure to <b>never</b> share this API key, just as you wouldn't share your Gemini API key! Once you have the API key, paste it into the <span className='inline-code'>chat-api.ts</span> file towards the top where the placeholder string is. This API key is specific to the Chat API and is different from your Gemini API key, so make sure not to mix them up!:
                    </p>
                    <div className='blue-block font-mono my-4 text-sm sm:text-xl ml-8'>
                    <SyntaxHighlighter
                        language="javascript"
                        style={vs}
                        customStyle={{
                            background: 'none',
                            border: 'none',
                            margin: 0,
                            padding: 0,
                        }}
                    >{`// Insert your Chat API key here
const BASE_URL = "https://cis-1962-fa26-hw4.onrender.com/api";
const API_KEY = "YOUR_CHAT_API_KEY";`}</SyntaxHighlighter>
                    </div>
                    <div className='red-block'>
                        <h4 className='font-bold'> Important: Cold-Starting the API</h4>
                        <p>
                            When you make the first request to the API after it has been idle for a while, it may take a long time to respond (up to a minute or two) since the server needs to "wake up" from idleness. This is called cold-starting. To avoid this, you can make a simple GET request to the /chat endpoint right after you initialize the app to wake up the server. You can type the following command into the terminal to make a simple API request to wake up the server and start working:
                        </p>
                        <pre className='blue-block font-mono mt-4'>
                            <code>
                                curl "https://cis-1962-fa26-hw4.onrender.com/api/version"
                            </code>
                        </pre>
                    </div>
                </section>
            </section>

            {/* Instructions */}
            <section id="instructions" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><FaClipboardList />Instructions</h2>

                {/* Part 1 */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 1: ChatAPI & Persistence</h3>
                    <pre className='red-block ml-4 w-full'>
                        <b>Files</b>: <span className='inline-code'>chat-api.ts</span>, <span className='inline-code'>script.ts</span>
                    </pre>
                    <p className="ml-4">
                        We will begin by implementing the chat API to save the chat history. Implement the following in the <span className='inline-code'>chat-api.ts</span> file:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li><span className='inline-code'>ChatAPI</span>'s constructor</li>
                        <li><span className='inline-code'>GET /chat</span> - <span className='inline-code font-bold'>fetchChats()</span></li>
                            <ul className='list-disc ml-8'>
                                <li>Response: <span className='inline-code'>{`id: "default", messages: { role: string, content: string }[] `}</span></li>
                            </ul>
                        <li><span className='inline-code'>POST /chat</span> - <span className='inline-code font-bold'>createChat()</span></li>
                            <ul className='list-disc ml-8'>
                                <li>Response: <span className='inline-code'>{` id: string, messages: { role: string, content: string }[]  `}</span></li>
                            </ul>
                        <li><span className='inline-code'>GET /chat/:id</span> - <span className='inline-code font-bold'>getChat(id: string)</span></li>
                            <ul className='list-disc ml-8'>
                                <li>Response: <span className='inline-code'>{`id: "default", messages: { role: string, content: string }[] `}</span></li>
                            </ul>
                        <li><span className='inline-code'>PUT /chat/:id</span> - <span className='inline-code font-bold'>updateChat(chat: Chat)</span></li>
                            <ul className='list-disc ml-8'>
                                <li>Request: <span className='inline-code'> {`id: "default", messages: { role: string, content: string }[] `}</span></li>
                                <li>Response: <span className='inline-code'>{` id: "default", messages: { role: string, content: string }[] `}</span></li>
                            </ul>
                        <li><span className='inline-code'>DELETE /chat</span> - <span className='inline-code font-bold'>clearChats()</span></li>
                            <li className='list-disc ml-8'>(no request or response)</li>
                    </ul>
                    <p className="ml-4">
                        For these methods, you will need to use the fetch API to make HTTP requests to the provided endpoints. For instance, all of these requests use the /chat endpoint, so you would use the URL <span className='inline-code'>https://cis-1962-fa26-hw4.onrender.com/api/chat</span>, but the PUT request would also include the chat ID as a parameter in the URL. 
                    </p>
                    <p className="ml-4">
                        Additionally, when sending requests to the API, you may need to specify the method, body, and headers of the HTTP request. Any HTTP method (POST, PUT, DELETE) that is NOT GET should have the requisite method specified (since fetch by default sends a GET request). Any requests that have a specified "request" body in the API documentation will require you to include that JSON body in the request, and ALL requests will require you to include your API key in the headers (for authentication purposes). Use the following format for the headers within your fetch requests:
                    </p>
                    <div className='blue-block font-mono my-4 text-sm sm:text-xl ml-8'>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vs}
                            customStyle={{
                                background: 'none',
                                border: 'none',
                                margin: 0,
                                padding: 0,
                            }}
                        >{`headers: {
    "Authorization": \`Bearer \${this.apiKey}\`,
    "Content-Type": "application/json" // only needed for requests with a body
}`}</SyntaxHighlighter>
                    </div>
                </section>

                <hr></hr>

                {/* Part 2 */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 2: Chat Messages</h3>
                    <pre className='red-block ml-4 w-full'>
                        <b>Files</b>: <span className='inline-code'>script.ts</span>, <span className='inline-code'>chat.ts</span>
                    </pre>
                    <p className="ml-4">
                        Now we will implement the Chat class to send and store messages. We've provided you the implementation of <span className='inline-code'>generateGeminiResponse()</span> method in <span className='inline-code'>chat.ts</span>, which sends a request to the Gemini API and retrieves a response. You'll be using this method within the file to input a chat log and output a response from the Gemini API.
                    </p>
                    <p className="ml-4">
                        Implement the following in the <span className='inline-code'>chat.ts</span> file:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li>The <span className='inline-code'>Chat</span> class's constructor</li>
                        <li><span className='inline-code'>getMessages()</span>: Get an array of the message log</li>
                        <li><span className='inline-code'>sendMessages(message)</span>: Send a new message to the message log, generate a response from the Gemini API, and update the message log</li>
                        <li><span className='inline-code'>save()</span>: saves the chat to the ChatAPI, by calling the updateChat() method.</li>
                    </ul>
                </section>

                <hr></hr>

                {/* Part 3 */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 3: Chat UI</h3>
                    <pre className='red-block ml-4 w-full'>
                        <b>Files</b>: <span className='inline-code'>index.html</span>, <span className='inline-code'>style.css</span>
                    </pre>
                    <p className="ml-4">
                        We need one more step before we make the chat functional: we need the chat UI! You will need to make changes to the <span className='inline-code'>index.html</span> and <span className='inline-code'>style.css</span> files to create a chat interface that allows users to send messages and view responses from the chatbot.
                    </p>
                    <p className='ml-4'>
                        You will need to implement the following UI elements in <span className='inline-code'>index.html</span> and style them in <span className='inline-code'>style.css</span>:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li>A chat container that displays the chat messages</li>
                        <li>A message input field for the user to type their message</li>
                        <li>A send button to send the message</li>
                        <li>A chat list to display available chats</li>
                        <li>A new chat button to create a new chat</li>
                        <li>A delete all chats button to clear all chats</li>
                    </ul>
                    <p className='ml-4'>
                        Feel free to style the chat messages, input, and form within style.css. We've provided a template stylesheet, but you can modify it as needed. You can use modern chat clients like ChatGPT or apps like WhatsApp as a model. Just be sure that it is easily readable and accessible- you will lose points if your app is unusable, hard to read, or confusing to use. Feel free to be creative! 😃
                    </p>
                </section>

                <hr></hr>

                {/* Part 4 */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 4: Chat Functionality</h3>
                    <pre className='red-block ml-4 w-full'>
                        <b>Files</b>: <span className='inline-code'>script.ts</span>, <span className='inline-code'>index.html</span>, <span className='inline-code'>style.css</span>
                    </pre>
                    <p className="ml-4">
                        Finally, let's make the chat functional! You will need to implement the following in the <span className='inline-code'>script.ts</span> file:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li>A default <span className='inline-code'>Chat</span> class for the first load of the app</li>
                        <li><span className='inline-code'>initializeApp()</span>: Runs on the first load of the app, fetching the first chat from the chatAPI and switching to it, or default if there are no chats yet. If default is chosen, a new chat is created.</li>
                        <li><span className='inline-code'>switchToChat()</span>: Switches to a different chat. This is called upon first load, or when a user clicks a button for a different chat on the sidebar.</li>
                        <li><span className='inline-code'>renderChatList()</span>: Renders the list of available chats (gotten form the ChatAPI) on the sidebar.</li>
                        <li><span className='inline-code'>renderMessages()</span>: Renders the messages of the currently selected chat. This will display the actual back and forth between a user and the LLM, which you will need to style appropriately.</li>
                        <li><span className='inline-code'>hideTypingIndicator()</span>/<span className='inline-code'>showTypingIndicator()</span>: Hides and shows a typing indicator respectively. </li>
                        <li>An event listener to handle submitting messages.</li>
                        <li>An event listener to create a new chat when the "New Chat" button is clicked"</li>
                        <li>An event listener to clear all chats when the "Clear Chats" button is clicked"</li>
                    </ul>
                
                    <p className="ml-4">
                        Documentation and details for each of the methods above can be found in the JSDocs and comments within the starter code. Make sure to read through them carefully and understand what each method is supposed to do before implementing it.
                    </p>

                    <p className="ml-4">
                        After you have implemented the `script.js` file, you should be able to:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li>See an initial default chat upon first load (with no previous chats)</li>
                        <li>See the chat list in the chat list container</li>
                        <li>Click on the "Create New Chat" button to create a new chat</li>
                        <li>Click on a chat item to switch to that chat</li>
                        <li>See the chat messages in the chat messages container</li>
                        <li>See the chat input and form in the chat form container</li>
                        <li>Send messages to the chat and get responses from the LLM</li>
                    </ul>
                    <p className="ml-4">
                        Do not worry too much about the sorted order of the chat list. You only need to show us the ID of the chat in the chat list, and just make sure that the chat list stores the correct chatIds and messages.
                    </p>
                    <p className="ml-4">
                        Make sure to test out your chatbot thoroughly and ensure that it is working as expected. Make sure it can handle errors as well, such as when the API keys are invalid or when the API is down. You can simulate these errors by changing the API keys to invalid values or by temporarily disabling your internet connection. Make sure to handle these errors gracefully and provide appropriate feedback to the user.
                    </p>
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