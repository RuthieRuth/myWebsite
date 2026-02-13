import independenceSquare from "../assets/independenceSquare.jpg";
import worldCountries from "../assets/worldCountries.jpg";
import IllusiaRy from "../assets/IllusiaRy.jpg";
import PingPoint from "../assets/PingPoint.jpg";

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
        title: "Illusia Ry", 
        image: IllusiaRy,
        description: "A web-based inventory management system designed to track equipment, props, and items loaned out to LARP (Live Action Role Playing) members.",
        liveLink: "https://www.youtube.com/watch?v=YHO-g_TCN44&list=PLeIi_6AJN14Tny5sNTIE14gZJujwqRcxV&index=2",
        sourceCode: "http://github.com/RuthieRuth/illusia-project/tree/main"
    },
    { 
        id: 3, 
        title: "World Countries", 
        image: worldCountries,
        description: "Countries in the world.",
        liveLink: "https://noeurcountries.netlify.app/",
        sourceCode: "https://github.com/RuthieRuth/World-Countries"
    },
    { 
        id: 4, 
        title: "PingPoint App", 
        image: PingPoint,
        description: "Social community networking app ",
        liveLink: "https://www.pingpoint.app/",
        sourceCode: ""
    }
];