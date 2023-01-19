/* eslint-disable max-len */
import React from "react";
import {
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";

export interface ISocial {
    name: "LinkedIn" | "Github" ;
    url: string;
    icon: any;
}

export interface ICertification {
    name: string;
    issuedBy: string;
}

export interface IProject {
    imageUrl?: string;
    name: string;
    companyName: string;
    description: string[];
    tags: string[];
}

export interface IExperience {
    shortName: string;
    companyName: string;
    endDate: string;
    position: string;
    startDate: string;
    summary: string;
    website: string;
}

export interface ISkill {
    languages: string[];
    frameworks: string[];
    libraries: string[];
    tools: string[];
    devtools: string[];
}

export interface IStudent {
    avatar: string;
    name: string;
    quote: string;
}

export interface IAward {
    name: string;
    year: string;
    publisher?: string;
}

export interface IProfile {
    name: string;
    intro: string;
    location: string;
    skills?: ISkill;
    phone: string;
    email: string;
    socials: ISocial[];
    bio: string[];
    students?: IStudent[];
    experiences?: IExperience[];
    certifications?: ICertification[];
    projects?: IProject[];
    goodByeText: string;
    awards: IAward[];
}

const profile: IProfile = {
    name: "Umair Zafar",
    intro: "React focused Full Stack Dev | Teaching people to be self-taught programmers",
    location: "Canada",
    phone: "9029168084",
    socials: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/umair-zafar-099028107/",
            icon: <FaLinkedinIn />
        },
        {
            name: "Github",
            url: "http://www.github.com/umairzafar164",
            icon: <FaGithub />
        }
    ],
    email: "umairzafar164@gmail.com",
    bio: [
        "I'm a Canadian-based React focused web developer who specializes in building exceptional digital experiences. Currently, I'm looking for a role and working on a Full Stack React Native project.",
    ],
    skills: {
        languages: ["Javascript (ES6)", "TypeScript", "HTML", "CSS"],
        frameworks: ["React", "NextJs", "NodeJs", "ExpressJs", "React Native", "NextJs", "jQuery"],
        libraries: ["Redux", "ant Design", "React Bootstrap", "Semantic UI", "graphQl", "Material UI", "Context API", "Enzyme"],
        tools: ["Git", "Postman", "JSON Web Tokens"],
        devtools: ["Visual Studio", "NPM", "Yarn"],
    },
    experiences: [
        {
            shortName: "Octek",
            companyName: "Octek Pvt Ltd",
            endDate: "Nov 2022",
            position: "Associate Software Engineer",
            startDate: "Oct 2020",
            summary:
                "Worked with clients from around the world on multiple projects as a frontend engineer. From React Js to Next Js, worked on jQuery while implemeting multiple latest UI libraries like AntDesign, MaterialUI Bootstrap and tools like redux.",
            website: "https://octek.ca/",
        },
        {
            shortName: "Personal Experience",
            companyName: "Personal Experience",
            endDate: "Present",
            position: "Full Stack Engineer",
            startDate: "Nov 2021",
            summary:
                "Working on a full stack React Native app whose backend is coded in NodeJS woth Express Js and mongoDB. Also worked on a web based EHR and EMR solution called MediX. It was made on React Js, along with .Net core on the backend and Maria DB as the data layer. ",
            website: "#",
        }
    ],
    certifications: [
        {
            name: "JavaScript",
            issuedBy: "CodeCademy",
        },
        {
            name: "Advanced ReactJS",
            issuedBy: "CodeCademy",
        },
        {
            name: "Introduction to ReactJS",
            issuedBy: "CodeCademy",
        },
    ],
    projects: [
        {
            name: "Mamaar",
            imageUrl:
                "https://www.dreamhost.com/blog/wp-content/uploads/2019/09/2ec0eb40-2c16-4fa2-86ac-9a78c1c86a88_RealEstate20opt-750x498.jpg",
            companyName: "Octek",
            description: [
                "Coded a real-estate buying website with multiple user-roles using react and redux. Implemented typescript, REST api’s with ant-design as a UI library and react-router for navigation.",
            ],
            tags: ["ReactJS", "TypeScript", "Redux", "AntDesign"],
        },
        {
            name: "Skoop",
            imageUrl:
                "https://tagembed.com/blog/wp-content/uploads/2021/07/Embed-RSS-Feeds-on-Websites.png",
            companyName: "Octek",
            description: [
                "Used Next JS, worked on the frontend of this project. Fetched an RSS feed in server-side (using SSR 'Server-Side Rendering') feature offered by Next JS and then displayed the content using dynamic transitions, schedules and positions on the user interface. Implemented Web worker to fetch API response in a loop. Next Js was chosen for this project as it is SEO friendly.",
            ],
            tags: ["NextJS", "SSR", "WebWorker", "React Transitions"],
        },
        {
            name: "Vwallet",
            imageUrl:
                "https://static.vecteezy.com/system/resources/previews/004/553/168/original/pay-bills-online-landing-page-template-credit-card-transaction-website-interface-idea-with-flat-illustrations-e-payment-homepage-layout-online-invoice-web-banner-webpage-cartoon-concept-vector.jpg",
            companyName: "Octek",
            description: [
                "Built a platform where you can view and pay all your utility bills. Used NextJs with typescript, react-hook-form, react-query and ant-design, being mobile responsive.",
            ],
            tags: ["NextJs", "React-hook-forms", "React Query"],
        },
        {
            name: "DeliveryX",
            imageUrl:
                "data:image/jpeg;base64,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",
            companyName: "Octek",
            description: [
                "Worked on this eCommerce platform for ordering food and groceries. Coded the web app with multiple panels as super admin, admin, brand admin, branch admin and rider. Built with react js, implemented graphQl for API calls. For UI, react-bootstrap was used.",
            ],
            tags: ["React JS", "grapgQl", "React-Bootstrap"],
        },
        {
            name: "CyberX",
            imageUrl:
                "https://upwork-usw2-prod-assets-static.s3.us-west-2.amazonaws.com/org-logo/1552609223841312768",
            companyName: "Octek",
            description: [
                "A website to alert users of phishing platforms, built with jQuery, materialize css as a UI library and canvas using chart Js. Added tons of new features, forms, pages, graphs, charts and DataTables in this project.",
            ],
            tags: ["jQuery", "DataTables", "MaterializeCSS", "ChartJS"],
        },
        {
            name: "FoodAlchoholic",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJsvmG-h-FD6ryWuMIgxApazT3kqRIhzIlWQ&usqp=CAU",
            companyName: "Personal Experience",
            description: [
                "A full stack food search app who’s backend is developed using Node Js with Express Js and mongoDB while frontend is built in React Native. A super-admin is allowed to add, edit and delete restaurants, and the user can register then login and see a list of available restaurants in the city, search specific foods, view its price, rate and give a review to the restaurant.",
            ],
            tags: ["NodeJS", "ExpressJS", "React Native", "MongoDB"],
        },
        {
            name: "MediX",
            imageUrl:
                "https://www.templateshub.net/uploads/medi.jpg",
            companyName: "Personal Experience",
            description: [
                "A web based EHR and EMR solution called MediX. It was made on React Js, along with .Net core on the backend and Maria DB as the data layer. My primary responsibility was to work on robust frontend user interfaces which included modules ranging from doctors to in-patients and out-patients management, inventory and employee management, including user preferences and salary dispatching. The UI consisted of dashboards which showed doctor's statistics and provided in debt analysis on patients in-flow, patient’s recovery cycle and current workloads in different areas of the hospital.",
            ],
            tags: [".NET", "React", "TypeScript", "React-Bootstrap"],
        },
    ],
    awards: [
        {
            name: "NUST Semester scholarship",
            year: "2018"
        },
        {
            name: "NUST Semester scholarship",
            year: "2017"
        },
        {
            name: "GBHS & IC 2nd year scholarship",
            year: "2013"
        },
    ],
    goodByeText:
        "I'm actively looking for any opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
};

const getProfileData = () => profile;

export default getProfileData;
