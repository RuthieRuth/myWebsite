import independenceSquare from "../assets/independenceSquare.jpg";
import adomi from "../assets/adomi.jpg";
import worldCountries from "../assets/worldCountries.jpg";

interface WhoAmI {
    id: number;
    title: string;
}

interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    liveLink: string;
    sourceCode: string;
}

export const whoAmI: WhoAmI[] = [
    { id: 1, title: "Web Developer" },
    { id: 2, title: "Team Leader" },
    { id: 3, title: "JavaScript Enthusiast" },
    { id: 4, title: "Client Relations Expert" }
];

export const projectsDisplayed: Project[] = [
    { 
        id: 1, 
        title: "Employee Mgt", 
        image: independenceSquare,
        description: "Employee Management App.",
        liveLink: "https://employee-mgt-app.netlify.app/",
        sourceCode: "https://ruthieruth.github.io/Portfolio/"
     },
    { 
        id: 2, 
        title: "Project 2", 
        image: adomi,
        description: "A web application showcasing the beauty of Adomi Bridge.",
        liveLink: "https://example.com/project2",
        sourceCode: "https://github.com/example/project2"
    },
    { 
        id: 3, 
        title: "World Countries", 
        image: worldCountries,
        description: "Countries in the world.",
        liveLink: "https://noeurcountries.netlify.app/",
        sourceCode: "https://github.com/example/project3"
    },
    { 
        id: 4, 
        title: "Project 4", 
        image: "",
        description: "A web application showcasing the beauty of Project 4.",
        liveLink: "https://example.com/project4",
        sourceCode: "https://github.com/example/project4"
    }
];